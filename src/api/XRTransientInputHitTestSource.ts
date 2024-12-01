// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRSession from './XRSession';
import XRRay from './XRRay';

/**
 * @see https://immersive-web.github.io/hit-test/#hit-test-source-interface
 */
export default class XRTransientInputHitTestSource {
	#session: XRSession;


	constructor(session: XRSession, options) {
		// @TODO: Support options.entityTypes and options.offsetRay
		if (options.entityTypes && options.entityTypes.length > 0) {
			throw new Error(
				'XRHitTestSource does not support entityTypes option yet.',
			);
		}
		this.#session = session;
		this.#profile = options.profile;
		this.#offsetRay = options.offsetRay ?? new XRRay();
		this.#active = true;
	}

	cancel() {
		// @TODO: Throw InvalidStateError if active is already false
		this.#active = false;
	}

	get _profile() {
		return this.#profile;
	}

	get _session() {
		return this.#session;
	}

	get _offsetRay() {
		return this.#offsetRay;
	}

	get _active() {
		return this.#active;
	}
}
