import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import { issigned, issigned1 } from '../action';
import { Link } from 'react-router-dom';

const Links = styled(Link)`
  text-decoration: none;
  color: black;
  margin-left: 15px;
`;

const Googlebutton = styled(Links)`
  margin-right: 700px;
`;
const Header = () => {
  const { issignedin } = useSelector((state) => state.oauth);
  const dispatch = useDispatch();

  useEffect(() => {
    const initClient = () => {
      gapi.client
        .init({
          clientId: clientId,
          scope: '',
        })
        .then(() => {
          setTimeout(() => {
            if (!gapi.auth2.getAuthInstance().issignedin.get()) {
              dispatch(issigned1());
            }
          }, 1000);
          gapi.auth2.getAuthInstance();
        });
    };
    gapi.load('client:auth2', initClient);
  }, []);
  const clientId =
    '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';

  const onSuccess = (res) => {
    dispatch(issigned(res.googleId, res.profileObj.email));
  };

  const onFailure = (err) => {
    console.log('failed', err);
  };

  const logOut = () => {
    dispatch(issigned1());
  };

  return (
    <div className="bg-secondary" style={{ width: '100%' }}>
      <Navbar bg="secondary">
        <Container fluid className="d-flex align-items-baseline">
          <Navbar.Brand href="#">SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {issignedin ? (
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '70px' }}
                navbarScroll
              >
                <Links to={`/Category`}>Category</Links>
                <Links to={`/SubCategory`}>SubCategory</Links>
                <Links to={`/Variant`}>Variant</Links>
                <Links to={`/SubVariant`}>SubVariant</Links>
                <Googlebutton to={`Product`}>Product</Googlebutton>
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Log out"
                  onLogoutSuccess={logOut}
                />
              </Nav>
            ) : (
              <GoogleLogin
                clientId={clientId}
                buttonText="Sign in with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
