import { useState } from "react";

const styles = {
  display: "flex",
  justifyContent: "start",
  marginCollapse: "collapse",
  alignItems: "center",
  padding: "10px",
  maxWidth: "800px",
  margin: "auto",
};

export default function Todo({ title, completed, id, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [done, setDone] = useState(completed);
  const [todo, setTodo] = useState(title);

  const handleDelete = (id) => {
    dispatch({ type: "delete_todo", payload: id });
  };

  const handleSaveEdit = (id) => {
    dispatch({
      type: "edit_todo",
      id: id,
      title: todo,
    });
    setIsEditing(false);
  };

  return (
    <div style={styles}>
      <input
        type="checkbox"
        name="completed"
        checked={done}
        onChange={() => setDone(!done)}
        disabled={isEditing}
      />
      {isEditing ? (
        <input
          type="text"
          name="task"
          id={`task${id}`}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      ) : (
        <p>{title}</p>
      )}
      <div style={{justifySelf: 'end'}}>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <button onClick={() => handleSaveEdit(id)}>Save</button>
        )}
        {!isEditing && (
          <button disabled={!done} onClick={() => handleDelete(id)}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
