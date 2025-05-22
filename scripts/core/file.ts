import { writeFile } from 'fs';

export function createFile(filePath: string, content: string) {
  writeFile(filePath, content, (err) => {
    if (err) console.error(err);
    console.log(filePath);
  });
}
