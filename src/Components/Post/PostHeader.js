import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const PostHeader = () => {
  return (
    <Container>
      <Wrapper>
        <Logo to="/">My Contact List</Logo>
        <Button to="upload">Upload Contact</Button>
      </Wrapper>
    </Container>
  );
};

export default PostHeader;

const Container = styled.div`
  min-height: 60px;
  width: 100%;
  background-color: #4285f4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Wrapper = styled.div`
  width: 85%;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Logo = styled(NavLink)`
  text-decoration: none;
  font-family: poppins;
  font-weight: 800;
  font-size: 20px;
  color: #fff;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
const Button = styled(NavLink)`
  text-decoration: none;
  padding: 10px 25px;
  outline: none;
  border: none;
  background-color: #db4437;
  color: #fff;
  font-family: poppins;
  font-weight: 600;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(0.9);
  }
`;
