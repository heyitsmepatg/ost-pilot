import {BrowserRouter,  Switch, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import React from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer';
import FlexLayout from './components/FlexLayout/FlexLayout';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <FlexLayout>
        <header>
          <HeaderBar />
        </header>
        <main className='container'>
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </main>
        <Footer />
      </FlexLayout>
    </BrowserRouter>

  );
}

export default App;
