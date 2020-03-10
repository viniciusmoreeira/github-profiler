import React, { Component } from "react";
import {
  FaLocationArrow,
  FaCalendarAlt,
  FaStar,
  FaCodeBranch
} from "react-icons/fa";
import langColors from "../../utils/langColors";
import api from "../../services/api";

import {
  Loading,
  Section,
  UserInfo,
  Stats,
  StatsItem,
  RepoList,
  Footer
} from "./styles";

export default class User extends Component {
  state = {
    username: "",
    loading: true
  };

  async componentDidMount() {
    const { match } = this.props;

    const userName = match.params.username;

    const [username, repos] = await Promise.all([
      api.get(`/users/${userName}`),
      api.get(`/users/${userName}/repos`, {
        params: {
          per_page: 100
        }
      })
    ]);

    this.setState({
      userData: username.data,
      repos: repos.data,
      loading: false
    });
  }
  render() {
    const { userData, repos, loading } = this.state;

    if (loading) {
      return <Loading>Loading</Loading>;
    }

    return (
      <Section>
        <UserInfo>
          <img src={userData.avatar_url} alt={userData.login} />

          <h1>{userData.name}</h1>

          <a target="_blank" rel="noopener noreferrer" href={userData.html_url}>
            @{userData.login}
          </a>

          <p>{userData.bio}</p>

          <ul>
            <li>
              <FaLocationArrow />
              {userData.location}
            </li>

            <li>
              <FaCalendarAlt />
              Joined in{" "}
              {new Date(userData.created_at).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric"
              })}
              .
            </li>
          </ul>

          <Stats>
            <StatsItem>
              <strong>{userData.public_repos}</strong>
              <span>Repositories</span>
            </StatsItem>
            <StatsItem>
              <strong>{userData.followers}</strong>
              <span>Followers</span>
            </StatsItem>
            <StatsItem>
              <strong>{userData.following}</strong>
              <span>Following</span>
            </StatsItem>
          </Stats>
        </UserInfo>

        <RepoList>
          {repos.map(repo => (
            <div>
              <ul>
                <li key={String(repo.id)}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={repo.html_url}
                  >
                    <div>
                      <h3>{repo.name}</h3>
                    </div>
                    <div>
                      <p>{repo.description}</p>
                    </div>
                    <div>
                      <span
                        className="langColor"
                        style={{ backgroundColor: langColors[repo.language] }}
                      >
                        {repo.language}
                      </span>
                      <span>
                        <FaStar />
                        {repo.stargazers_count.toLocaleString()}
                      </span>
                      <span>
                        <FaCodeBranch />
                        {repo.forks.toLocaleString()}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          ))}
        </RepoList>

        <Footer>
          <div>
            <span>Built with</span>
            <a
              href="https://pt-br.reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React.js
            </a>
            and
            <a
              href="https://www.styled-components.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Styled Components
            </a>
          </div>
        </Footer>
      </Section>
    );
  }
}
