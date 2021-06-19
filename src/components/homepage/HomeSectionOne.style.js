import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  background-color: #4fa098;

  & .leftSection {

  }
  & .rightSection {
  }
`;

const HomeSectionOne = () => {
    return (
      <>
        <Main>
          <div className="leftSection"></div>
          <div className="rightSection"></div>
        </Main>
      </>
    );
}

export default HomeSectionOne