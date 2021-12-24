import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodos } from '../../store/todoSlice';
import { nanoid } from '@reduxjs/toolkit';
import { InputGroup, FormControl } from 'react-bootstrap';

const AddTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [dated, setDated] = useState('');

  const submit = () => {
    const items = text.split(',');
    const dates = dated;

    // console.log(dates);

    dispatch(
      addTodos(
        items.map((item) => ({
          id: nanoid(),
          todo: item,
          deadline: dates,
          completed: false,
        }))
      )
    );
  };
  return (
    <div className="add-todo">
      <p>Make your day more productive and meaningful!</p>
      <div style={{ display: 'flex' }}>
        <InputGroup className="mb-3 align-items-center">
          <InputGroup.Text>Todo & Deadline</InputGroup.Text>
          <FormControl
            required
            aria-label="Todo"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your todo here"
          />
          <FormControl
            required
            aria-label="Deadline"
            type="date"
            value={dated}
            onChange={(e) => setDated(e.target.value)}
          />
        </InputGroup>
        {/* <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your todo here"
        />
        <input type="date" placeholder="Deadline" /> */}
        <button
          onClick={submit}
          style={{
            height: '40px',
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

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addTodos } from '../../store/todoSlice';
// import { nanoid } from '@reduxjs/toolkit';

// const AddTodo = () => {
//   const dispatch = useDispatch();
//   const [text, setText] = useState('');

//   const submit = () => {
//     const items = text.split(',');

//     dispatch(
//       addTodos(
//         items.map((item) => ({ id: nanoid(), todo: item, completed: false }))
//       )
//     );
//   };
//   return (
//     <div className="add-todo">
//       <p>Make your day more productive and meaningful!</p>
//       <div style={{ display: 'flex' }}>
//         <input
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder="Write your todo here"
//         />
//         <button
//           onClick={submit}
//           style={{
//             height: '25px',
//             marginTop: '27px',
//             padding: '8px',
//             borderRadius: '5px',
//           }}
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddTodo;
