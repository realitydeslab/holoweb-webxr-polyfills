// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import mocha from 'mocha';
import { assert } from 'chai';

import XRDevice from '../../src/api/XRDevice';
import XRSession from '../../src/api/XRSession';
import XRDevicePose from '../../src/api/XRDevicePose';
import { createXRDevice } from '../lib/utils';
import { mat4 } from 'gl-matrix';

// Half of an avg 62mm IPD value for the
// mock view matrices
const OFFSET = 0.031;

describe('API - XRDevicePose', () => {
  let device, session, ref;
  // Technically this will expose the `frame` on a different than
  // requested tick, but as long as we're not asking for a new frame,
  // nothing should change in this mock env
  let getFrame = () => new Promise(r => session.requestAnimationFrame((t, frame) => r(frame)));
  beforeEach(async function () {
    device = createXRDevice({ hasPosition: true });
    session = await device.requestSession({ immersive: true });
    ref = await session.requestFrameOfReference('eye-level');
  });

  it('exposes a PRIVATE named export', async function () {
    const frame = await getFrame();
    const pose = frame.getDevicePose(ref);
    assert.ok(pose[PRIVATE]);
  });

  it('gets an updated poseModelMatrix every frame', async function () {
    let expected = new Float32Array(16);
    mat4.identity(expected);

    // On each frame, check to see that the poseModelMatrix is
    // going up the Z-axis on every tick
    for (let z = 0; z < 3; z++) {
      let frame = await getFrame();
      let pose = frame.getDevicePose(ref);
      expected[14] = z + 1;
      assert.deepEqual(pose.poseModelMatrix, expected);
    }
  });

  it('gets updated view matrices frame', async function () {
    let expected = new Float32Array(16);

    // On each frame, check to see that the view matrices are
    // going up the Z-axis on every tick, and include IPD offsets
    for (let z = 0; z < 3; z++) {
      let frame = await getFrame();
      let pose = frame.getDevicePose(ref);
      assert.equal(frame.views.length, 2);
      for (const view of frame.views) {
        mat4.copy(expected, pose.poseModelMatrix);
        expected[12] += view.eye === 'left' ? -OFFSET : OFFSET;
        mat4.invert(expected, expected);
        assert.deepEqual(pose.getViewMatrix(view), expected);
      }
    }
  });
});
