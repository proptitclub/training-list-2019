import React, { Fragment } from "react";
import styled from "styled-components";
import "./header.css";

const Header = () => {
  return (
    <div style={{ textAlign: "center" }} className="title">
      <span className="letter" data-letter="ProPTIT">
        ProPTIT
      </span>
    </div>
  );
};

const Center = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  display: inline;
  width: 100%;
  font-size: 100px;
  font-weight: 1000;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
  -webkit-text-rendering: optimizeLegibility;
  -moz-text-rendering: optimizeLegibility;
  text-rendering: optimizeLegibility;

  :hover {
    color: #4580c2 !important;
  }
`;

export default Header;
