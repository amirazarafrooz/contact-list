import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Form from './components/Form'
import ContactList from './components/ContactList'
import Search from './components/Search'
import './CSS/App.css'

function App() {
  const [value, setValue] = useState('');
  const [phoneNum, setPhoneNum] = useState('');
  const [emailAdd, setEmailAdd] = useState('');

  const storedItems = JSON.parse(localStorage.getItem('items'))
  
  const [contacts,setContacts] = useState (storedItems || []);
  const [nameSearchTerm,setNameSearchTerm] = useState('');
  const [phoneSearchTerm,setPhoneSearchTerm] = useState('');
  const [emailSearchTerm,setEmailSearchTerm] = useState('');
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  const [phoneErrorMessage, setPhoneErrorMessage] = useState('');
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  
  const [items, setItems] = useState(storedItems || []);


  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


const deleteHandler = (contactId) => {
  console.log(contactId);


  
  
  console.log('items: '+JSON.stringify(items));

  const contactList = contacts.filter(({id}) => id != contactId)
  console.log('contactList: '+JSON.stringify(contactList));
  
  if (typeof contactList === 'object') {
    localStorage.setItem('items',JSON.stringify(contactList));
  } else {
  localStorage.setItem('items',contactList);
}
  setContacts(contactList);

  
}


const nameChangeHandler = (e) => {
  setValue(e.target.value);
  // console.log(e.target.value);

}  


const phoneChangeHandler = (e) => {
  setPhoneNum(e.target.value);
}  

const emailChangeHandler = (e) => {
  setEmailAdd(e.target.value);
}  



//validation function for contact's name phone and email 
//console.log(validation('amir','+989128483270','amir@gmail.com'));

function validation(name,phone,email){
  let namevalid = false; let phonevalid = false ;let emailvalid = false
  const nameFormat = /^[A-Z]+$/i;
  // const phoneFormat =  /^\+[1-9]\d{1,14}$/ ;
  const phoneFormat =  /^(\+98|0)?9\d{9}$/ ;
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(name.length < 15 && name.match(nameFormat)){
      namevalid = true;
      setNameErrorMessage('');
  } else {
      namevalid = false;
      setNameErrorMessage('*name is invalid');
  }

  if(phone.match(phoneFormat)){
      phonevalid = true 
      setPhoneErrorMessage('')
  } else {
      phonevalid = false   
      setPhoneErrorMessage('*number is invalid')

  }

  if(email.match(mailFormat)){
      emailvalid = true 
      setEmailErrorMessage('')
  } else {
      emailvalid = false  
      setEmailErrorMessage('*email is invalid')     
  }

  if(namevalid && phonevalid && emailvalid) {
     return true;
  } else {
  return false;
}
}



const submitFormHandler = (e) => {
  e.preventDefault();
  if(validation(value,phoneNum,emailAdd)){
    
    localStorage.setItem('items', JSON.stringify([...contacts,{id:contacts.length + 1, name:value, phone:phoneNum, email:emailAdd }]));
    
    
    setContacts([...contacts,{id:contacts.length + 1, name:value, phone:phoneNum, email:emailAdd }]);
    setValue('');
    setPhoneNum('');
    setEmailAdd('');
  }else{
    // alert("Please correct the displayed error(s)");
  }
}
// console.log(name);
// console.log(phone);
// console.log(email);
// console.log(contacts);


const nameSearchHandler = (e) => {
  setNameSearchTerm(e.target.value);
}

const phoneSearchHandler = (e) => {
  setPhoneSearchTerm(e.target.value);
}

const emailSearchHandler = (e) => {
  setEmailSearchTerm(e.target.value);
}

const resetSearchHandler=(e) => {
  e.preventDefault();
  setNameSearchTerm('');
  setPhoneSearchTerm('');
  setEmailSearchTerm('');
}

// console.log(contacts);

// console.log(inputChangeHandler)

  return (
    <div className='container'>
      <div className='header'>
        <h3>Contacts List</h3>
        <img src='./src/assets/images/contact-icon.svg'></img>
      </div>
      <div className='components'>
      <Form
      submitFormHandler = {submitFormHandler}

      value={value}
      phoneNum = {phoneNum}
      emailAdd = {emailAdd}
      nameChangeHandler={nameChangeHandler}
      phoneChangeHandler = {phoneChangeHandler}
      emailChangeHandler = {emailChangeHandler}
      nameErrorMessage = {nameErrorMessage}
      phoneErrorMessage ={phoneErrorMessage}
      emailErrorMessage={emailErrorMessage}

      />
      <Search
       nameSearchTerm={nameSearchTerm}
       phoneSearchTerm ={phoneSearchTerm}
       emailSearchTerm = {emailSearchTerm}
       nameSearchHandler={nameSearchHandler}
       phoneSearchHandler = {phoneSearchHandler}
       emailSearchHandler = {emailSearchHandler}
       resetSearchHandler={resetSearchHandler}
       />
      <ContactList
       contacts={contacts}
      nameSearchTerm={nameSearchTerm}
      phoneSearchTerm ={phoneSearchTerm}
      emailSearchTerm = {emailSearchTerm}
      deleteHandler = {deleteHandler}
      />
      </div>
      
    </div>
  )
}

export default App
