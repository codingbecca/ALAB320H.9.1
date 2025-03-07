export default function reducer(state, action) {
  switch (action.type) {
    case "add_todo": {
      const newTodo = {
        title: action.payload,
        completed: false,
        id: state.length + 1,
      };
      return [newTodo, ...state];
    }

    case "delete_todo":
      return state.filter((todo) => todo.id !== action.payload);

    case "edit_todo":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            title: action.title,
          };
        } else {
          return todo;
        }
      });

    default:
      throw new Error("Action not recognized");
  }
}
