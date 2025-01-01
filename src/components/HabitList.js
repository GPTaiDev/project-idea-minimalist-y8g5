import React, { useState } from 'react';
import './HabitList.css';

function HabitList({ habits, onAddHabit, onToggleHabit }) {
  const [newHabit, setNewHabit] = useState('');

  const handleAddHabit = () => {
    onAddHabit({ title: newHabit, completed: false });
    setNewHabit('');
  };

  return (
    <div className='HabitList'>
      <input type='text' value={newHabit} onChange={(e) => setNewHabit(e.target.value)} placeholder='New habit' />
      <button onClick={handleAddHabit}>Add Habit</button>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} className={habit.completed ? 'completed' : ''} onClick={() => onToggleHabit(index)}>
            {habit.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HabitList;