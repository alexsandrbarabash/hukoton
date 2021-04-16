import React from "react";
import FormInput from "../custom-from-input/custom-form-input.jsx";

const RegisterForm = () => {
  return (
    <div className="row d-flex justify-content-center">
      <aside className="col-5 mt-5">
        <div className="card">
          <article className="card-body">
            <h4 className="card-title text-center mb-4 mt-1">Sing Up</h4>
            <hr />
            <p className="text-success text-center">Thanks for joining</p>
            <form>
              <FormInput placeholder="Email" type="email" />

              <FormInput placeholder="Phone" type="phone" />

              <FormInput placeholder="Login" type="email" />

              <FormInput placeholder="School name" />

              <FormInput placeholder="Password" type="password" />

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
              </div>
            </form>
          </article>
        </div>
      </aside>
    </div>
  );
};

export default RegisterForm;
