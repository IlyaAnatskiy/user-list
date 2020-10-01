import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import { ClientList, RegistrationForm, InfoAboutAuthor } from './pages';

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" component={ClientList} exact />
      <Route path="/registration" component={RegistrationForm} exact />
      <Route path="/info" component={InfoAboutAuthor} exact />
    </div>
  );
}

export default App;
