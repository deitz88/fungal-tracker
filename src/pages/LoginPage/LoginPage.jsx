import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import {
  Grid,
  Form,
  Header,
  Button,
  Segment,
} from "semantic-ui-react";

export default function LoginPage(props) {
  const history = useHistory();
  const [error, setError] = useState("");
  const [formInput, setFormInput] = useState({
    password: "",
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

    try {
      await userService.login(formInput);
      props.handleSignUpOrLogin();
      history.push("/index");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            <span className="signupText">Login  </span>
          </Header>
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment stacked>
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
              <Button
                color="teal"
                fluid
                size="large"
                type="submit"
                className="btn"
                id="signupButton"
              >
                Login
              </Button>
            </Segment>
          </Form>
        
          {error ? <ErrorMessage error={error} /> : null}
        </Grid.Column>
      </Grid>
    </>
  );
}
