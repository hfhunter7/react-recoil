import { useRecoilValue } from 'recoil';
import { todoListState } from '../../stores';
import TodoListStats from '../TodoListStats';
import TodoListFilters from '../TodoListFilters';
import TodoItemCreator from '../TodoItemCreator';
import TodoItem from '../TodoItem';
import React from 'react';

function TodoList() {
  const todoList = useRecoilValue(todoListState);

  return (
    <>
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>

      {todoList.map(( todoItem ) => (
        <TodoItem key={todoItem.id} item={todoItem}/>
      ))}
    </>
  );
}

export default TodoList