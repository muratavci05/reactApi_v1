import React, { useState } from "react";
import useApi from "../../Hooks/useApi";






const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const api = useApi();

    const onLoginBtnClic = () => {
       // alert(`${email} and ${password}`);

       const postData = {
        email,password,
       }
       console.log(">>> post Data",postData);
       api
        .post("https://api.adoptez1artisan.com/auth/login", postData)
            .then((res)=>{
                console.log("api >>>", res);
            })
            .catch((err)=>{
                console.log ("api >>>", err);
            })
    }

    return(
        <main className="container py-3">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col align-self-center">
            <div className="col-12">
              <label className="form-label " style={{color:"blue"}} >Email</label>
              <input type="email" className="form-control" placeholder="you@example.com"
              value={email}
              onChange={(event) =>setEmail(event.target.value)}
              />
             
            </div>

            <div className="col-12">
            <label className="form-label" style={{color:"blue", paddingTop:"15px"}} >Password </label>
            <input type="password" className="form-control" placeholder="password"
            value={password}
            onChange={(event) =>setPassword(event.target.value)}
            ></input>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" style={{marginTop:"5px"}} type="button"
                onClick={onLoginBtnClic}
                >Button </button>
            </div>
        </div>
        </div>
        </main>
    )
}

export default Login;