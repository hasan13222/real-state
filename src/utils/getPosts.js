import { promises as fs } from 'fs';

export const getPosts = async () => {
    const res = await fs.readFile(process.cwd() + '/blogs.json');
    return JSON.parse(res);
}