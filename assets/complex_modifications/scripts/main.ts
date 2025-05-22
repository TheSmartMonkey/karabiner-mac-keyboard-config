// @ts-ignore
import { writeFile } from 'fs';
import { jsonFileNames, jsonFiles } from './helpers/model';

function main() {
  for (const name of Object.values(jsonFileNames)) {
    const json = JSON.stringify(jsonFiles[name], null, 2);
    writeFile(`${name}.json`, json, (err) => {
      if (err) console.error(err);
      console.log(name);
    });
  }
}

main();
