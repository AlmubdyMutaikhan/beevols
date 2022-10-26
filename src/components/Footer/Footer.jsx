import './Footer.css';
import React, {useContext} from 'react';
import { LangContext } from "../../context/lang";
import getWord from "../../context/hf";


const Footer = () => {
    const { lang, setLang } = useContext(LangContext);
    const words = [{
        r:"Барлық құқық қорғалған 2022"
    },
{r:"Все права защищены 2022"},
{r:"All rights reserved 2022"}

]
    return(
        <footer>
			<p>(c) {getWord(words, lang, 'r')}</p>			
		</footer>
    )
}

export default Footer;