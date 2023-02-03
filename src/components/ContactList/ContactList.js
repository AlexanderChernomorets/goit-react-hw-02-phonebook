function ContactList({ onRemove, findContact }) {
  return (
    <div>
      <p>Contacts</p>
      <ul>
        {findContact().map(({ name, number, id }) => (
          <li key={id}>
            <span>{name}: </span>
            <span>{number}</span>
            <button
              onClick={() => {
                onRemove(id);
              }}
            >
              Delete
            </button>
          </li>
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
      </ul>
    </div>
  );
}

export default ContactList;
