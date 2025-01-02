import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useEffect } from "react";
import { useState } from "react";
import { collection,getDocs, onSnapshot } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { db } from './firebase'; // Adjust the path as needed
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import ContactCard
 from "./components/ContactCard";
 import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";
import useDisclose from "./hooks/useDisclose";
import { ToastContainer, toast } from 'react-toastify';
import NotFoundContact from "./components/NotFoundContact"


const App = () => {

  const [contacts,setContacts] = useState([])
  const {isOpen, onClose, onOpen} = useDisclose();

  useEffect(() => {
    const getContacts = async () => {
      try{
        const contactsRef = collection(db, "contacts")
        // const contactSnapshot = await getDocs(contactsRef) //snapshot me data rehta hai  
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id:doc.id,
              ...doc.data()
            }
          })
          setContacts(contactLists);        })
      }
      catch (error) {
        console.error("Error fetching contacts:", error); // Log the error if it occurs
      }
    }
    getContacts();
  }, [])

  const filterContacts = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts")
    // const contactSnapshot = await getDocs(contactsRef) //snapshot me data rehta hai  
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id:doc.id,
          ...doc.data()
        }
      })
      
      
      
      const filteredContacts = contactLists.filter((contact) => contact.name.toLowerCase().includes(value.toLowerCase()))
      setContacts(filteredContacts); 

    })
   

  }

  return (
    <>
    <div className="max-w-[370px] mx-auto">
    <Navbar></Navbar>
   <div className="flex gap-2">
   <div className="relative flex flex-grow">
      <FiSearch className= " text-white ml-1 absolute text-3xl items-center"/>
      <input
      onChange={filterContacts}
      type="text" className="flex-grow bg-transparent
      h-10 border border-white rounded-md text-white pl-9"/>
    </div>
    <AiFillPlusCircle
    onClick={onOpen} className="text-5xl text-white cursor-pointer"/>
   </div>
   <div className="mt-4 gap-3 flex flex-col">
    {contacts.length<=0 ? <NotFoundContact/>:
    contacts.map((contact) =>(
      <ContactCard key={contact.id}  contact={contact}/>
    ) )
}
   </div>
  </div>
  <AddAndUpdateContact
  onClose = {onClose}
  isOpen = {isOpen}
  />
  <ToastContainer position="bottom-center"/>
  </>
  )
  
}

export default App;