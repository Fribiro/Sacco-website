import React, { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsPDF from 'jspdf'
import membershipForm from "../../assets/files/UNIK SACCO Membership forms.doc";
import {Link} from 'react-router-dom';

const media = {
  mobile: "@media (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktop: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const SidebarAboutMain =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const SidebarAboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;
  height: 16rem;
  width: 100%;
  background-color: rgba(118, 191, 48, 0.9);
  padding-left: 0;
  margin-top: 0 !important;

  & h5 {
    font-family: "Crimson Text", serif;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.4rem;
    font-weight: bold;
  }

  & p {
    font-family: "Crimson Text", serif;
    font-size: 1.2rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 1.4rem;
  }

  & #aboutBtn {
    outline: none;
    border: 0;
    width: 80%;
    height: 3rem;
    font-family: "Crimson Text", serif;
    color: #fff;
    background-color: black;
  }

  & #aboutBtn > svg {
    margin: 0 1rem 0 0;
  }

  & #aboutBtn > a {
    color: #fff;
  }

  ${media.tablet} {
    & #aboutBtn {
      font-size: 1rem;
      margin-bottom: 1rem;
    }

    & h5 {
      font-size: 1.2rem;
    }

    & ul > li {
      font-size: 1rem;
    }
  }
`;

const MembershipForm = styled.button`
  font-family: "Crimson Text", serif;
  outline: none;
  border: 0;
  margin-bottom: 2rem;
  height: 3rem;
  padding: 0.7rem;
  background-color: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }

  & h6 {
    text-align: center;
    margin: 0;
  }
`;

const SidebarAbout = () => {
//   var fileDownload = require("js-file-download");
//   fileDownload(data, "filename.csv");

//   const [fileDownloadUrl, setFileDownloadUrl] = useState("")
//  fetch(
//    "https://localhost:3000" +
//      "../../assets/files/UNIK SACCO Membership forms.doc",
//    {
//      method: "GET",
//      headers: {
//        "Content-Type": "application/pdf",
//      },
//    }
//  )
//    .then((response) => response.blob())
//    .then((blob) => {
//      // Create blob link to download
//      const url = window.URL.createObjectURL(new Blob([blob]));
//      const link = document.createElement("a");
//      link.href = url;
//      link.setAttribute("download", `FileName.pdf`);

//      // Append to html link element page
//      document.body.appendChild(link);

//      // Start download
//      link.click();

//      // Clean up and remove the link
//      link.parentNode.removeChild(link);
//    });

    return (
      <div>
        <SidebarAboutMain>
          <MembershipForm>
            <FontAwesomeIcon icon="file-pdf" />
            <h6>MEMBERSHIP FORM</h6>
          </MembershipForm>
          <SidebarAboutWrapper>
            <h5>Need Any Clarification?</h5>
            <p>
              Any questions bothering you? Don't hesitate to ask, we are prompt
              in our response.
            </p>
            <button id="aboutBtn">
              <FontAwesomeIcon icon="envelope" />
              <Link to="contacts">GET IN TOUCH</Link>
            </button>
          </SidebarAboutWrapper>
        </SidebarAboutMain>
      </div>
    );
}

export default SidebarAbout
