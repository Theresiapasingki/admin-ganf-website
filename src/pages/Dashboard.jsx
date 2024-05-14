import { SideNavbar } from "../components";
import { strawberry, user, bin, pencil } from "../assets";
import { shoppingcart } from "../assets";
import { employee } from "../assets";
import { notes } from "../assets";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex flex-row bg-grey">
      <div>
        <SideNavbar />
      </div>
      <section className="px-12 w-full">
        <div className="flex flex-col gap-1 font-sans">
          <div className="flex flex-row items-center justify-end mt-4">
            <img src={user} alt="logo" className="w-11 h-11 pr-4" />
            <p>Admin</p>
          </div>
          <div className="flex flex-col gap-10">
            <h1 className="text-mid-blue text-[30px] font-bold">Dashboard</h1>

            <div>
              <div className="flex flex-row gap-16">
                <div className="rounded-3xl bg-light-brown w-[14.75rem] h-[6.75rem]">
                  <div className="flex flex-row items-center pt-4 gap-4">
                    <div className="flex flex-col pl-10">
                      <p className="text-white text-xl font-bold mb-1 pl-6">
                        9
                      </p>
                      <p className="text-white text-sm font-bold">Products</p>
                    </div>
                    <img
                      src={shoppingcart}
                      alt="shoppingcart"
                      className="w-[4.75rem] h-[4.75rem] pl-4"
                    />
                  </div>
                </div>

                <div className="rounded-3xl bg-mint w-[14.75rem] h-[6.75rem]">
                  <div className="flex flex-row items-center pt-4 gap-4">
                    <div className="flex flex-col pl-10">
                      <p className="text-white text-xl font-bold mb-1 pl-6">
                        1
                      </p>
                      <p className="text-white text-sm font-bold">Employee</p>
                    </div>
                    <img
                      src={employee}
                      alt="employee"
                      className="w-[4.75rem] h-[4.75rem] pl-4"
                    />
                  </div>
                </div>

                <div className="rounded-3xl bg-purple w-[14.75rem] h-[6.75rem]">
                  <div className="flex flex-row items-center pt-4 gap-4">
                    <div className="flex flex-col pl-10">
                      <p className="text-white text-xl font-bold mb-1 pl-6">
                        5
                      </p>
                      <p className="text-white text-sm font-bold">Testimony</p>
                    </div>
                    <img
                      src={notes}
                      alt="testimony"
                      className="w-[4.75rem] h-[4.75rem] pl-4"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-mid-blue text-lg font-bold pt-12">Products</h2>

          <div className="bg-white rounded-[20px] w-[59rem] h-[150px]">
            <div className="flex flex-row gap-28 px-8 pt-4">
              <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold">No</p>
                <p>1.</p>
              </div>

              <div className="flex flex-col">
                <p className="font-semibold">Product Pic</p>
                <img src={strawberry} alt="strawberry" className="w-[90px] h-[80px]"></img>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold">Product Name</p>
                <p>Starwberry Roll Cake </p>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold">Category</p>
                <p>food</p>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <p className="font-semibold">Action</p>
                <div className="flex flex-row gap-3">
                  <Link to="/editproduct">
                    <img src={pencil} alt="pencil" className="w-[20px] h-[20px]"></img>
                  </Link>
                <img src={bin} alt="bin" className="w-[20px] h-[20px]"></img>
                </div>
              </div>
            </div>
          </div>
          <Link to="/product" className="font-medium flex justify-center pt-3">Show All</Link>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
