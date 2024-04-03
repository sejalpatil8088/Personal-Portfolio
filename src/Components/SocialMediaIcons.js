import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ContactForm from './ContactForm';


const SocialMediaIcons = () => {
    return (
    <div className='bg-black m-36 p-20 rounded-2xl  flex justify-between '>
      <div className="flex flex-col items-center mr-8 cursor-pointer">
        <h1 className='font-bold text-8xl text-white'>SP.</h1>
        <div className="mt-8">
          <FontAwesomeIcon icon={faGoogle} className="text-white text-4xl mx-2" />
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-4xl mx-2" />
          <FontAwesomeIcon icon={faFacebook} className="text-white text-4xl mx-2" />
          <FontAwesomeIcon icon={faInstagram} className="text-white text-4xl mx-2" />
        </div>
      </div>
      <ContactForm/>
    </div>
  );
}

export default SocialMediaIcons;