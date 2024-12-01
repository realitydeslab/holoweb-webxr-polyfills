// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT


/**
 * @see https://www.w3.org/TR/webxr-depth-sensing-1/
 */
export enum XRDepthUsage {
  "cpu-optimized" = "cpu-optimized",
  "gpu-optimized" = "gpu-optimized"
}

export enum XRDepthDataFormat {
  "luminance-alpha" = "luminance-alpha",
  "float32" = "float32"
}

export interface XRDepthStateInit {
  usagePreference: Array<XRDepthUsage>;
  dataFormatPreference: Array<XRDepthDataFormat>;
}

interface XRSessionInit {
  depthSensing?: XRDepthStateInit;
}

export class XRDepthInformation {
  get width(): number {

  }

  get height(): number {

  }

  get normDepthBufferFromNormView(): XRRigidTransform {

  }

  get rawValueToMeters(): number {

  }

}

export class XRCPUDepthInformation extends XRDepthInformation {
    data: ArrayBuffer;

    getDepthInMeters(x: number, y: number): number {
      return s;
    }
}

interface XRFrame {
    getDepthInformation(view: XRView): XRCPUDepthInformation | undefined;
}

interface XRWebGLDepthInformation extends XRDepthInformation {
    readonly texture: WebGLTexture;
}

interface XRWebGLBinding {
    getDepthInformation(view: XRView): XRWebGLDepthInformation | undefined;
}

// enabledFeatures
interface XRSession {
    enabledFeatures: string[];
}
