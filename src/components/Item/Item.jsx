import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Element, Image, Name, Number, Button, Icon } from './Item.styled';
import { deleteContact } from 'redux/contacts/operations';

export default function Item({ name, number, id }) {
  const dispatch = useDispatch();
  const deleteItemHandler = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(data =>
        toast.success(
          `${data.name} was successfully deleted from your contacts`
        )
      );
  };
  return (
    <Element>
      <Image>{name.slice(0, 1)}</Image>
      <div>
        <Name>{name}</Name>
        <Number> {number}</Number>
      </div>
      <Button type="button" onClick={deleteItemHandler} id={id}>
        <Icon />
      </Button>
    </Element>
  );
}

Item.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
