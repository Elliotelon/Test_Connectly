import axios from "axios";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.user.userData.isAuth);
  const [, , removeCookie] = useCookies(["x_auth"]);

  const onLogoutHandler = () => {
    axios.get("/api/users/logout").then((res) => {
      if (res.data.success) {
        alert("로그아웃 성공");
        removeCookie("x_auth");
        navigate("/login");
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>홈</div>
      </Link>
      <nav>
        <ul>
          {isLogin ? (
            <li>
              <button type="button" onClick={onLogoutHandler}>
                로그아웃
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/register">회원가입</Link>
              </li>
              <li>
                <Link to="/Login">로그인</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
