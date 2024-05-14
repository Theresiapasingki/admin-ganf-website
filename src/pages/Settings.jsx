import { SideNavbar } from "../components";
import { profile, user } from "../assets";
import { Link } from "react-router-dom";

const SettingsEdit = () => {
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
            Settings
          </h1>

          <div className="pl-14 flex flex-col gap-16">
            <div className="bg-verylight-blue w-[59rem] h-[29rem] rounded-t-lg">
              <div className="bg-white h-[3.5rem] rounded-t-lg">
                <p className="text-mid-blue font-bold text-[18px] pl-8 py-4">
                  My Account
                </p>
              </div>

              <div className="flex flex-row">
                <div className="pt-12 px-[50px] flex flex-col items-center">
                  <img
                    src={profile}
                    alt="profile-icon"
                    className="size-[130px]"
                  ></img>
                  <p className="text-[13px] font-medium pt-2">Admin</p>
                </div>

                <div className="pt-8 gap-3">
                  <p className="text-[13px] font-medium pb-1">USERNAME</p>
                  <div className="bg-white w-[456px] h-[36px] rounded-[8px] flex items-center">
                    <p className="text-[13px] font-medium pl-[12px]">Admin</p>
                  </div>

                  <p className="text-[13px] font-medium pb-1 pt-4">EMAIL</p>
                  <div className="bg-white w-[456px] h-[36px] rounded-[8px] flex items-center">
                    <p className="text-[13px] font-medium pl-[12px]">admin@gmail.com</p>
                  </div>

                  <p className="text-[13px] font-medium pb-1 pt-4">PASSWORD</p>
                  <div className="bg-white w-[456px] h-[36px] rounded-[8px] flex items-center">
                    <p className="text-[13px] font-medium pl-[12px]">abcdefghijklmnop</p>
                  </div>

                  <p className="text-[13px] font-medium pb-1 pt-4">PHONE NUMBER</p>
                  <div className="bg-white w-[456px] h-[36px] rounded-[8px] flex items-center">
                    <p className="text-[13px] font-medium pl-[12px]">+628098347562</p>
                  </div>

                  <div className="bg-dark-blue w-[64px] h-[28px] rounded-[15px] mt-4 flex items-center">
                    <Link
                      to="/editsettings"
                      className="text-white font-bold text-[13px] px-5"
                    >
                      Edit
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

export default SettingsEdit;