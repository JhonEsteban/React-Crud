const UpdateAvatarForm = ({
  handleUpdateUser,
  handleFileChange,
  inputFileRef,
  userAvatar,
  defaultAvatar,
}) => (
  <form onSubmit={handleUpdateUser} className='update-form'>
    <label className='update-form__label'>
      <input onChange={handleFileChange} ref={inputFileRef} type='file' />
    </label>

    <img
      src={userAvatar || defaultAvatar}
      alt='avatar'
      width='70'
      className='preview-image'
    />

    <button type='submit' className='update-form__btn'>
      <span>Actualizar</span>
      <i className='fas fa-images'></i>
    </button>
  </form>
);

export default UpdateAvatarForm;
