import styles from "../Style.module.css"

export const ContactList = ({ contacts, onClick }) => {
    return (
        <ul>
            {contacts.map(contact => (
                <li key={contact.id} className={styles.ContactLi}>{contact.name}: {contact.number} <button onClick={() => onClick(contact.id)}>Delete</button></li>
            ))}
        </ul>
    )
}