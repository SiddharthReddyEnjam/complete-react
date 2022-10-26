import { Link, Outlet } from 'react-router-dom';

import Login from './routes/Login';

function App() {
  return (
    <div className='App'>
      <h1>Welcome</h1>
      <Link to='/login'>Login</Link>
      <Outlet />
    </div>
  );
}

export default App;
