import React from "react";


const Login = () => {
    return(
        <main className="container py-3">
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col align-self-center">
            <div className="col-12">
              <label for="email" className="form-label " style={{color:"blue"}} >Email</label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
             
            </div>

            <div className="col-12">
            <label for="password" className="form-label" style={{color:"blue", paddingTop:"15px"}} >Password </label>
            <input type="password" className="form-control" id="password" placeholder="password"></input>
            </div>
        </div>
        </div>
        </main>
    )
}

export default Login;