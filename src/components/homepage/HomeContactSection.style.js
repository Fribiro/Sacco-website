import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const media = {
  mobile: "@media (min-width: 320px) and (max-width: 480px)",
  tablet: "@media (min-width: 481px) and (max-width: 768px)",
  laptop: "@media (min-width: 769px) and (max-width: 1024px)",
  desktops: "@media (min-width: 1025px) and (max-width: 1200px)",
  extralarge: "@media (min-width: 1201px)",
};

const ContactWrapper = styled.div`
  display: flex;
  margin: 2rem 5rem;
  height: 35rem;

  & .mapouter {
    width: 60%;
    height: 100%;
    padding: 2rem 0;
  }

  & .mapouter iframe {
    width: 100%;
    height: 100%;
  }

  & .gmap_canvas {
    width: 100%;
    height: 100%;
  }

  & .contactBox {
    width: 40%;
    background-color: rgb(118, 191, 48);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & .contactIcons {
    width: 90%;
    height: 30%;
    margin: 0.5rem 0;
    //background-color: #fff;
    display: flex;
    justify-content: space-between;
  }

  & .iconContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    flex-direction: column;
  }

  & #address {
    width: 40%;
    text-align: center;
  }

  & #address .icon {
    width: 30%;
  }

  & #address .details {
    padding-top: 1.6rem;
  }

  & .icon {
    width: 40%;
    height: 30%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    //box-shadow: rgba(100, 100, 111, 0.3) 0px 8px 0px 0px;
  }

  & .details {
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & .details p {
    font-size: 0.9rem;
  }

  & .details p {
    font-size: 0.9rem;
  }

  & .comment {
    width: 90%;
    height: 70%;
    margin: 0.5rem 0;
    //background-color: #fff;
  }

  & #contactform {
    display: block;
  }

  & #contactform input,
  textarea {
    width: 100%;
    margin: 0.3rem 0;
    border-radius: 0.4rem;
    border: none;
    padding: 0.4rem 1rem;
    outline: none;
  }

  ${media.mobile} {
    flex-direction: column;
    margin: 2rem 1rem;
    height: 70rem;

    & .contactBox {
      width: 100%;
      height: 70%;
    }

    & .mapouter {
      width: 100%;
      padding: 0;
      height: 30%;
    }

    & .iconContainer {
      width: 60%;
      height: 33%;
      margin-top: 0.8rem;
    }

    & #address {
      width: 60%;
    }

    & .contactIcons {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 80%;
    }

    & .icon {
      width: 26%;
      height: 50%;
    }

    #address .icon {
      width: 26%;
      height: 35%;
    }

    & .details {
      height: 50%;
      margin-top: 0.9rem;
    }
  }

  ${media.tablet} {
    flex-direction: column;
    margin: 2rem 1rem;
    height: 55rem;

    & .contactBox {
      width: 100%;
    }

    & .mapouter {
      width: 100%;
      padding: 0;
    }

    & .iconContainer {
      width: 60%;
      height: 100%;
    }

    & .icon {
      width: 23%;
    }

    & #address .icon {
      width: 34%;
    }

    & #address .details {
      padding-top: 2.8rem;
    }
  }
`;

const HomeContactSection = () => {
  return (
    <div>
      <ContactWrapper>
        <div className="contactBox">
          <div className="contactIcons">
            <div className="iconContainer" id="address">
              <div className="icon">
                <FontAwesomeIcon icon="map-marker-alt" />
              </div>
              <div className="details">
                <h6>Address</h6>
                <p>Blessed House, 2nd floor, Rm 212, Thika RD</p>
              </div>
            </div>
            <div className="iconContainer">
              <div className="icon">
                <FontAwesomeIcon icon="phone-alt" />
              </div>
              <div className="details">
                <h6>Phone</h6>
                <p>+25411188976</p>
              </div>
            </div>
            <div className="iconContainer">
              <div className="icon">
                <FontAwesomeIcon icon="paper-plane" />
              </div>
              <div className="details">
                <h6>Email</h6>
                <p>info@unique.co.ke</p>
              </div>
            </div>
          </div>
          <div className="comment">
            <form id="contactform">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="contactform"
                cols="40"
                rows="5"
                placeholder="Message"
              ></textarea>
              <input type="submit" value="Send Message" />
            </form>
          </div>
        </div>
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Blessed%20House,%20Thika%20RD.&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://fmovies2.org"></a>
            <br />
            <style>.mapouter </style>
            <a href="https://www.embedgooglemap.net"></a>
            <style>.gmap_canvas </style>
          </div>
        </div>
      </ContactWrapper>
    </div>
  );
};

export default HomeContactSection;
