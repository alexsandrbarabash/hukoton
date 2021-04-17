import React from "react";
import FormInput from "../custom-from-input/custom-form-input.jsx";
import saly from "../../assets/images/Saly-1.png";
import style from "./register-form-style.scss";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="row d-flex register-form justify-content-center">
      <div className="col-5 mt-5 img-wrapper">
        <img src={saly} alt="" style={{marginTop:40}} />
      </div>
      <aside className="col-5 mt-5 card-wrapper">
        <div className="card">
          <article className="card-body">

            <form>
              <div className="row">
                <div className="col-6">
                  <FormInput placeholder="First Name" type="text" />
                </div>
                <div className="col-6">
                  <FormInput placeholder="First Name" type="text" />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <FormInput
                    placeholder="Educational Institution"
                    type="email"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <FormInput placeholder="Mail Address" type="email" />
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <FormInput placeholder="Password" type="password" />
                </div>
                <div className="col-6">
                  <FormInput placeholder="Confirm Password" type="password" />
                </div>
              </div>

              <div className="row">
                <div className="col-4">
                  <div className="form-group">
                    <Link to="login">
                      <button
                        type="button"
                        className="btn btn-light btn-block light"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-8">
                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </article>
        </div>
      </aside>
    </div>
  );
};

export default RegisterForm;
