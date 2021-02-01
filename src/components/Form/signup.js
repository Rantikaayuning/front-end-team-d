import React from 'react';
import { Col, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const SignUpForm = (props) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={6}>
          <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={6}>
          <Input type="password" name="password" id="examplePassword" placeholder="Password" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={6}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            Upload your photo here
          </FormText>
        </Col>
      </FormGroup>
    </Form>
  );
}

export default SignUpForm;