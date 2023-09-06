import React, { useState } from "react";
import styled from "styled-components";
import styles from './signUp.module.css'


const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid ${(props) => props.color || "#777777"};
  transition: all ease 0.3s;
  width: 310px;
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


const InputFirstName = styled(Input)`
float:left;
width: 140px;
`;


const InputLastName = styled(Input)`
float:right;
width: 140px;
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

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailInvalid, setIsEmailInvalid] = useState(false);
    const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);


    const onChangeFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const onChangeLastName = (event) => {
        setLastName(event.target.value);
    };



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
                <h2>Sign Up</h2>
            </div>
            <div className={styles.input}>
                <div className={styles.names}>
                    <div className={styles.firstName}>
                        <InputFirstName
                            type="text"
                            placeholder="First name *"
                            value={firstName}
                            onChange={onChangeFirstName}
                            isValid={firstName.length > 2}

                        />
                    </div>
                    <div className={styles.lastName}>
                        <InputLastName
                            type="text"
                            placeholder="Last name *"
                            value={lastName}
                            onChange={onChangeLastName}
                            isValid={lastName.length > 2}
                        />
                    </div>
                </div>


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
                I want to receive inspiration, marketing promotions and updates via email.
            </div>

            <div >
                <button className={styles.button} type="submit">SIGN UP</button>
            </div>

            <div className={styles.forgotPass} >
                <p>
                    Already have an account? Sign in
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