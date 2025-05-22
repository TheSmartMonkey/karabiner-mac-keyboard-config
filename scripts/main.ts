// @ts-ignore
import { writeFile } from 'fs';
import path from 'path';
import { jsonFileNames, jsonFiles } from './helpers/model';

function main() {
  for (const name of Object.values(jsonFileNames)) {
    const json = JSON.stringify(jsonFiles[name], null, 2);
    const filePath = path.join(__dirname, '..', 'assets', 'complex_modifications', `${name}.json`);
    writeFile(filePath, json, (err) => {
      if (err) console.error(err);
      console.log(name);
    });
  }
}
main();
