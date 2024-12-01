// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import XRRigidTransform from './XRRigidTransform';
import XRReferenceSpace, { XRReferenceSpaceType } from './XRReferenceSpace'

/**
 * @see https://immersive-web.github.io/webxr/#xrboundedreferencespace-interface
 */
export default class XRBoundedReferenceSpace extends XRReferenceSpace {
  #boundsGeometry: ReadonlyArray<DOMPointReadOnly>;

  constructor(type: XRReferenceSpaceType, transform: XRRigidTransform, boundsGeometry: ReadonlyArray<DOMPointReadOnly>) {
    super(type, transform);
    this.#boundsGeometry = boundsGeometry;
  }

  get boundsGeometry(): ReadonlyArray<DOMPointReadOnly> {
    return this.#boundsGeometry;
  }
}
