import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LinkedInLoginButton } from "react-social-login-buttons";
import { InstagramLoginButton } from "react-social-login-buttons";
import "./footer.css";
const FooterPage = () => {
  return (
    <footer class = "footer-pin">

    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h1 className="title">Vision</h1>
            <p>
              <h4>Your digital marketing growth partner 🚀</h4>
            </p>
          </MDBCol>
          <MDBCol md="6">
            
            <ul>
              <li className="list-unstyled">
                <FacebookLoginButton onClick={() => alert("Hello")} />
              </li>
              <li className="list-unstyled">
                <GoogleLoginButton onClick={() => alert("Hello")} />
              </li>
              <li className="list-unstyled">
               <LinkedInLoginButton onClick={() => alert("Hello")} />
              </li>
              <li className="list-unstyled">
                <InstagramLoginButton onClick={() => alert("Hello")} />
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://botspotai.com/"> BotSpotAI  </a></MDBContainer>
      </div>
    </MDBFooter>
        </footer>

  );
}

export default FooterPage;


<div class="fixed-bottom">...</div>