import ACTION_TYPES from './actionTypes';

// export const changeItemTitle = payload => 
//   ({type : ACTION_TYPES.TODO_CHANGE_ITEM_TITLE, payload : payload});
  
export const addItem = payload => 
  ({ type: ACTION_TYPES.TODO_ADD_ITEM, payload : payload });

export const deleteItem = payload => 
  ({ type: ACTION_TYPES.TODO_DELETE_ITEM, payload : payload });

export const changeItemIsDone = payload => 
  ({ type: ACTION_TYPES.TODO_CHANGE_ITEM_IS_DONE, payload : payload });
