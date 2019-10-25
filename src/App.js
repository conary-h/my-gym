import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './containers/Dashboard';
import CategoryDetail from './components/CategoryDetail';
import WorkoutList from './components/WorkoutList';
import ExerciseDetail from './components/ExerciseDetail';

import './styles/main.scss';
import 'normalize.css/normalize.css';

function App() {
  return (
    <div className="container">
      <Dashboard>
        <Router>
          <WorkoutList path="/" />
          <CategoryDetail path="categories/:categoryId" />
          <ExerciseDetail path="categories/:categoryId/exercises/:exerciseId" />
        </Router>
      </Dashboard>
    </div>
  );
}

export default App;
