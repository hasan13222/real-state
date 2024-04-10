import { promises as fs } from 'fs';

export const getAgents = async () => {
    const res = await fs.readFile(process.cwd() + '/agents.json');
    return JSON.parse(res);
}