import { NavLink } from 'react-router';

function Home() {
  return (
    <>
      <div>
        <h1>Home</h1>
        <NavLink to="/login" end>
          Login
        </NavLink>
      </div>
    </>
  );
}

export default Home;
