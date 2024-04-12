import { promises as fs } from 'fs';

export const getHomes = async () => {
    const res = await fs.readFile('./homes.json');
    const result = JSON.parse(res);
    return result;
}