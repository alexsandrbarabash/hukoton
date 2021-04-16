import React, { useState } from "react";
import FormInput from "../custom-from-input/custom-form-input.jsx";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="row  d-flex justify-content-center">
      <aside className="col-5 mt-5">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
            <hr />
            <p className="text-success text-center">Welcome</p>
            <form>
              <FormInput
                placeholder="Login"
                value={login}
                onChange={setLogin}
              />

              <FormInput
                placeholder="Password"
                type="password"
                value={password}
                onChange={setPassword}
              />

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
              </div>

              <p className="text-center">
                <Link to="register" className="btn">
                  Register school?
                </Link>
              </p>
            </form>
          </article>
        </div>
      </aside>
    </div>
  );
};

export default LoginForm;
