import PropTypes from 'prop-types';
import { TbCoinFilled } from "react-icons/tb";
const Header = ({freeCredit}) => {

  return (
        <div className="navbar bg-base-100 bg-opacity-50 backdrop-blur-md mb-6 sticky top-0 z-50">
        <div className="flex-1">
            <img src="/assets/logo.png" alt="" />
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-4">
            <li><a>Link</a></li>
            <li><a>Fixture</a></li>
            <li><a>Teams</a></li>
            <li><a>Schedules</a></li>
            <li>
            <button  className="border border-gray-200 px-4 ml-4"> 
              <TbCoinFilled className="text-2xl text-yellow-600"/>
              <span>{freeCredit} Coin</span>
            </button>
            </li>
            </ul>
        </div>
        </div>
  )
}


Header.propTypes = {
  freeCredit: PropTypes.number.isRequired
  
};

export default Header
