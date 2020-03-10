import React, { Component } from "react";
import { FaGithubAlt, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Container, Form, SubmitButton } from "./styles";

export default class Home extends Component {
  state = {
    username: ""
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    const { username } = this.state;

    return (
      <Container>
        <FaGithubAlt size={36} color="#fff" />
        <h1>Github Profiler</h1>

        <Form>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={this.handleInputChange}
          />

          <Link to={`/users/${username}`}>
            <SubmitButton>
              <FaSearch color="#fff" size={14} />
            </SubmitButton>
          </Link>
        </Form>
      </Container>
    );
  }
}
