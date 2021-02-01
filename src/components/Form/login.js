import React from 'react';
import { Col, Form, FormGroup, Label, Input } from 'reactstrap';

const LogInForm = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </Col>
      </FormGroup>
    </Form>
  );
}

export default LogInForm;