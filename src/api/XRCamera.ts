// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

export default interface XRCamera {
  width: number;
  height: number;
}

partial interface XRWebGLBinding {
  WebGLTexture? getCameraImage(XRCamera camera);
};

