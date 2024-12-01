// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRRigidTransform from './XRRigidTransform';
import XRPose from './XRPose';

/**
 * @see https://immersive-web.github.io/webxr-hand-input/#xrjointpose-interface
 */
export default class XRJointPose extends XRPose {
	#radius: number;

	constructor(transform: XRRigidTransform, radius: number) {
		super(transform);
		this.#radius = radius;
	}

	get radius() {
		return this.#radius;
	}
}
