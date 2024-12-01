// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRFrame from './XRFrame';
import XRInputSource from './XRInputSource';

/**
 * @see https://immersive-web.github.io/webxr/#xrinputsourceevent-interface
 */

type XRInputSourceEventType = "select" | "selectend" | "selectstart" | "squeeze" | "squeezeend" | "squeezestart";

export interface XRInputSourceEventInit extends EventInit {
  frame?: XRFrame;
  inputSource?: XRInputSource;
}


export default class XRInputSourceEvent extends Event {
  #frame?: XRFrame ;
  #inputSource?: XRInputSource;

  constructor(type: XRInputSourceEventType, eventInitDict: XRInputSourceEventInit = {}) {
    super(type, eventInitDict);
    this.#frame = eventInitDict.frame;
    this.#inputSource = eventInitDict.inputSource;
    // safari bug:  super() seems to return object of type Event, with Event as prototype
    //TODO:
    //Object.setPrototypeOf(this, XRInputSourceEvent.prototype);
  }

  get frame(): XRFrame | undefined { 
    return this.#frame; 
  }

  get inputSource(): XRInputSource | undefined { 
    return this.#inputSource; 
  }
}

export interface XRInputSourceEventHandler {
  (evt: XRInputSourceEvent): any;
}
