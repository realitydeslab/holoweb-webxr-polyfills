// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRSession from "./XRSession";
import XRInputSource from "./XRInputSource";

/**
 * @see https://immersive-web.github.io/webxr/#xrinputsourceschangeevent-interface
 */
export interface XRInputSourcesChangeEventInit extends EventInit {
  session?: XRSession;
  added?: ReadonlyArray<XRInputSource>; 
  removed?: ReadonlyArray<XRInputSource>;
}

export default class XRInputSourcesChangeEvent extends Event {
  #session?: XRSession | undefined;
  #added?: ReadonlyArray<XRInputSource> | undefined;
  #removed?: ReadonlyArray<XRInputSource> | undefined;

  constructor(type: string, eventInitDict: XRInputSourcesChangeEventInit = {}) {
    super(type, eventInitDict);
    this.#session = eventInitDict.session;
    this.#added = eventInitDict.added;
    this.#removed = eventInitDict.removed;

    // safari bug:  super() seems to return object of type Event, with Event as prototype
    //TODO: check safari bug
    //Object.setPrototypeOf(this, XRInputSourcesChangeEvent.prototype);
  }

  get session(): XRSession | undefined { 
    return this.#session; 
  }

  get added(): ReadonlyArray<XRInputSource> | undefined { 
    return this.#added; 
  }

  get removed(): ReadonlyArray<XRInputSource> | undefined { 
    return this.#removed; 
  }
}

export interface XRInputSourcesChangeEventHandler {
  (evt: XRInputSourcesChangeEvent): any;
}
