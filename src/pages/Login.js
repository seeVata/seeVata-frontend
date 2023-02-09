import React from "react";
import styled from "styled-components";

import "../components/shared/theme.css";

// import { ReactComponent as KakaoLogin } from "../assets/img/kakaoLogin.svg";
import kakaoLogin from "../assets/img/kakaoLogin.png";
import naverLogin from "../assets/img/naverLogin.png";
import googleLogin from "../assets/img/googleLogin.png";
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
      <LoginBtn>
        <NaverLoginImg src={naverLogin} alt="naverLogin" />
        <KakaoLoginImg src={kakaoLogin} alt="kakaoLogin" />
        <GoogleLoginImg src={googleLogin} alt="googleLogin" />
      </LoginBtn>
    </div>
  );
};

let Title = styled.div`
  margin-top: 21vh;
  width: 134px;
  height: 36px;

  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 100%;
  text-align: center;

  color: #272a33;
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

let LoginBtn = styled.div`
  width: 208px;
  margin-top: 2.8vh;
  &:hover {
    cursor: pointer;
  }
`;

let NaverLoginImg = styled.img``;
let KakaoLoginImg = styled.img``;
let GoogleLoginImg = styled.img``;

export default Login;
