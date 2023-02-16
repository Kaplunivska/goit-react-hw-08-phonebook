import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Input } from 'components/Filter/Filter.styled';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  Label,
  AddIcon,
  MobileIcon,
  UserIcon,
  Button,
} from './ContactForm.styled';

export default function ContactForm({ onCloseModal }) {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  function checkName(array, name) {
    return array.some(item => name.toLowerCase() === item.name.toLowerCase());
  }
  function onSubmitHandler(event) {
    event.preventDefault();
    const name = event.currentTarget.elements.name.value;
    const number = event.currentTarget.elements.number.value;
    if (checkName(contacts, name)) {
      toast.info(`${name} is already in your contacts`);
      onCloseModal();
      event.currentTarget.reset();
      return;
    }
    dispatch(addContact({ name, number }))
      .unwrap()
      .then(data =>
        toast.success(`${data.name} was successfully added to your contacts`)
      );
    onCloseModal();
    event.currentTarget.reset();
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <Label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+((['
            -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only
            letters, apostrophe, dash and spaces. For example Adrian, Jacob
            Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Name"
          />
          <UserIcon />
        </Label>

        <Label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Number"
          ></Input>
          <MobileIcon />
        </Label>
        <Button type="submit">
          <AddIcon />
        </Button>
      </form>
    </>
  );
}
