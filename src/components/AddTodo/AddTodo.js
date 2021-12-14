import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../store/todoSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const submit = () => {
    const items = text.split(',');

    dispatch(
      addTodos(
        items.map((item) => ({ id: nanoid(), todo: item, completed: false }))
      )
    );
  };
  return (
    <div className="add-todo">
      <p>Make your day more productive and meaningful!</p>
      <div style={{ display: 'flex' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your todo here"
        />
        <button
          onClick={submit}
          style={{
            height: '25px',
            marginTop: '27px',
            padding: '8px',
            borderRadius: '5px',
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
