import { useLoaderData } from "react-router-dom";

export default function Github(){
    const data = useLoaderData();

    return (
        <>
            <div className="text-4xl text-center  text-red-700">Github Followers : {data.followers}
            <img className="rounded-full mx-auto py-5 w-96" src={data.avatar_url} />
            </div>
        </>
    )
}

export const useGit = async ()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}