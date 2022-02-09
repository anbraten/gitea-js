# Gitea-js api client with Typescript support

[![NPM Version](https://img.shields.io/npm/v/gitea-js)](https://www.npmjs.com/package/gitea-js)
[![NPM Types](https://img.shields.io/npm/types/gitea-js)](https://anbraten.github.io/gitea-js/)
[![GitHub license](https://img.shields.io/github/license/anbraten/gitea-js)](https://github.com/anbraten/gitea-js/blob/main/LICENSE)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/anbraten/gitea-js/Release)](https://github.com/anbraten/gitea-js/actions)
[![Docs](https://img.shields.io/badge/Docs-up_to_date-brightgreen)](https://anbraten.github.io/gitea-js/)

Gitea-js is an api client created based on the official [swagger definition](https://gitea.com/swagger.v1.json) from Gitea. Generated client uses [Fetch Api](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) (native browser support) to make requests.

## Exsamples

### Browser

```ts
import { Api } from 'gitea-js';

const api = new Api({
  baseUrl: 'https://try.gitea.com/',
});

const api = new Api();
const repo = api.repos.repoGet('anbraten', 'gitea-js');
console.log(repo);
```

### Node.js

```js
const { Api } = require('gitea-js');
const fetch = require('node-fetch'); // You have to use node-fetch dependency for Node.JS

const api = new Api({
  baseUrl: 'https://try.gitea.com/',
});

const api = new Api({ customFetch: fetch });
const repo = api.repos.repoGet('anbraten', 'gitea-js');
console.log(repo);
```
