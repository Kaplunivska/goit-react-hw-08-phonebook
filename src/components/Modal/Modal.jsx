import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { Overlay, ModalContent } from './Modal.styled';
import ContactForm from 'components/ContactForm/ContactForm';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });
  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      onClose();
    }
  }
  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onClose();
    }
  }

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalContent>
        <ContactForm onCloseModal={onClose} />
      </ModalContent>
    </Overlay>,
    modalRoot
  );
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
