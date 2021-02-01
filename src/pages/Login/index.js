import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Col, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import LogInForm from '../../components/Form/login';
import SignUpForm from '../../components/Form/signup';
import classnames from 'classnames';
import { StyledButton } from '../../assets/styles/styled';

const LogIn = () => {
  
  const [modal, setModal] = useState(false);
  const [activeTab, setActiveTab] = useState('1');

  const toggle = () => setModal(!modal);

  const toggleTab = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <StyledButton onClick={toggle}>Sign In</StyledButton>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>MilanTV</ModalHeader>
          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggleTab('1'); }}>
                Sign In
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => { toggleTab('2'); }}
              >
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
          <ModalBody>
              <LogInForm />
              <FormGroup check row>
                  <Col md={{ size: 12, offset: 5}}>
                      <p>
                          Don't have an account? &nbsp;
                          <Link to='/sign-up' onClick={toggle}>Sign Up</Link>
                      </p>
                  </Col>
              </FormGroup>
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={toggle}>Sign In</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </TabPane>
        <TabPane tabId="2">
        <ModalBody>
              <SignUpForm />
          </ModalBody>
          <ModalFooter>
              <Button color="primary" onClick={toggle}>Sign Up</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
        </TabPane>
        </TabContent>
      </Modal>
    </div>
  );
}

export default LogIn;
