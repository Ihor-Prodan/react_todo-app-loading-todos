/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useContext } from 'react';
import classNames from 'classnames';
import { TodoHeader } from './TodoHeader';
import { TodoList } from './TodoList';
import { TodoFooter } from './TodoFooter';
import { TodosContext } from './Todos-Context';

export const TodoApp: React.FC = () => {
  const { newTodo, errorMessage } = useContext(TodosContext);

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <TodoHeader />

        <TodoList />

        {newTodo.length > 0 && <TodoFooter />}
      </div>

      <div
        data-cy="ErrorNotification"
        className={classNames(
          'notification is-danger is-light has-text-weight-normal',
          { hidden: !errorMessage },
        )}
        // eslint-disable-next-line react/jsx-no-comment-textnodes
      >
        <button data-cy="HideErrorButton" type="button" className="delete" />
        {errorMessage && <div>{errorMessage}</div>}
      </div>
    </div>
  );
};