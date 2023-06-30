import ContactItem from "./ContactItem"
import '../CSS/ContactList.css'

const ContactList = ({contacts,nameSearchTerm,phoneSearchTerm,emailSearchTerm,deleteHandler}) => {

    if (!contacts.length) {
        return <div>no contact</div>
    }
    return (
        <ul>
            {contacts
            .filter(({name}) => name.includes(nameSearchTerm))
            .filter(({phone}) => phone.includes(phoneSearchTerm))
            .filter(({email}) => email.includes(emailSearchTerm))
            .map(({id,name,phone,email}) => <ContactItem id={id} name={name} phone={phone} email={email}
             nameSearchTerm={nameSearchTerm}
             phoneSearchTerm ={phoneSearchTerm}
             emailSearchTerm = {emailSearchTerm}
             deleteHandler = {deleteHandler}
            //  onDelete={() => handleDeleteItem(id)}
            />)
            }



        </ul>
    );
}



export default ContactList