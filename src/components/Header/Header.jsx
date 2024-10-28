import { TbCoinFilled } from "react-icons/tb";
const Header = () => {
  return (
        <div className="navbar mb-6">
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
            <button className="border border-gray-200 px-4 ml-4">0 Coin <TbCoinFilled className="text-2xl text-yellow-600"/> </button>
            </li>
            </ul>
        </div>
        </div>
  )
}

export default Header
