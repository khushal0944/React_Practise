import { useContext, useState } from "react";
import { UserContext } from "../Context/UserContext";


export default function Login(){
    const [username , setUsername] = useState('');
    const [password , setPassword] = useState('');
    function changeName(e){
        setUsername(e.target.value);
    }
    function changePass(e){
        setPassword(e.target.value);
    }

    let {setUser} = useContext(UserContext)

    function handleSubmit(e){
        e.preventDefault();
        setUser({username , password})
    }
    return (
        <>
            <div>
                <input type="text" name="username" placeholder="Enter UserName" onChange={changeName}
                className="rounded-md p-1 mb-5 mr-2 text-black"/>
                {" "}
                <input type="text" name="password" placeholder="Enter Password" onChange={changePass}
                className="rounded-md p-1 mb-3 text-black" />
        
                <button className="text-center bg-red-500 mx-auto" onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}