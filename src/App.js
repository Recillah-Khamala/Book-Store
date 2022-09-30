import { Outlet } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';

const App = () => (
  <div className="bg w-11/12 lg:w-10/12 mx-auto my-10 shadow shadow-gray-400">
    <Navigation />
    <Outlet />
  </div>
);

export default App;
