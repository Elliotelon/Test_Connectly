/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
  //option null : 아무나 출입가능, true :로그인한 유저만 출입가능, false: 로그인한 유저 출입불가

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function AuthenticationCheck() {
    useLayoutEffect(() => {
      dispatch(auth()).then((res) => {
        //로그인 하지 않은 상태
        if (!res.payload.isAuth) {
          if (option) {
            navigate("/login");
          }
        } else {
          //로그인 한 상태
          if (adminRoute && !res.payload.isAdmin) {
            navigate("/");
          } else {
            if (option === false) {
              navigate("/");
            }
          }
        }
      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
}
