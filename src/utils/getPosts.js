
export const getPosts = async () => {
    const res = await fetch("https://real-estate-server-nine.vercel.app/posts");
    return res.json();
}