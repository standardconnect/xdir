# xdir

### A simple directory of networks using the XRP Ledger Protocol

[![NPM](https://nodei.co/npm/xdir.png)](https://www.npmjs.com/package/xdir)

## [➡️ [WIP] Reference Documentation](https://standardconnect.github.io/xdir/)

# Overview

As a developer building on the XRP Ledger, it can be difficult to discover and then manage all of the websockets and rpc endpoints for public nodes using the _XRP Ledger Protocol_.

This project was created to...

- Provide a single registry for all networks and endpoints using the _XRP Ledger Protocol_
- Abstract away ugly strings to improve developer experience (DX)
- Drive network traffic to new projects or node maintainers
- Open-source a registry built and maintained by the community

## Getting Started

In an existing project (with package.json), install xdir with:

```
npm install xdir
```

or with yarn:

```
yarn add xdir
```

## Usage with xrpljs

```ts
import xrpl from 'xrpl';
import xdir from 'xdir';

const main = async () => {
  const client = new xrpl.Client(xdir.wss.mainnet);
  await client.connect();
  console.log('connected');

  client.disconnect();
  console.log('disconnected');
};
main();
```

# Contributing Guidelines

### I NEED YOUR HELP!

If you are a new project using the XRP Ledger Protocol, or have recently deployed a public node, create pull request to add your node to the directory.

By contributing, you are helping to make this package more valuable for new developers building on the XRP Ledger.

## Steps to add your node to the Directory

1. Create a fork
2. Determine if your node is apart of an existing network list [here](https://github.com/standardconnect/xdir/tree/main/networks). If YES,got to **Step 3**. If NO, got to **Step 4**.
3. Add you node's endpoints (wss, and/or rpc) to the end of their respective lists. Then move to **Step 5**.
4. Use the tempalate [here]() to get started. Modified all fields for your network. Make sure to including your networks name and a short description. Change name of file to your networks name and move to /networks folder.
5. Create a pull request.

See **Contributing Guidelines** for more information.

# License

Copyright (c) 2023 Standard Connect

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
