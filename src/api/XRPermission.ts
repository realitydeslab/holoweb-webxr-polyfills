// SPDX-FileCopyrightText: Copyright 2024 Reality Design Lab <dev@reality.design>
// SPDX-FileContributor: Botao 'Amber' Hu <amber@reality.design>
// SPDX-License-Identifier: MIT

import { XRSessionMode } from "./XRSession";

export interface XRSessionSupportedPermissionDescriptor extends PermissionDescriptor {
  mode?: XRSessionMode;
}

export interface XRPermissionDescriptor extends PermissionDescriptor {
  mode?: XRSessionMode;
  requiredFeatures?: Array<string>;
  optionalFeatures?: Array<string>;
}

export interface XRPermissionStatus extends PermissionStatus {
  granted: ReadonlyArray<string>;
}
