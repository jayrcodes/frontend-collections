import { NavLink } from 'react-router';

function Login() {
  return (
    <>
      <div>
        <h1>Login</h1>
        <NavLink to="/" end>
          Home
        </NavLink>
      </div>
    </>
  );
}

export default Login;
