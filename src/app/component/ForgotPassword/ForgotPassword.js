import React, { useState } from "react";
import "./ForgotPassword.css";
import { useForm } from "react-hook-form";
import { firebaseApp } from "../../../Firebase_config/firebase";
import Logo from "../../../Assets/logo.png";
import Button from "@material-ui/core/Button";
import InstagramIcon from "@material-ui/icons/Instagram";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const ForgotPassword = () => {
  const { handleSubmit, register, errors } = useForm();
  const [ErrorMessages, setErrorMessages] = useState();

  const onSubmit = (data) => {
    setErrorMessages("");
    firebaseApp
      .auth()
      .sendPasswordResetEmail(data.email)
      .then((u) => {
        console.log(u);
        alert("Email has been sent to you, please check and verify");
      })
      .catch((err) => {
        setErrorMessages(err.message);
        console.log(err);
      });
  };

  return (
    <div>
      <div className="logo">
        <img src={Logo} />
        &nbsp;
        <h1>Linktree</h1>
      </div>

      <div className="text-center text">
        <h4>Enter your username to receive a password reset email.</h4>
      </div>

      <div className="loginPart text-center" style={{ height: "150px" }}>
        <div className="text-center">
          <span className="text-danger">{ErrorMessages}</span>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              type="email"
              name="email"
              inputRef={register({ required: true })}
              style={{ minWidth: "470px" }}
              id="standard-basic"
              label="Username"
            />
            <br></br>
            {errors.email && (
              <span className="text-danger">E-mail field is required</span>
            )}
            <br></br>
            <Button
              type="submit"
              style={{ minWidth: "400px" }}
              color="default"
              variant="contained"
            >
              Reset Password
            </Button>
            {/* <br></br>&nbsp; */}
          </form>
        </div>
      </div>
      <div className="creatAccountPart text-center">
        <a href="/">
          <p>Back to Login</p>
        </a>
      </div>
    </div>
  );
};

export default ForgotPassword;
