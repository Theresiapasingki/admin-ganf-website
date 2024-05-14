import { SideNavbar } from "../components";
import { user, strawberry, pencil, bin } from "../assets";
import { Link } from "react-router-dom";

const Products = () => {
    return (
      <main>
        <div className="flex flex-row bg-grey">
          <SideNavbar/>
          <div className="flex flex-col gap-1 w-full font-sans px-12">
            <div className="flex flex-row items-center justify-end mt-4">
              <img src={user} alt="logo" className="w-11 h-11 pr-4"/>
              <p>Admin</p>
            </div>
            <h1 className="text-mid-blue text-[30px] font-bold">Products</h1>


            <div className="flex self-end">
              <div className="rounded-[16px] bg-dark-blue w-[9.5rem] h-[2.5rem] flex items-center">
                <Link to="/addproduct" className="text-white font-bold px-7">Add Product</Link>
              </div>
            </div>

          <div className="pt-8">
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
          </div>
          </div>
        </div>
      </main>
    );
};

export default Products;
