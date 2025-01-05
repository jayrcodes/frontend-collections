import { NavLink } from 'react-router';

function AdminPanel() {
  return (
    <>
      <div>
        <h1>Admin Panel</h1>
        <NavLink to="/login" end>
          Login
        </NavLink>
      </div>
    </>
  );
}

export default AdminPanel;
