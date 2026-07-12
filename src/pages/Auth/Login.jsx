// Role 3 - Auth screens
import { useState } from "react";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate=useNavigate();

    const login=async(e)=>{

        e.preventDefault();

        try{

            await signInWithEmailAndPassword(auth,email,password);

            navigate("/");

        }

        catch(err){

            alert(err.message);

        }

    }

    return(

        <div>

            <h1>Login</h1>

            <form onSubmit={login}>

                <input
                type="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                />

                <br/><br/>

                <input
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                />

                <br/><br/>

                <button>Login</button>

            </form>

        </div>

    )

}