
export const getHomes = async () => {
    const res = await fetch("https://real-estate-server-nine.vercel.app/homes");
    return res.json();
}