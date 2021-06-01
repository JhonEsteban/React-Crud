import Swal from 'sweetalert2';

export const useAlerts = () => {
  const alertSuccess = (title, timer) => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer,
    });
  };

  const alertQuestion = (title, text, confirmButtonText) => {
    return Swal.fire({
      title,
      text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText,
    });
  };

  const alertError = (text, title = 'Oops...') => {
    Swal.fire({
      icon: 'error',
      title,
      text,
    });
  };

  return {
    alertQuestion,
    alertSuccess,
    alertError,
  };
};
