import axios from 'axios';

const workoutsUrl = `${process.env.REACT_APP_BASE_URL}/workouts`;

export const getWorkouts = async () => {
  const data = await axios.get(workoutsUrl);
  return data.data;
};
