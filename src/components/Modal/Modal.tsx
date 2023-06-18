import ModalError from '@/components/Modal/ModalError/ModalError';
import ModalSuccess from '@/components/Modal/ModalSuccess/ModalSuccess';
import ModalLoading from '@/components/Modal/ModalLoading/ModalLoading';

interface IModal {
  isModal: boolean;
  navigateToProfile: () => void;
  closeModal: () => void;
  error: boolean;
  isLoading: boolean;
}

const Modal = ({ isModal, navigateToProfile, closeModal, error, isLoading }: IModal) => {
  if (isLoading) return <ModalLoading width='460px' isOpen={isModal} onClose={closeModal} />;
  let modalContent;
  switch (error) {
    case true:
      modalContent = <ModalError isOpen={isModal} onClose={closeModal} width='460px' />;
      break;
    case false:
      modalContent = (
        <ModalSuccess navigateToProfile={navigateToProfile} isOpen={isModal} onClose={closeModal} width='460px' />
      );
      break;
    default:
      break;
  }

  return modalContent;
};

export default Modal;
