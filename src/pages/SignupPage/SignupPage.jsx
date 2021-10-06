import React, { useState } from "react";
import { Grid, Header, Form, Segment, Button } from "semantic-ui-react";
import userService from "../../utils/userService";
import { useHistory } from "react-router-dom";
import "./SignupPage.css";

export default function SignUpPage(props) {
  const history = useHistory();
  const [formInput, setFormInput] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
  });

  function handleInput(e) {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    userService.signup(formInput);
    history.push("/index");
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }} className="signupForm">
          <Header as="h2" color="teal" textAlign="center">
            <span className="signupText">Sign Up </span>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked className="signupForm">
              <Form.Input
                name="username"
                placeholder="username"
                value={formInput.username}
                onChange={handleInput}
                required
              />
              <Form.Input
                type="email"
                name="email"
                placeholder="email"
                value={formInput.email}
                onChange={handleInput}
                required
              />
              <Form.Input
                name="password"
                type="password"
                placeholder="password"
                value={formInput.password}
                onChange={handleInput}
                required
              />
              <Form.Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                value={formInput.confirmPassword}
                onChange={handleInput}
                required
              />
              <Button type="submit" className="btn" id="signupButton">
                Signup
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
}
