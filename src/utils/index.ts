import { Network } from '../types/networks';
import registry from '../networks.json';
import rpc from './rpc';
import wss from './wss';
import id from './id';

// read all networks json
export const networks = registry.networks;

// available networks
const availableNetworks: string[] | undefined = networks.map((network: Network) => network.name);

const getKey = <K, T>(map: Map<K, T>, value: T): K | undefined => {
  for (let [k, v] of map.entries()) {
    if (v === value) return k;
  }
  return;
};

/**
 * A function to find the default websocket string given a network Id.
 * https://github.com/standardconnect/xdir/blob/main/src/utils/id.ts#L51
 *
 * @example
 * ```ts
 * import xdir from 'xdir';
 *
 * const wss = xdir.getClientStringbyId(0) // 'wss://xrplcluster.com'
 * ```
 */
const getClientStringbyId = (n: number): string | undefined | null => {
  let name = getKey(id.map, n);
  if (!name) return name;
  return wss.map.get(name);
};

/**
 * A function to find the default RPC endpoint string given a websocket string.
 * https://github.com/standardconnect/xdir/blob/main/src/utils/id.ts#L51
 *
 * @example
 * ```ts
 * import xdir from 'xdir';
 *
 * const wss = xdir.getClientStringbyName('mainnet') // 'wss://xrplcluster.com'
 * ```
 */
const getClientStringbyName = (name: string): string | undefined | null => wss.map.get(name);

/**
 * A function to find the network name given a websocket string.
 * https://github.com/standardconnect/xdir/blob/main/src/utils/id.ts#L51
 *
 * @example
 * ```ts
 * import xdir from 'xdir';
 *
 * const name = xdir.getNetworkNameByWss('wss://xrplcluster.com') // 'mainnet'
 * ```
 */
const getNetworkNameByWss = (s: string): string | undefined | null => wss.swap.get(s);

/**
 * A function to find the network name given an RPC endpoint.
 * https://github.com/standardconnect/xdir/blob/main/src/utils/id.ts#L51
 *
 * @example
 * ```ts
 * import xdir from 'xdir';
 *
 * const name = xdir.getNetworkNameByRPC('https://xrplcluster.com') // 'mainnet'
 * ```
 */
const getNetworkNameByRPC = (r: string): string | undefined | null => rpc.swap.get(r);

/**
 * A function to find the default websocket string given an RPC endpoint.
 * https://github.com/standardconnect/xdir/blob/main/src/utils/id.ts#L51
 *
 * @example
 * ```ts
 * import xdir from 'xdir';
 *
 * const valid = xdir.getRpcWithWssString('https://xrplcluster.com') // 'wss://xrplcluster.com'
 * ```
 */
const getRpcWithWssString = (s: string): string | undefined | null => {
  let name = wss.swap.get(s);
  if (!name) return name;
  return rpc.map.get(name);
};

/**
 * A function to determine if a given string is valid.
 * https://github.com/standardconnect/xdir/blob/main/src/utils/id.ts#L58
 *
 * @example
 * ```ts
 * import xdir from 'xdir';
 *
 * const valid = xdir.isValid('wss://xrplcluster.com') // true
 * ```
 */
const isValid = (s: string): boolean => {
  if (rpc.swap.get(s) || wss.swap.get(s)) return true;
  return false;
};

export {
  availableNetworks,
  getClientStringbyId,
  getClientStringbyName,
  getNetworkNameByWss,
  getRpcWithWssString,
  getNetworkNameByRPC,
  isValid,
};
