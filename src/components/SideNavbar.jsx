import { Link } from 'react-router-dom';
import { insertside, logo, settings } from "../assets";
import { buttonpower, handheld, home, } from "../assets";


const SideNavbar = () => {
  return (
      <div className="h-screen w-69 flex flex-col bg-white border-r">
        <div className="py-8 px-16 flex justify-between items-center">
          <img src={logo} alt="logo" className="w-31 h-19" />
        </div> 

        <div className="text-center font-sans">
          <div className="flex flex-col">
            <div className="flex flex-row flex items-center">
            <Link to="/" className="btn-icon py-4 px-10">
              <img src={home} alt="home logo" className="w-5 h-5"/>
            </Link>
            <Link to="/" className="hover:text-mid-blue">Dashboard</Link>
            </div>

            <div className="flex flex-row flex items-center">
            <Link to="/product" className="btn-icon py-4 px-10">
              <img src={insertside} alt="product logo" className="w-5 h-5" />
            </Link>
            <Link to="/product" className="hover:text-mid-blue">Product</Link>
            </div>

            <div className="flex flex-row flex items-center">
            <Link to="/promotion" className="btn-icon py-4 px-10">
              <img src={handheld} alt="promotion logo" className="w-5 h-5" />
            </Link>
            <Link to="/promotion" className="hover:text-mid-blue">Promotion</Link>
            </div>

            <div className="flex flex-row flex items-center">
            <Link to="/settings" className="btn-icon py-4 px-10">
              <img src={settings} alt="settings logo" className="w-5 h-5" />
            </Link>
            <Link to="/settings" className="hover:text-mid-blue">Settings</Link>
            </div>

            <div className="flex flex-row flex items-center">
            <Link to="/logout" className="btn-icon py-4 px-10">
              <img src={buttonpower} alt="button power logo" className="w-5 h-5" />
            </Link>
            <Link to="/logout" className="hover:text-mid-blue">Logout</Link>
            </div>
          </div>
        </div>
      </div>
    );  
  };

export default SideNavbar;