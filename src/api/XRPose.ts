// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRRigidTransform from './XRRigidTransform';

/**
 * @see https://immersive-web.github.io/webxr/#xrpose-interface
 */
export default class XRPose {
  #transform: XRRigidTransform;
  #emulatedPosition: boolean;
  
  constructor(transform: XRRigidTransform, emulatedPosition: boolean = false) {
    this.#transform = transform;
    this.#emulatedPosition = emulatedPosition;
  }

  get transform(): XRRigidTransform { 
    return this.#transform; 
  }

  get linearVelocity(): DOMPointReadOnly | null {
    return null;
  }

  get angularVelocity(): DOMPointReadOnly | null {
    return null;
  }

  get emulatedPosition(): boolean { 
    return this.#emulatedPosition; 
  }
}
