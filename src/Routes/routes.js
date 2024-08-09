import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';

import Home from '../views/home/index';
import Header from '../components/molecules/Header/header';

  const AppRouter = () => (
<Router>
    <Header />
    <Routes>
    <Route path="/" Component={Home} />
  </Routes>
</Router>
  );

  export default AppRouter;