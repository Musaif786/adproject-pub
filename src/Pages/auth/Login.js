import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigator = useNavigate()
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
  });

  const {email, password, error, loading } = values;

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const result = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    navigator("/")

    }catch(e){

      alert(e)
    }
  };
  return (
    <>
      <form className="shadow rounded p-3 mt-5 form" onSubmit={handleSubmit}>
        <h3 className="text-center mb-3">Sign IN Account</h3>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="text-center mb-3">
          {error ? (
            <>
              <p className="m-auto p-auto text-danger">{error}</p>
            </>
          ) : null}
        </div>

        <div className="text-center mb-3">
          <button className="btn btn-secondary btn-sm" disabled={loading}>
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
