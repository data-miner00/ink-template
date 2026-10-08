import fs from 'fs';
import path from 'path';

export function readFileNames(dir: string): string[] {

    const fileNames: string[] = [];
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isFile()) {
            fileNames.push(file);
        }
    }

    return fileNames;
}