import React from "react";
import styled from "styled-components";

import "../components/shared/theme.css";

import { ReactComponent as KakaoLogin } from "../assets/img/kakaoLogin.svg";
// import { ReactComponent as Logo } from "../assets/img/logo.png";
import logo from "../assets/img/logo.png";

const Login = () => {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code&scope=profile_nickname,account_email`;
  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div className="Home">
      <Title>seeVata</Title>
      <LogoImg src={logo} alt="임시로고" />
      <Content>seeVata</Content>
      <KakaoLoginBtn>
        <KakaoLogin onClick={handleLogin} />
      </KakaoLoginBtn>
    </div>
  );
};

let Title = styled.div`
  margin-top: 21vh;
`;

let LogoImg = styled.img``;

let Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 300;
  line-height: 150%;
  letter-spacing: -0.07em;
  color: #f7f7f7;
  margin-top: 15vh;
`;

let KakaoLoginBtn = styled.div`
  margin-top: 2.8vh;
  &:hover {
    cursor: pointer;
  }
`;

export default Login;
