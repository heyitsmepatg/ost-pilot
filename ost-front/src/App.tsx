import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import React from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Form from './Form'
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
            <Route exact path='/home' component={HomePage} />
            <Route exact path='/' component={Form} />
          </Switch>
        </main>
        <Footer className="" />
      </FlexLayout>
    </BrowserRouter>
  );
}

export default App;
