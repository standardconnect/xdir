import fs from 'fs';
import path from 'path';
import { documentHeader } from '../src/constants';
import { Network } from '../src/types';

const SOURCE_FOLDER = 'networks';

// some helpful functions
const isJson = (file: any) => /.json$/.test(file);
const notDrive = (file: any) => /^((?!._).)*$/.test(file);

// getting all networks
const networks = fs.readdirSync(SOURCE_FOLDER).filter(isJson).filter(notDrive);

// read all networks
const networksObj = networks
  .map((json: any) => {
    return require(path.join(__dirname, '..', SOURCE_FOLDER, json));
  })
  .sort((a: Network, b: Network) => {
    if (a.id === null) return 1;
    if (b.id === null) return -1;
    return a.id - b.id;
  });

// combine all networks into a single object
const combineNetworks = () => networksObj.flat();

const generateDocument = () => Object.assign(documentHeader, { networks: combineNetworks() });

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'networks.json'),
  JSON.stringify(generateDocument())
);
