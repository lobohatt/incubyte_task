import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';

import Home from '../views/home/index';

  const AppRouter = () => (
<Router>
    <Routes>
    <Route path="/" Component={Home} />
</Routes>
</Router>
  );

  export default AppRouter;