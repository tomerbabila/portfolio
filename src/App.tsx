import React from 'react';
import './App.css';
import './i18n/i18n';
import { Route, Routes } from 'react-router-dom';
import { Layout, MainPage, NoMatch, TerminalPage } from './pages';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='terminal' element={<TerminalPage />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
