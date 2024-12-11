import React, { useState } from "react";

const [email, setEmail] = useState();
const [password, setPassword] = useState();

function Login() {
  return (
    <div className=" h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-96 shadow-xl p-3 bg-slate-700">
        <form action="">
          <div className="space-y-3 p-4">
            <h2>Email</h2>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-4/5 p-1 rounded-md"
              onChange={(e) => setEmail(e.target.value)}
            />

            <h2>Password</h2>
            <input
              type="Password"
              placeholder="Enter Password"
              className="w-4/5 p-1 rounded-md"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-primary justify-end">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
