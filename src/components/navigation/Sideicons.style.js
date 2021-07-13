import React from 'react'
import styled from "styled-components";

const Iconswrapper = styled.nav`
  position: fixed;
  width: 1.9rem;
  z-index: 2;
  top: 40%;
  right: 0;
`;
const Iconlist = styled.ul`
    width: 100%;
    list-style: none;
    padding: 0;
`
const Iconlistitem = styled.li`
  width: 100%;
  height: 2rem;
  color: #76bf30;
  position: relative;
  vertical-align: middle;

  & img {
    width: 100%;
    height: 100%;
    padding: 0 0.3rem 0.2rem 0;
    position: absolute;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Sideicons = () => {
    return (
      <>
        <Iconswrapper>
          <Iconlist>
            <Iconlistitem>
              <img src="/icons/greenlinkedin.png" />
            </Iconlistitem>
            <Iconlistitem>
              <img src="/icons/greentwitter.png" />
            </Iconlistitem>
            <Iconlistitem>
              <img src="/icons/greenfacebook.png" />
            </Iconlistitem>
            <Iconlistitem>
              <img src="/icons/greenwhatsupp.png" />
            </Iconlistitem>
          </Iconlist>
        </Iconswrapper>
      </>
    );
}

export default Sideicons