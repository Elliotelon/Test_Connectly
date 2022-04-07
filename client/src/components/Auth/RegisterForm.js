import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../_actions/user_action";
import classes from "./AuthForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      return alert("비밀번호가 같지 않습니다.");
    }

    let body = {
      name,
      email,
      password,
      confirmPassword,
    };

    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        alert("회원가입 성공");
        navigate("/login");
      } else {
        alert("회원가입 실패");
      }
    });
  };

  return (
    <section className={classes.auth}>
      <h1>회원가입</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={onEmailHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">이름</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={onNameHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={onPasswordHandler}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="confirmPassword">비밀번호확인</label>
          <input
            type="password"
            id="confirmPassword"
            required
            value={confirmPassword}
            onChange={onConfirmPasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
