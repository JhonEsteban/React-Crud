import './styles.scss';

import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { resetCurrentTaskAction } from '../../../redux/task/actions';

const BackButton = ({ isProfile }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentTask } = useSelector((state) => state.task);

  const handleGoBack = () => {
    currentTask && dispatch(resetCurrentTaskAction());
    isProfile ? navigate('/user/profile') : navigate('/tasks');
  };

  return (
    <button onClick={handleGoBack} className='back-btn' type='button'>
      <span className='fas fa-arrow-left icon'></span>
      <span>Regresar</span>
    </button>
  );
};

BackButton.defaultProps = {
  isProfile: false,
};

BackButton.propTypes = {
  isProfile: PropTypes.bool,
};

export default BackButton;
