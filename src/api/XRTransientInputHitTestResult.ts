// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRInputSource from './XRInputSource'
import XRHitTestResult from './XRHitTestResult'
import XRFrame from './XRFrame'

/**
 * @see https://immersive-web.github.io/hit-test/#xr-transient-input-hit-test-result-interface
 */
export default class XRTransientInputHitTestResult {
	#frame: XRFrame;
	#inputSource: XRInputSource;
	#results: ReadonlyArray<XRHitTestResult>;

	constructor(frame: XRFrame, results: ReadonlyArray<XRHitTestResult>, inputSource: XRInputSource) {
		this.#frame = frame;
		this.#inputSource = inputSource;
		this.#results = results;
	}

	get inputSource(): XRInputSource {
		return this.#inputSource;
	}

	get results(): ReadonlyArray<XRHitTestResult> {
		return this.#results;
	}
}
