import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import useUserStore from '../store/userStore';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const { setUser, userJSON } = useUserStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);

    setUser({
      email,
      created_at: new Date().toISOString()
    });

    navigate('/profile');
  };

  return (
    <>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>

        <p>user:</p>
        <pre>{userJSON()}</pre>

        <NavLink to="/profile" end>
          Profile
        </NavLink>
      </div>
    </>
  );
}

export default Login;
