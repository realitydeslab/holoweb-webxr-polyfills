// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRWebGLLayer from './XRWebGLLayer';
import XRLayer from './XRLayer';

/**
 * @see https://immersive-web.github.io/webxr/#xrrenderstate-interface
 */
export interface XRRenderStateInit {
  depthNear?: number,
  depthFar?: number,
  inlineVerticalFieldOfView?: number,
  baseLayer?: XRWebGLLayer,
  layers?: XRLayer[]
}

export default class XRRenderState {
  #depthNear: number;
  #depthFar: number;
  #inlineVerticalFieldOfView: number | null;
  #baseLayer: XRWebGLLayer | null;

  /**
   * @param {Object?} stateInit
   */
  constructor(stateInit: XRRenderStateInit = {}) {
    this.#depthNear = stateInit.depthNear ?? 0.1;
    this.#depthFar = stateInit.depthNear ?? 1000.0;
    this.#inlineVerticalFieldOfView = stateInit.inlineVerticalFieldOfView ?? null;
    this.#baseLayer = stateInit.baseLayer ?? null;
  }

  get depthNear(): number { 
    return this.#depthNear; 
  }

  get depthFar(): number { 
    return this.#depthFar; 
  }

  get inlineVerticalFieldOfView(): number | null { 
    return this.#inlineVerticalFieldOfView; 
  }

  get baseLayer(): XRWebGLLayer | null { 
    return this.#baseLayer; 
  }
}
