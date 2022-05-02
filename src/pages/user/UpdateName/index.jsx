import './styles.scss';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { updateUserName } from '../../../redux/auth/middlewares';

import BackButton from '../../../components/task/BackButton';
import ErrorFormMessage from '../../../components/app/ErrorFormMessage';

const UpdateName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();

  const onSubmit = (name) => {
    dispatch(updateUserName(name));
  };

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
          className={`form__input ${
            errors.name || errors.emptyName ? 'error' : ''
          }`}
          placeholder='Nuevo nombre'
          autoComplete='off'
          autoFocus
          {...register('name', {
            required: {
              value: true,
              message: 'El nuevo nombre es requerido',
            },
            minLength: {
              value: 3,
              message: 'El nuevo nombre debe ser minimo de 3 caracteres',
            },
            validate: (value) => {
              const validField = value.trim() !== '';
              validField && clearErrors('emptyName');

              return (
                validField ||
                setError('emptyName', {
                  message: 'El nuevo nombre no debe estar vacío',
                })
              );
            },
          })}
        />

        {errors.name && <ErrorFormMessage message={errors.name.message} />}

        {errors.emptyName && (
          <ErrorFormMessage message={errors.emptyName.message} />
        )}

        <button className='form__btn' type='submit'>
          Actualizar mi nombre
        </button>
      </form>
    </section>
  );
};

export default UpdateName;
