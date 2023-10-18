import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='mt-12 mb-8 text-center'>
           <img className='mx-auto mb-2' src={logo} alt="" />
           <p>Journalism Without Fear or Favour</p>
           <p className='text-xl mt-2'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;