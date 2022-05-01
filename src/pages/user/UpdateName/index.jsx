import './styles.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import BackButton from '../../../components/task/BackButton';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';

const UpdateName = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  const handleGoBack = () => {
    navigate('/user/profile');
  };

  return (
    <section className='update-name'>
      <BackButton handleGoBack={handleGoBack} isProfile />

      <h1 className='update-name_-title'>Actualizar nombre</h1>

      <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <input
          type='text'
          name='newName'
          className={`form__input ${errors.name ? 'error' : ''}`}
          placeholder='Nuevo nombre'
          autoComplete='off'
          autoFocus
          {...register('name', {
            required: {
              value: true,
              message: 'El nuevo nombre es requerido',
            },
          })}
        />

        {errors.name && <ErrorFormMessage message={errors.name.message} />}

        <button className='form__btn' type='submit'>
          Cambiar mi nombre
        </button>
      </form>
    </section>
  );
};

export default UpdateName;
