# Gitea-js api client with Typescript support

[![NPM Version](https://img.shields.io/npm/v/gitea-js)](https://www.npmjs.com/package/gitea-js)
[![NPM Types](https://img.shields.io/npm/types/gitea-js)](https://anbraten.github.io/gitea-js/)
[![GitHub license](https://img.shields.io/github/license/anbraten/gitea-js)](https://github.com/anbraten/gitea-js/blob/main/LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/anbraten/gitea-js/Release)](https://github.com/anbraten/gitea-js/actions)
[![Docs](https://img.shields.io/badge/Docs-up_to_date-brightgreen)](https://anbraten.github.io/gitea-js/)

Gitea-js is an api client automatically created from the official [Open api definition](https://gitea.com/swagger.v1.json) of Gitea. The client uses the [Fetch Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (native browser support) to make requests. For node you can use [cross-fetch](https://www.npmjs.com/package/cross-fetch) to polyfill the Fetch Api.

## Version mapping

The major and minor version of this library is mapped to the version of the Gitea api. The patch version of this library is incremented for every release and uses the latest patch version of Gitea.

| Gitea-js | Gitea      |
| -------- | ---------- |
| 1.21.x   | 1.21 (dev) |
| 1.20.x   | 1.20       |
| 1.19.x   | 1.19       |
| 1.18.x   | 1.18       |
| 1.16.x   | 1.17       |
| < 1.2.0  | 1.17       |

## Examples

### Browser

```ts
import { giteaApi } from 'gitea-js';

const api = new giteaApi('https://try.gitea.com/', {
  token: 'access-token', // generate one at https://gitea.example.com/user/settings/applications
});

const repo = api.repos.repoGet('anbraten', 'gitea-js');
console.log(repo);
```

### Node.js

```js
const { giteaApi } = require('gitea-js');
const fetch = require('cross-fetch'); // You have to use a fetch compatible polyfill like cross-fetch for Node.JS

const api = new giteaApi('https://try.gitea.com/', {
  token: 'access-token', // generate one at https://gitea.example.com/user/settings/applications
  customFetch: fetch,
});

const repo = api.repos.repoGet('anbraten', 'gitea-js');
console.log(repo);
```
