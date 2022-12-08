import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { connect } from 'react-redux';
import { issigned, issigned1 } from '../action/index';

const CollapsibleExample = ({ oauth, issigned, issigned1 }) => {
  const clientId =
    '853167732996-2o6mu1souf94f60r1ha9arqn1be3ak31.apps.googleusercontent.com';
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });
  const onSuccess = (res) => {
    console.log('Log in success:');
    issigned(res);
    console.log(res);
  };
  const onFailure = () => {
    console.log('Log in failed:');
  };
  const onsuccess = () => {
    console.log('Log Out success');
    issigned1();
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {oauth.issignedin ? (
            <Nav className="me-auto">
              <Nav.Link href="#Category">Category</Nav.Link>
              <Nav.Link href="#Sub-Category">Sub-Category</Nav.Link>
              <Nav.Link href="#Variant">Variant</Nav.Link>
              <Nav.Link href="#Sub-Variant">Sub-Variant</Nav.Link>
            </Nav>
          ) : null}
          <Nav>
            <Nav.Link eventKey={2} href="#memes">
              {oauth.issignedin ? (
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Logout"
                  onLogoutSuccess={onsuccess}
                />
              ) : (
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                />
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return { oauth: state.oauth };
};

export default connect(mapStateToProps, {
  issigned,
  issigned1,
})(CollapsibleExample);
