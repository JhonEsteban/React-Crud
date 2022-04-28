import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/tasks');
  };

  return (
    <button onClick={handleGoBack} className='return-btn' type='button'>
      <span>Regresar</span>
      <i className='fas fa-arrow-left'></i>
    </button>
  );
};
export default BackButton;
