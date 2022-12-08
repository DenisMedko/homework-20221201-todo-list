import ACTION_TYPES from './actionTypes';
  
export const addItem = title => 
  ({ type: ACTION_TYPES.TODO_ADD_ITEM, payload : title });

export const deleteItem = id => 
  ({ type: ACTION_TYPES.TODO_DELETE_ITEM, payload : id });

export const changeItemIsDone = id => 
  ({ type: ACTION_TYPES.TODO_CHANGE_ITEM_IS_DONE, payload : id});
