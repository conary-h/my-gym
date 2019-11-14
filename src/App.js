import React from 'react';
import { Router } from '@reach/router';
import Dashboard from './containers/Dashboard';
import WorkoutDetail from './containers/WorkoutDetail';
import Workout from './containers/Workout';
import ExerciseDetail from './components/ExerciseDetail';
import WorkoutCreate from './containers/WorkoutCreate';
import Login from './components/Login';

import './styles/main.scss';
import 'normalize.css/normalize.css';

function App() {
  return (
    <>
      <Dashboard>
        <Router>
          <Workout path="/" />
          <Login path="/login" />
          <WorkoutDetail path="workouts/:workoutId" />
          <WorkoutCreate path="workout/create" />
          <ExerciseDetail path="exercises/:exerciseId" />
        </Router>
      </Dashboard>
    </>
  );
}

export default App;
