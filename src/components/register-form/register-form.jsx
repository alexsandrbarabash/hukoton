import React, {useState} from "react";
import FormInput from "../custom-from-input/custom-form-input.jsx";
import saly from "../../assets/images/Saly-13.svg";
import "./register-form-style.scss";
import {Link} from "react-router-dom";

const RegisterForm = ({onSubmitHandler}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="row d-flex register-form justify-content-center">
      <div className="col-5 mt-5 img-wrapper">
        <img src={saly} alt=""/>
      </div>
      <aside className="col-5 mt-5 card-wrapper">
        <div className="card">
          <article className="card-body">

            <form onSubmit={e => {
              e.preventDefault();
              if (confirmPassword === password) {
                onSubmitHandler(e, {
                  firstName,
                  lastName,
                  institutionName,
                  username,
                  email,
                  password
                });
              }
              else {
                console.log('Password mismatch');
              }
            }}>
              <div className="row">
                <div className="col-6">
                  <FormInput
                    placeholder="First Name"
                    type="text"
                    value={firstName}
                    onChange={setFirstName}
                  />
                </div>
                <div className="col-6">
                  <FormInput
                    placeholder="Last Name"
                    type="text"
                    value={lastName}
                    onChange={setLastName}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <FormInput
                    placeholder="Educational Institution"
                    type="text"
                    value={institutionName}
                    onChange={setInstitutionName}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <FormInput
                    placeholder="Mail Address"
                    type="email"
                    value={email}
                    onChange={setEmail}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-12">
                  <FormInput
                    placeholder="Username"
                    type="username"
                    value={username}
                    onChange={setUsername}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <FormInput
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                  />
                </div>
                <div className="col-6">
                  <FormInput
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                  />
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
