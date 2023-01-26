import './App.css';
import { NavBar } from './components';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, Menu } from './container';

const App = () => (
  <div>
    <NavBar />
    <Header />
    <AboutUs />
    <Menu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
