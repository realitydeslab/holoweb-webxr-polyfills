// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

describe('API - XRFrame', () => {
  let device: XRDevice;
  let session: XRSession;

  beforeEach(async function () {
    device = createXRDevice();
    session = await device.requestSession({ immersive: true });
    ref = await session.requestFrameOfReference('eye-level');
  });
  