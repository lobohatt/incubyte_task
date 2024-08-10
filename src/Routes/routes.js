import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom';

import Home from '../views/home/index';
import Header from '../components/molecules/Header/header';
import Footer from '../components/molecules/Footer/index';

  const AppRouter = () => (
<Router>
    <Header />
    <Routes>
    <Route path="/" Component={Home} />
  </Routes>
  <Footer/>
</Router>
  );

  export default AppRouter;