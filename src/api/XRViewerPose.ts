// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRRigidTransform from './XRRigidTransform';
import XRPose from './XRPose';
import XRView from './XRView';

/**
 * @see https://immersive-web.github.io/webxr/#xrpose-interface
 */
export default class XRViewerPose extends XRPose {
  #views: ReadonlyArray<XRView>;

  constructor(transform: XRRigidTransform, views: ReadonlyArray<XRView>, emulatedPosition: boolean = false) {
    super(transform, emulatedPosition);
    this.#views = views;
  }

  get views(): ReadonlyArray<XRView> {
    return this.#views;
  }
}
