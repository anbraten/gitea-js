import { generateApi } from 'swagger-typescript-api';
import path from 'path';
import { exec as _exec } from 'child_process';
import fs from 'fs';

async function exec(cmd: string) {
  return await new Promise<string>((resolve) => {
    _exec(cmd, (err: any, stdout: any, stderr: any) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(stdout);
      resolve(stdout);
    });
  });
}

function getVersions(_version: string) {
  if (!_version) {
    throw new Error('version must be set');
  }

  if (_version === 'latest') {
    const newestFile = fs.readdirSync(path.resolve(__dirname, '..', 'src', 'schemas')).sort().pop();
    const giteaVersion = newestFile?.replace('v', '').replace('.json', '');

    return {
      version: `${giteaVersion}.0`,
      giteaVersion,
    };
  }

  const version = _version.replace(/^v/, '');
  const [major, minor] = version.split('.');
  const giteaVersion = `${major}.${minor}`;

  return { version, giteaVersion };
}

async function run(_version: string) {
  const { version, giteaVersion } = getVersions(_version);

  console.log(`Generating gitea-js version "${version}" for Gitea "${giteaVersion}" ...`);

  await generateApi({
    name: 'api.ts',
    output: path.resolve(__dirname, '..', 'src'),
    input: path.resolve(__dirname, '..', 'src', 'schemas', `v${giteaVersion}.json`),
  });

  console.log(`Generating docs for ...`);

  await exec(`typedoc src/index.ts`);

  console.log(`Setting package.json version to "${version}" ...`);

  await exec(`sed -i 's/0.0.0/${version}/g' package.json`);

  console.log(`Done.`);
}

run(process.env.VERSION);
