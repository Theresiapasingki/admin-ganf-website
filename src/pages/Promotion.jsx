import { SideNavbar } from "../components";
import { user, pencil, bin, desember } from "../assets";
import { Link } from "react-router-dom";

const Promotion = () => {
    return (
      <main>
        <div className="flex flex-row bg-grey">
          <SideNavbar/>
          <div className="flex flex-col gap-1 w-full font-sans px-12">
            <div className="flex flex-row items-center justify-end mt-4">
              <img src={user} alt="logo" className="w-11 h-11 pr-4"/>
              <p>Admin</p>
            </div>
            <h1 className="text-mid-blue text-[30px] font-bold">Promotion</h1>


            <div className="flex self-end">
              <div className="rounded-[16px] bg-dark-blue w-[9.5rem] h-[3.25rem] flex items-center">
                <Link to="/addpromotion" className="text-white font-bold px-7">Add Promotion</Link>
              </div>
            </div>

            <div className="pt-8">
            <div className="bg-white rounded-[20px] w-[59rem] h-[150px]">
            <div className="flex flex-row gap-28 px-8 pt-4">
              <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold">No</p>
                <p>1.</p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <p className="font-semibold">Image</p>
                <img src={desember} alt="strawberry" className="w-[53px] h-[70px]"></img>
              </div>

              <div className="flex flex-col gap-4 items-center pl-36">
                <p className="font-semibold">Text</p>
                <p>-</p>
              </div>

              <div className="flex flex-col gap-4 items-center pl-44">
                <p className="font-semibold">Action</p>
                <div className="flex flex-row gap-3">
                  <Link to="/editpromotion">
                    <img src={pencil} alt="pencil" className="w-[20px] h-[20px]"></img>
                  </Link>
                <img src={bin} alt="bin" className="w-[20px] h-[20px]"></img>
                </div>
              </div>
            </div>
          </div>
          </div>

          </div>
        </div>
      </main>
    );
};

export default Promotion;
