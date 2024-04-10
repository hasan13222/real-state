import { promises as fs } from 'fs';

export const getPosts = async () => {
    const res = await fs.readFile(process.cwd() + '/public/blogs.json');
    return JSON.parse(res);
}