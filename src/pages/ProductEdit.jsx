import { SideNavbar } from "../components";
import { user } from "../assets";
import { cam } from "../assets";
import { Link } from "react-router-dom";

const ProductEdit = () => {
  return (
    <main>
      <div className="flex flex-row bg-grey">
        <SideNavbar />
        <div className="flex flex-col gap-3 w-full font-sans">
          <div className="flex flex-row items-center justify-end mt-4">
            <img src={user} alt="logo" className="w-11 h-11 pr-4" />
            <p className="pr-12">Admin</p>
          </div>
          <h1 className="text-mid-blue text-[30px] font-bold pl-[72px]">
            Product
          </h1>

          <div className="pl-14 flex flex-col gap-16">
            <div className="bg-verylight-blue w-[59rem] h-[26rem] rounded-t-lg">
              <div className="bg-white h-[3.5rem] rounded-t-lg">
                <p className="text-mid-blue font-bold text-[18px] pl-8 py-4">
                  Edit Product
                </p>
              </div>

              <div className="flex flex-row">
                <div className="pt-8 pl-7 flex flex-col items-center">
                  <p className="text-[13px] font-medium pb-1">
                    Product Picture
                  </p>
                  <div className="bg-white size-[9.5rem] flex flex-col items-center py-[50px]">
                    <img src={cam} alt="cam" className="w-7 h-7" />
                    <p className="text-medium-grey font-medium text-[13px] pb-2">
                      Insert Image
                    </p>
                  </div>
                </div>

                <div className="pl-10 pt-8 gap-3">
                  <p className="text-[13px] font-medium pb-1">Product Name</p>
                  <input
                    className="textarea-field w-[456px] rounded-[8px] placeholder-padding placeholder-style"
                    placeholder="Name goes here"
                  ></input>

                  <p className="text-[13px] font-medium pb-1 pt-4">Category</p>
                  <input
                    className="textarea-field w-[456px] rounded-[8px] placeholder-padding placeholder-style"
                    placeholder="Name goes here"
                  ></input>

                  <p className="text-[13px] font-medium pb-1 pt-4">
                    Description
                  </p>
                  <input
                    className="textarea-field w-[456px] h-[124px] rounded-[8px] placeholder-padding placeholder-style"
                    placeholder="Description about the product"
                  ></input>

                  <div className="bg-dark-blue w-[64px] h-[28px] rounded-[15px] mt-2 flex items-center">
                    <Link
                      to="/product"
                      className="text-white font-bold text-[13px] px-4"
                    >
                      Save
                    </Link>
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

export default ProductEdit;
