import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/Theme'
import HomePage from './Home/HomePage';
import Header from './ui/Header';
import LandingPage from './LandingPage';
import Footer from './ui/Footer';
import AboutPage from './AboutPage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/business" component={() => <div>Business</div>} />
          <Route exact path="/pricing" component={() => <div>Price</div>} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/signin" component={() => <div>Sign in</div>} />
          <Route exact path="/signup" component={() => <div>Sign up</div>} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
