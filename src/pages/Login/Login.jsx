import { useContext, useState } from 'react';
import { ganfLogo, loadingWhiteIcon } from '../../assets';
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUrl } from '../../utils/apiUrl';

const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword);

    const passwordInput = document.getElementById('password');
    if (showPassword) {
      passwordInput.type = 'password';
    } else {
      passwordInput.type = 'text';
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formState.email || !formState.password) {
      setIsLoading(false);
      return toast.error('Please fill in all fields');
    }

    try {
      const loginData = {
        email: formState.email,
        password: formState.password,
      };

      const response = await axios.post(
        `${getUrl()}/api/auth/login`,
        loginData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = response.data.data;
      login(data.accessToken);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error('Error logging in. Please try again.');
    }
  };

  return (
    <div className="bg-dark-blue h-screen flex items-center justify-center">
      <div className="flex flex-col items-center rounded-lg bg-white w-[396px] h-[526px] py-7 px-9">
        <img src={ganfLogo} alt="Logo GANF" className="w-48 mb-6" />
        <form className="flex flex-col mb-20" onSubmit={handleFormSubmit}>
          <input
            id="email"
            type="text"
            placeholder="Email"
            className="input-field--large mb-4"
            value={formState.email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            autoComplete="off"
          />
          <div className="relative">
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="input-field--large"
              value={formState.password}
              onChange={(e) =>
                setFormState({ ...formState, password: e.target.value })
              }
              autoComplete="off"
            />
            <button
              type="button"
              className="absolute right-3 top-[0.6rem]"
              onClick={handleShowPassword}
            >
              <i className={`fa-regular fa-eye${showPassword ? '-slash' : ''}`}></i>
            </button>
          </div>
          <a href="/login" className="link-forgot-password">
            Forgot Password?
          </a>
          <button className="btn-primary--large mt-6" type="submit">
            Login
            {isLoading && (
              <img
                src={loadingWhiteIcon}
                alt="Loading Icon"
                className="animate-spin w-6 h-6 ml-2"
              />
            )}
          </button>
        </form>
        <h1 className="font-handwritten text-3xl text-pink">HAPPINESS #1</h1>
      </div>
    </div>
  );
};

export default Login;
