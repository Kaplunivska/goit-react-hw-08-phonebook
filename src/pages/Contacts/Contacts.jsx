import { useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Title } from 'components/Title/Title';
import Filter from 'components/Filter/Filter';
import { Section, Button, FlexWrap } from './Contacts.styled';
import ContactList from 'components/ContactList/ContactList';
import { selectError } from 'redux/contacts/selectors';
import Modal from 'components/Modal/Modal';
import { AddIcon } from 'components/ContactForm/ContactForm.styled';

export default function Contacts() {
  const [showModal, setShowModal] = useState(false);
  const error = useSelector(selectError);

  function toggleModal() {
    setShowModal(!showModal);
  }
  function onClickOpenModal() {
    setShowModal(true);
  }
  return (
    <Section>
      <>
        <FlexWrap>
          <Title>Contacts</Title>

          <Button onClick={onClickOpenModal}>
            <AddIcon />
          </Button>
          {showModal && <Modal onClose={toggleModal} />}
        </FlexWrap>
        <Filter />
        {error &&
          toast.error('Something went wrong! Please, try again in few minutes')}

        <ContactList />
      </>
    </Section>
  );
}