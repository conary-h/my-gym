import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './containers/Dashboard';
import WorkoutDetail from './containers/WorkoutDetail';
import Workout from './containers/Workout';
import ExerciseDetail from './components/ExerciseDetail';
import WorkoutCreate from './containers/WorkoutCreate';

import './styles/main.scss';
import 'normalize.css/normalize.css';

function App() {
  return (
    <div className="container">
      <Dashboard>
        <Router>
          <Workout path="/" />
          <WorkoutDetail path="workouts/:workoutId" />
          <WorkoutCreate path="workout/create" />
          <ExerciseDetail path="categories/:categoryId/exercises/:exerciseId" />
        </Router>
      </Dashboard>
    </div>
  );
}

export default App;
