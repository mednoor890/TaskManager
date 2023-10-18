import  { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
  width: 100%;
`;

const Button = styled.button`
  padding: 5px 10px;
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // Add  sign-up logic here
    console.log('Sign up clicked:', email, password);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default Register;
