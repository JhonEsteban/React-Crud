import { Provider } from 'react-redux';

import store from './redux/store';

import AppRouter from './router/AppRouter';

const TodoApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default TodoApp;
