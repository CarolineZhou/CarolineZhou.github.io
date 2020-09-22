import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import styled from 'styled-components';
import git_logo from './git_logo.png';

function App() {
  return (
    <Wrapper>
      <Router>
          <div className='navbar'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/resume">Resume</Link>
              </li>
              <li>
                <a><img src={git_logo} alt='github logo'/></a>
              </li>
            </ul>
          </div>
          <div className='container'>
            <Switch>
                <Route path="/resume">
                  <div>resume</div>
                </Route>
                <Route path="/">
                  <div>Home</div>
                </Route>
            </Switch>
          </div>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: black;
  color: white;

  .container {
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a > img {
    height: 25px;
  }

  ul {
    margin: 0px;
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
  }

  li {
    display: inline;
    padding-right: 15px;
  }

`;

export default App;
