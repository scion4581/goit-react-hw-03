import { FaPhone, FaUserLarge } from "react-icons/fa6";
import css from './Contact.module.css';

export default function Contact({ onDeleteContact, contact: { id, name, number } }) {
    return (
        <li className={css.contactListItem}>
            <div>
                <div className={css.contactNameSection}>
                    <FaPhone />
                    <p className={css.contactName}>{name}</p>
                </div>
                <div className={css.contactNumberSection}>
                    <FaUserLarge />
                    <p className={css.contactNumber}>{number}</p>
                </div>
            </div>
            <button onClick={() => onDeleteContact(id)} type="button">Delete</button>
        </li>
    );
}