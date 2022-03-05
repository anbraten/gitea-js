import { expect, describe, it, beforeAll } from 'vitest';
import fetch from 'cross-fetch';

import { Api, giteaApi } from '.';

const token = process.env.TEST_GITEA_TOKEN;

let api: Api<unknown>;

describe('Api', () => {
  beforeAll(() => {
    api = giteaApi('https://gitea.com', {
      customFetch: fetch,
      token,
    });
  });

  it('test', async () => {
    const res = await api.user.userGetCurrent();

    expect(res.ok).toBe(true);
    expect(res.data.login).toBe('anbraten');
  });
});
