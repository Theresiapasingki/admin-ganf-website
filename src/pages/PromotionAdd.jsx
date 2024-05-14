import { SideNavbar } from "../components";
import { user } from "../assets";
import { cam } from "../assets";
import { Link } from "react-router-dom";

const PromotionAdd = () => {
    return (
      <main>
        <div className="flex flex-row bg-grey">
          <SideNavbar/>
          <div className="flex flex-col gap-3 w-full font-sans">
            <div className="flex flex-row items-center justify-end mt-4">
              <img src={user} alt="logo" className="w-11 h-11 pr-4"/>
              <p className="pr-12">Admin</p>
            </div>
            <h1 className="text-mid-blue text-[30px] font-bold pl-[72px]">Promotion</h1>

            <div className="pl-14 flex flex-col gap-16">
                <div className="bg-verylight-blue w-[59rem] h-[375px] rounded-t-lg">
                    <div className="bg-white h-[3.5rem] rounded-t-lg">
                        <p className="text-mid-blue font-bold text-[18px] pl-8 py-4">Add Promotion</p>
                    </div>

                    <div className="flex flex-row">
                        <div className="pt-8 pl-7 flex flex-col items-center">
                            <p className="text-[13px] font-medium pb-1">Product Picture</p>
                            <div className="bg-white w-40 h-[182px] flex flex-col items-center py-[50px] justify-center">
                                <img src={cam} alt="cam" className="w-7 h-7"/>
                                <p className="text-medium-grey font-medium text-[13px] pb-2">Insert Image</p>
                            </div>  
                        </div>

                        <div className="pl-10 pt-4 gap-3">
                            <p className="text-[13px] font-medium pb-1 pt-4">Description</p>
                            <input className="textarea-field w-[456px] h-[124px] rounded-[8px] placeholder-padding placeholder-style" placeholder="Description about the product"></input>

                            <div className="pt-2">
                            <div className="bg-dark-blue w-[64px] h-[28px] rounded-[15px] mt-5 flex items-center">
                                <Link to="/promotion" className="text-white font-bold text-[13px] px-4">Save</Link>
                            </div>
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

export default PromotionAdd;
