import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './containers/Dashboard';
import CategoryDetail from './components/CategoryDetail';

import './styles/main.scss';
import CategoryList from './components/CategoryList';

function App() {
  return (
    <div className="container">
      <Dashboard>
        <Router>
          <CategoryList path="/" />
          <CategoryDetail path="category/:categoryId" />
        </Router>
      </Dashboard>
    </div>
  );
}

export default App;
