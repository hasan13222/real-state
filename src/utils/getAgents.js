
export const getAgents = async () => {
    const res = await fetch("https://real-estate-server-nine.vercel.app/agents");
    return res.json();
}