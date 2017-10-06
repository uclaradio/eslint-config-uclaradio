# eslint-config-uclaradio

[![Greenkeeper badge](https://badges.greenkeeper.io/uclaradio/eslint-config-uclaradio.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/uclaradio/eslint-config-uclaradio/status.svg)](https://david-dm.org/uclaradio/eslint-config-uclaradio)
[![peerDependencies Status](https://david-dm.org/uclaradio/eslint-config-uclaradio/peer-status.svg)](https://david-dm.org/uclaradio/eslint-config-uclaradio?type=peer)

How UCLA Radio writes Javascript. We use this on [our website](https://github.com/uclaradio/uclaradio)! There isn't very much exciting here, this is just a combination of Airbnb's eslint configuration combined with Prettier's styling rules (with some modifications made). You can add it to your project by installing [`eslint`](https://www.npmjs.com/package/eslint) and [`prettier`](https://www.npmjs.com/package/prettier) first, then [`eslint-config-uclaradio`](https://www.npmjs.com/package/eslint-config-uclaradio), then adding it to your `.eslintrc` file.

## Installation

What you put in your terminal:
```shell
# We prefer yarn, but npm also works
yarn add --dev eslint prettier
yarn add --dev eslint-config-uclaradio
```

Then configure your `.eslintrc.json` (or alternative) as follows:
```json
{
  "extends": "uclaradio"
}
```
