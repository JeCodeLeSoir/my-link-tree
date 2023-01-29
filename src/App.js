import './App.css';
import { useRoutes, useParams } from 'react-router-dom';
import Home from './pages/Home';
import YourLink from './pages/YourLink';

const YourLinkParams = () => {
  let { user } = useParams();
  return (
    <YourLink user={user} />);
}

const App = () => {
  const routes = useRoutes([
    {
      path: '/', element: <Home />
    },
    {
      path: '/:user', element: <YourLinkParams />
    },
    {
      path: '>/#/:user', element: <YourLinkParams />
    },
    {
      path: '*', element: <YourLinkParams />
    },
  ]);
  return routes;
};

export default App;
