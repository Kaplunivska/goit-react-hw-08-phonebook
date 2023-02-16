import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Item from 'components/Item/Item';
import { sort } from './../../helper';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { List } from './ContactList.styled';
export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {sort(filteredContacts).map(({ id, name, number }) => (
        <Item key={id} name={name} number={number} id={id} />
      ))}
    </List>
  );
}
