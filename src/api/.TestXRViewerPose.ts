// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT


interface XRFrame2 {
  public getA(lightProbe: number): number;
}

interface XRFrame2 {
  public getLightEstimate(lightProbe: number): number;
}

class XRFrame2 implements XRFrame2 {
  public getA(lightProbe: number): number {
    return lightProbe;
  }
}

export XRFrame2;