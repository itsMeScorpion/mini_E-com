import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
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
  margin-right: 800px;
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

  //   const [profile, setProfile] = useState([]);
  const clientId =
    '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
  //

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
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid className="d-flex align-items-baseline">
          <Navbar.Brand href="#">SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {issignedin ? (
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Links to={`/Category`}>Category</Links>
                <Links to={`/SubCategory`}>SubCategory</Links>
                <Links to={`/Variant`}>Variant</Links>
                <Googlebutton to={`/SubVariant`}>SubVariant</Googlebutton>
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Log out"
                  onLogoutSuccess={logOut}
                />
                {/* <Nav.Link href=></Nav.Link> */}

                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
                {/* <Nav.Link href="#" disabled>
                Link
              </Nav.Link> */}
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

            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
          {/* <Google /> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
