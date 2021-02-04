import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Col, Form, Label, Input } from 'reactstrap';
import { StyledButton } from '../Assets/Styles/styled';

const LogIn = () => {
  
  const [modal, setModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false)

  const toggle = () => setModal(!modal);
  const close = () => setSignupModal(toggle(!signupModal))
  const signupToggle = () => setSignupModal(modal)
  // post
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: ""
  });

  const change = e => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    });
  };

  const submitSignUp = e => {
    e.preventDefault();
    const newUser = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      confirm: userData.confirm
    };
    // console.log("submit", newUser);
    setSignupModal(toggle(!signupModal && !modal))
  };

  const submitSignIn = e => {
    e.preventDefault();
    const userLogIn = {
      email: userData.email,
      password: userData.password
    };
    // console.log("userlogin", userLogIn);
    setModal(!modal && !signupModal)
  };

  return (
    <div>
      <StyledButton onClick={toggle}>Sign In</StyledButton>
        <Modal isOpen={modal ? !signupModal : modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Log In</ModalHeader>
          <ModalBody>
              <Form>
                <FormGroup row>
                  <Label for="exampleEmail" sm={2}>Email</Label>
                  <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={change}/>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="examplePassword" sm={2}>Password</Label>
                  <Col sm={10}>
                    <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={change}/>
                  </Col>
                </FormGroup>
              </Form>
              <FormGroup check row>
                  <Col md={{ size: 12, offset: 5}}>
                      <p>
                          Don't have an account? 
                          <StyledButton onClick={signupToggle} >Sign Up</StyledButton>
                      </p>
                  </Col>
              </FormGroup>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={submitSignIn}>Log In</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
        <Modal isOpen={signupModal} toggle={close}>
          <ModalHeader toggle={close}>Sign Up</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>Username</Label>
              <Col sm={8}>
                <Input type="email" name="name" id="exampleUsername" placeholder="Username" onChange={change}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleEmail" sm={3}>Email</Label>
              <Col sm={8}>
                <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange={change}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="examplePassword" sm={3}>Password</Label>
              <Col sm={8}>
                <Input type="password" name="password" id="examplePassword" placeholder="Password" onChange={change}/>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="exampleFile" sm={3}>Confirmation</Label>
              <Col sm={8}>
              <Input type="password" name="confirm" id="exampleConfirm" placeholder="Confirmation Password" onChange={change}/>
              </Col>
            </FormGroup>
          </Form>
              <FormGroup check row>
                  <Col md={{ size: 12, offset: 5}}>
                      <p>
                          Already have an account? 
                          <StyledButton onClick={close} isOpen={modal}>Log In</StyledButton>
                      </p>
                  </Col>
              </FormGroup>
          </ModalBody>
          <ModalFooter>
              <Button color="primary"  onClick={submitSignUp}>Sign up</Button>{' '}
              <Button color="secondary" onClick={close}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default LogIn;
