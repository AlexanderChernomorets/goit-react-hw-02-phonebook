import PropTypes from 'prop-types';
import {
  ContactsSection,
  ContList,
  ContTitle,
  ContItem,
  ContName,
  ContNum,
  DelButton,
} from './ContactList.styled';

function ContactList({ onRemove, findContact }) {
  return (
    <ContactsSection>
      <ContTitle>Contacts</ContTitle>
      <ContList>
        {findContact().map(({ name, number, id }) => (
          <ContItem key={id}>
            <ContName>{name}: </ContName>
            <ContNum>{number}</ContNum>
            <DelButton
              onClick={() => {
                onRemove(id);
              }}
            >
              Delete
            </DelButton>
          </ContItem>
        ))}
        {/* {list.map(item => {
            return(
                <li key={item.id}>
                    <span>{item.name}: </span>
                    <span>{item.number}</span>
                    <button onClick={() => {
                      onRemove(item.id)
                    }}>Delete</button>
                </li>
            )
        })} */}
      </ContList>
    </ContactsSection>
  );
}

export default ContactList;

ContactList.propTypes = {
  onRemove: PropTypes.func.isRequired,
  findContact: PropTypes.func.isRequired,
};
