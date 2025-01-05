import { NavLink } from 'react-router';
import useUserStore from '@src/store/userStore';

function Profile() {
  const { userJSON } = useUserStore();

  return (
    <>
      <div>
        <h1>Profile</h1>

        <p>user:</p>
        <pre>{userJSON()}</pre>

        <NavLink to="/login" end>
          Login
        </NavLink>
      </div>
    </>
  );
}

export default Profile;
