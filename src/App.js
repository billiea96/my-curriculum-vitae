/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BackToTopButton from './components/BackToTopButton';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import About from './views/About';
import Contact from './views/Contact';
import Facts from './views/Facts';
import Header from './views/Header';
import Home from './views/Home';
import PortfolioDetail from './views/PortfolioDetail';
import Portofolio from './views/Portofolio';
import Resume from './views/Resume';
import Skills from './views/Skills';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/portfoliodetail/:id" component={PortfolioDetail} />
        <Route path="/">
          <MobileNav></MobileNav>
          <Header></Header>
          <Home></Home>

          <main id="main">
            <About></About>
            <Facts></Facts>
            <Skills></Skills>
            <Resume></Resume>
            <Portofolio></Portofolio>
            <Contact></Contact>
          </main>

          <Footer></Footer>

          <BackToTopButton></BackToTopButton>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
