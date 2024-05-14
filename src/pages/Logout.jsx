import { ganf } from '../assets';

const Logout = () => {
  return (
    <div className="bg-dark-blue h-screen flex items-center justify-center">
      <div className="flex flex-col items-center rounded-lg bg-white w-[396px] h-[526px] py-7 px-9">
        <img src={ganf} alt="Logo GANF" className="w-48 mb-6" />
        <form className="flex flex-col mb-20" action="/">
          <input
            type="text"
            placeholder="Username"
            className="input-field mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <a
            href="/login"
            className="text-end text-dark-blue font-medium mt-2 text-sm hover:underline"
          >
            Forgot Password?
          </a>
          <button className="btn--blue-primary !w-full mt-6" type="submit">
            Login
          </button>
        </form>
        <h1 className="font-handwritten text-3xl text-pink">
          HAPPINESS #1
        </h1>
      </div>
    </div>
  );
};

export default Logout;
