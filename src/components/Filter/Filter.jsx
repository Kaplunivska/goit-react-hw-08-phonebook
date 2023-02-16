import { useDispatch } from 'react-redux';
import { Input, SearchIcon, StyledLabel } from './Filter.styled';
import { setValueFilter } from 'redux/contacts/filtersSlice';
export default function Filter() {
  const dispatch = useDispatch();

  function onChangeHandler(event) {
    dispatch(setValueFilter(event.target.value));
  }
  return (
    <div>
      <StyledLabel>
        <SearchIcon />
        <Input
          placeholder="Search by name"
          type="text"
          onChange={onChangeHandler}
        />
      </StyledLabel>
    </div>
  );
}
