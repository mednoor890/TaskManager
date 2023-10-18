/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../App.css'
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }

    a {
      text-decoration: none;
      color: #333;
    }
  }
`;
const Layout = ({ children }) => {
  return (
    <Container>
      <h1>Task App</h1>
      <Navigation>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/">Task Manager</Link>
          </li>
        </ul>
      </Navigation>
      {children}
    </Container>
  );
};

export default Layout;
