import {AiFillHome} from 'react-icons/ai';
import {BsPersonFill} from 'react-icons/bs';
import {MdHomeRepairService} from 'react-icons/md';
import {AiFillAppstore} from 'react-icons/ai';
import {AiFillMessage} from 'react-icons/ai';
import {GiDiploma} from 'react-icons/gi';  // Importing the certification icon

const data = [
    {id: 1, link: '#', icon: <AiFillHome/>},
    {id: 2, link: '#about', icon: <BsPersonFill/>},
    {id: 3, link: '#experience', icon: <MdHomeRepairService/>},
    {id: 4, link: '#portfolio', icon: <AiFillAppstore/>},
    {id: 5, link: '#achievement', icon: <GiDiploma/>},
    {id: 6, link: '#contact', icon: <AiFillMessage/>}
 
]

export default data;
