// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

/**
 * @see https://immersive-web.github.io/webxr/#xrviewport-interface
 */
export interface XRViewportInit {
  x: number;
  y: number;
  width: number;
  height: number;
}

export default class XRViewport {

  #target: XRViewportInit;

  /**
   * Takes a proxy object that this viewport's XRView
   * updates and we serve here to match API.
   *
   * @param {Object} target
   */
  constructor(target: XRViewportInit) {
    this.#target = target;
  }

  get x(): number { 
    return this.#target.x; 
  }

  get y(): number { 
    return this.#target.y; 
  }

  get width(): number { 
    return this.#target.width; 
  }

  get height(): number { 
    return this.#target.height; 
  }
}
