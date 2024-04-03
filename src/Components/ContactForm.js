import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
    try {
      const response = await axios.post('/api/send-email', {
        name,
        email,
        message
      });
      console.log('Response:', response);
      if (response.status === 200) {
        setMessageSent(true);
        setName('');
        setEmail('');
        setMessage('');
        console.log('Email sent successfully');
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg mr-6">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
        <div className="mb-4">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            required 
          />
        </div>
        <div className="mb-4">
          <textarea 
            placeholder="Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded-md" 
            rows="4" 
            required 
          ></textarea>
        </div>
        <div className="text-center">
          <button 
            type="submit" 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
      {messageSent && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
    </div>
  );
};

export default ContactForm;