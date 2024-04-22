import Contact from './Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
    return (
        <ul className={css.contactList}>
            {contacts.map((contact) => {
                return <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />
            })}
        </ul>
    );
}