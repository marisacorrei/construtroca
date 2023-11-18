// importar o react
import React from 'react';
// importar o estilo
import './Footer.css'; 

import { FaInstagram} from 'react-icons/fa';
import { FaFacebook} from 'react-icons/fa';
import { FaTwitter} from 'react-icons/fa';
import { FaTiktok} from 'react-icons/fa';
function Footer() {
    
    return(
    <div class="sectionAreaFooter">
        <h1>Redes Sociais</h1>
        
      <FaInstagram />
      < FaFacebook />
      <FaTwitter />
      <FaTiktok />
       
        

    </div>
    
           
    );
}
 
export default Footer;
    




