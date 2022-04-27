import './styles.scss';

import Heading from './Heading';
import Options from './Options';

const TodoCard = ({ todo }) => {
  const { id, name, description, completed } = todo;

  return (
    <article className={`todo-card ${completed ? 'completed' : ''}`}>
      <Heading name={name} todo={todo} />

      <p className='todo-card__description'>{description}</p>

      <Options id={id} />
    </article>
  );
};

export default TodoCard;
