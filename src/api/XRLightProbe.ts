// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import { XRSession } from "webxr";

/**
 * @see https://immersive-web.github.io/lighting-estimation/#xrlightprobe-interface
 */

// interface XRSession {
//   preferredReflectionFormat: XRPreferredReflectionFormat
//   requestLightProbe: (options: { reflectionFormat?: XRPreferredReflectionFormat }) => Promise<XRLightProbe>
// }
// interface XRFrame {
//   getLightEstimate?: (probe: XRLightProbe) => XRLightEstimate
// }

// interface XRWebGLBinding {
//   getReflectionCubeMap?: (probe: XRLightProbe) => WebGLTexture
// }

export enum XRReflectionFormat {
  "srgba8",
  "rgba16f",
}

interface XRLightProbe {
    readonly probeSpace: XRSpace;
    onreflectionchange: EventHandler;
}


export interface XRLightProbeInit {
  XRReflectionFormat reflectionFormat = "srgba8";
};

XRSession.prototype.requestLightProbe = async (optional XRLightProbeInit options = {}) => Promise<XRLightProbe>  {

};

XRSession.prototype.preferredReflectionFormat = get () => XRReflectionFormat {

}

export default class XRLightProbe extends EventTarget {
	constructor(probeSpace: XRSpace, options = {}){
		
	}
}