import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import TaskManagerPage from './pages/TaskManagerPage';
import styled from 'styled-components';


const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <Router>
      <Container>
        

        <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignUpPage />}/>
          <Route path="/" element={<TaskManagerPage />}/>
            
      
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
