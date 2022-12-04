import ACTION_TYPES from "../actions/actionTypes";

const reducer = (state, action) => {
  console.log(action.type);
  switch(action.type) {
    case ACTION_TYPES.TODO_CHANGE_ITEM_TITLE :
      return {
        ...state,
        currentTitle : action.payload,  
      };
    case ACTION_TYPES.TODO_ADD_ITEM :
      return {
        ...state,
        todos: [
          ...state.todos, 
          {
            id : Date.now(), 
            title : state.currentTitle, 
            isDone : false,
          }
        ],
      };
    case ACTION_TYPES.TODO_CHANGE_ITEM_IS_DONE :
      return {
        ...state,
        todos : state.todos.map(item => (
          { ...item, 
            isDone : item.id === action.payload.id ? 
              action.payload.value : item.isDone,   
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