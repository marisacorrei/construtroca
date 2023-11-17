// importar o react
import React from 'react';
// importar o estilo
import './Header.css'; 
import construtroca from '../images/construtroca.png'
// funcao default que constroi os elementos da pagina
function Header() {
    // retorna os elementos visuais do componente(pagina)
    return(
        <img src={construtroca}/>
    )
}
 
export default Header;