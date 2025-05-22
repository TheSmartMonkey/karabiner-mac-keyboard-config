import path from 'path';
import { createFile } from './core/file';
import { jsonFileNames, jsonFiles } from './core/model';

function main() {
  for (const name of Object.values(jsonFileNames)) {
    const json = JSON.stringify(jsonFiles[name], null, 2);
    const filePath = path.join(__dirname, '..', 'assets', 'complex_modifications', `${name}.json`);
    createFile(filePath, json);
  }
}

main();
