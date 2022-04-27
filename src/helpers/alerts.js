import Swal from 'sweetalert2';

const showSuccessAlert = (title) => {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title,
    showConfirmButton: true,
  });
};

const showLoadAlert = (title = 'Iniciando sesión...') => {
  Swal.fire({
    title,
    html: 'Espere por favor',
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

const showErrorAlert = (message) => {
  Swal.fire('Error', message, 'error');
};

const showQuestionAlert = ({ title, text, confirmButtonText }) => {
  return Swal.fire({
    icon: 'warning',
    title,
    text,
    confirmButtonText,
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
  });
};

const closeSwalAlert = (isLoading) => {
  !isLoading && Swal.close();
};

export {
  showSuccessAlert,
  showLoadAlert,
  showErrorAlert,
  showQuestionAlert,
  closeSwalAlert,
};
