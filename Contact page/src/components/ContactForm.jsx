import { useState } from 'react';
import { MdCall } from 'react-icons/md';
import { MdMessage } from "react-icons/md";
import {addDoc,collection} from "firebase/firestore"
import { db } from '../../firebase';

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const complaintsCollectionRef=collection(db,"complaints")
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working");
    await addDoc(complaintsCollectionRef,{name,email,message});
    console.log("All good");
    setName('');
    setEmail('');
    setMessage('');
    console.log("Data Submitted to database");
    };
  return (
    <div className="container max-w-5xl ml-20 mr-20">
      <div className="flex space-x-3">
        <button className="flex justify-center items-center px-4 py-2 bg-black text-white gap-4 min-w-52 rounded text-sm m-2"><MdCall/>VIA CALL</button>
        <button className="flex justify-center items-center px-4 py-2 bg-black text-white gap-4 min-w-52 rounded text-sm m-2"><MdMessage/>VIA MESSAGE</button>
      </div>
      <div className="max-w-md m-2">
        <form className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Name" required/>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Email</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
            <textarea id="message" rows="6" value={message} onChange={(e) => setMessage(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
          </div>
          <button type="submit" onClick={handleSubmit} className="flex justify-center items-center px-4 py-2 bg-black text-white gap-4 min-w-52 rounded text-sm my-3">SEND MESSAGE</button>
        </form>
      </div>
      <div className=""><img src="" alt="" /></div>
    </div>
  );
};

export default ContactForm