import React, { useState, useEffect } from 'react';
import './App.css';
import HabitList from './components/HabitList';

function App() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const storedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    setHabits(storedHabits);
  }, []);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const toggleHabit = (index) => {
    const newHabits = [...habits];
    newHabits[index].completed = !newHabits[index].completed;
    setHabits(newHabits);
  };

  return (
    <div className='App'>
      <h1>Habit Tracker</h1>
      <HabitList habits={habits} onAddHabit={addHabit} onToggleHabit={toggleHabit} />
    </div>
  );
}

export default App;