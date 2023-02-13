import { Network } from '../types/networks';
import { NetworkObjType } from '../types/gen';

import registry from '../networks.json';

// read all networks json
const networks = registry.networks;

// instantiate usable map of id
const map: Map<string, number | null> = new Map();
networks.forEach((network: Network) => {
  return map.set(network.name, network.id);
});

/**
 * An object of default network identifiers indexed by network name.
 * https://github.com/bibbleso/bibble/blob/main/src/utils/id.ts
 *
 * @example
 * ```ts
 * import xls from 'xls';
 *
 * const mainnet_id = xls.statuses.mainnet // "active"
 * ```
 */
export const obj: NetworkObjType = Object.create(Object.fromEntries(map));

export default { obj, map };
