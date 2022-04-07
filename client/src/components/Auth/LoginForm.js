import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../_actions/user_action";
import classes from "./AuthForm.module.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email,
      password,
    };

    dispatch(loginUser(body)).then((res) => {
      if (res.payload.loginSuccess) {
        alert("로그인 성공")
        navigate("/");
      } else {
        alert("로그인 실패");
      }
    });
  };

  return (
    <section className={classes.auth}>
      <h1>로그인</h1>
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
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={onPasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button type="submit">로그인</button>
        </div>
      </form>
    </section>
  );
};

export default LoginForm;
