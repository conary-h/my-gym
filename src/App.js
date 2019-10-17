import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './containers/Dashboard';
import CategoryDetail from './components/CategoryDetail';

import './styles/main.scss';
import 'flexboxgrid/css/flexboxgrid.min.css';
import CategoryList from './components/CategoryList';
import ExerciseDetail from './components/ExerciseDetail';

function App() {
  return (
    <div className="container">
      <Dashboard>
        <Router>
          <CategoryList path="/" />
          <CategoryDetail path="categories/:categoryId" />
          <ExerciseDetail path="categories/:categoryId/exercises/:exerciseId" />
        </Router>
      </Dashboard>
    </div>
  );
}

export default App;
