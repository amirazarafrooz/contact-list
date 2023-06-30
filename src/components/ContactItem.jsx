import '../CSS/ContactItem.css'

const ContactItem = ({id,name,nameSearchTerm,phoneSearchTerm,emailSearchTerm,phone,email,deleteHandler}) => {
    const indexName = name.indexOf(nameSearchTerm);
    const indexPhone = phone.indexOf(phoneSearchTerm);
    const indexEmail = email.indexOf(emailSearchTerm);

    
 
    return (
        <li key={id}>

    { indexName === -1 ? name :
                <span className='spanName'>

                    <span>{name.slice(0,indexName)}</span>
                    <span style={{backgroundColor:"yellow"}}>
                        {name.slice(indexName,indexName + nameSearchTerm.length)}
                    </span>
                    <span>{name.slice(indexName + nameSearchTerm.length)}</span>
                </span>
}
{ indexPhone === -1 ? phone :
                <span className='spanPhone'>
                    <span>{phone.slice(0,indexPhone)}</span>
                    <span style={{backgroundColor:"yellow"}}>
                        {phone.slice(indexPhone,indexPhone + phoneSearchTerm.length)}
                    </span>
                    <span>{phone.slice(indexPhone + phoneSearchTerm.length)}</span>
                </span>

}
{ indexEmail === -1 ? email :
                <span className='spanEmail'>
                    <span>{email.slice(0,indexEmail)}</span>
                    <span style={{backgroundColor:"yellow"}}>
                        {email.slice(indexEmail,indexEmail + emailSearchTerm.length)}
                    </span>
                    <span>{email.slice(indexEmail + emailSearchTerm.length)}</span>
                </span>

}

<button className='delete-btn' onClick={() => deleteHandler(id)}>
    <img src='./src/assets/images/bin-icon.svg'/>
</button>

        </li>
    );
    
}



export default ContactItem