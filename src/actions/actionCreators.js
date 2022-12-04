import ACTION_TYPES from './actionTypes';

export const changeItemTitle = value => 
  ({type : ACTION_TYPES.TODO_CHANGE_ITEM_TITLE, payload : value});
  
export const addItem = () => 
  ({ type: ACTION_TYPES.TODO_ADD_ITEM });

export const deleteItem = id => 
  ({ type: ACTION_TYPES.TODO_DELETE_ITEM, payload : id });

export const changeItemIsDone = id => 
  ({ type: ACTION_TYPES.TODO_CHANGE_ITEM_IS_DONE, payload : id });

