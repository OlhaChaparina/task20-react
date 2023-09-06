import React, { useState } from "react";
import styled from "styled-components";
import styles from './signIn.module.css'


const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid ${(props) => props.color || "#777777"};
  transition: all ease 0.3s;
  width: 300px;
  color: #fff;
  border-radius: 5px;
  border-color: ${(props) =>
      props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  }
`;


const Input2 = styled(Input)`
  border-color: ${(props) =>
      props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  &:focus {
    border-color: ${(props) =>
      props.isInvalid ? "red" : props.isValid ? "green" : "gray"};
  }
`;

const SignIn = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [isEmailInvalid, setIsEmailInvalid] = useState(false);
   const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);

   const onChangeEmail = (event) => {
      const inputValue = event.target.value;
      setEmail(inputValue);
      validateEmail(inputValue);
   };

   const validateEmail = (email) => {
      const emailPattern = /^[a-zA-Z0-9._-]{3,}@[a-zA-Z0-9.-]{2,}\.[a-zA-Z]{2,}$/;
      setIsEmailInvalid(!emailPattern.test(email));
   };

   const onChangePassword = (event) => {
      setPassword(event.target.value);
      validatePassword(event.target.value);
   };

   const validatePassword = (password) => {
      const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      setIsPasswordInvalid(!passwordPattern.test(password));
   };




   return (
      <div className={styles.container}>
         <div className={styles.head}>
            <img className={styles.icon} src="https://cdn2.iconfinder.com/data/icons/ecommerce-1-4/65/17-512.png" alt="lock" />
            <h2>Sign In</h2>
         </div>
         <div className={styles.input}>
            <Input
               type="email"
               placeholder="Email Address *"
               value={email}
               onChange={onChangeEmail}
               isInvalid={isEmailInvalid}
               isValid={!isEmailInvalid && email !== ""}
            />
            <Input2
               type="password"
               placeholder="Password *"
               value={password}
               onChange={onChangePassword}
               isInvalid={isPasswordInvalid}
               isValid={!isPasswordInvalid && password !== ""}
            />
         </div>

         <div className={styles.rememberMe}>
            <input type="checkbox" />
            Remember me
         </div>

         <div >
            <button className={styles.button} type="submit">SIGN IN</button>
         </div>

         <div className={styles.forgotPass} >
            <p>
               Forgot password?
            </p>
            <p>
               Don't have an account? Sign Up
            </p>
         </div>
         <div className={styles.Copyright} >
            <p>
            Copyright © Your Website 2023.
            </p>

         </div>

      </div>
   );
};

export default SignIn;