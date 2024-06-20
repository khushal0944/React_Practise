import { useParams } from "react-router-dom";

export default function User(){
    const {userid} = useParams();    
    return (
        <h1 className="bg-purple-500 p-6 text-center text-5xl"> User : {userid}</h1>
    )
}