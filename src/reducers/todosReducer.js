import ACTION_TYPES from "../actions/actionTypes";

const reducer = (state, action) => {
  switch(action.type) {
    case ACTION_TYPES.TODO_ADD_ITEM :
      return {
        ...state,
        todos: [
          ...state.todos, 
          {
            id : Date.now(), 
            title : action.payload, 
            isDone : false,
          }
        ],
      };
    case ACTION_TYPES.TODO_CHANGE_ITEM_IS_DONE :
      return {
        ...state,
        todos : state.todos.map(todo => (
          { ...todo, 
            isDone : todo.id === action.payload ? 
              !todo.isDone : todo.isDone,   
          })
        ),  
      };
    case ACTION_TYPES.TODO_DELETE_ITEM :  
      return {
        ...state,
        todos : state.todos.filter(item => item.id !== action.payload),  
      };
    default :
      return state;
  }
  
};

export default reducer;