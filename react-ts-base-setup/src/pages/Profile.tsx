import { NavLink } from 'react-router';

function Profile() {
  return (
    <>
      <div>
        <h1>Profile</h1>
        <NavLink to="/login" end>
          Login
        </NavLink>
      </div>
    </>
  );
}

export default Profile;
