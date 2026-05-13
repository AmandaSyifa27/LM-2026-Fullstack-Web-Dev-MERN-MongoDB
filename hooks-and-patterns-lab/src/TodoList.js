import React from "react";

const TodoList = ({ todos }) => {
 return (
  <ul style={{ listStyleType: "none", padding: 0 }}>
   {todos &&
    todos.slice(0, 10).map(
     (
      todo, // Menampilkan 10 data saja agar tidak terlalu panjang
     ) => (
      <li
       key={todo.id}
       style={{ padding: "8px", borderBottom: "1px solid #eee" }}
      >
       {todo.title}
      </li>
     ),
    )}
  </ul>
 );
};

export default TodoList;
