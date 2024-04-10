import { promises as fs } from 'fs';

export const getHomes = async () => {
    const res = await fs.readFile(process.cwd() + '/public/homes.json');
    const result = JSON.parse(res);
    return result;
}