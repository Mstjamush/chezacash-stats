import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { handleAuth } from "../../Api/api";
import Loader from "../Layout/Loader";

const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const cookies = new Cookies();

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoading(true);
    handleAuth({ email, password })
      .then((res) => {
        if (res.status === 200) {
          cookies.set("user", res.data, { path: "/" });
          navigate("/bulk-upload");
        } else {
          setError(true);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <div className="w-full h-screen flex pt-20 justify-center overflow-hidden bg-opacity-5 bg-primary">
      <div className="flex flex-col items-center gap-4 shadow-lg w-3/4 lg:w-1/3 lg:h-1/2 h-3/4 rounded-xl bg-white">
        <div className="w-full h-20 bg-primary flex justify-center items-center rounded-tr-xl rounded-tl-xl">
          <h1 className="font-primary text-2xl text-white">chezacash</h1>
          {/* <img src={Logo} className="object-cover w-full h-full " /> */}
        </div>
        <div className="w-3/4 flex flex-col gap-4 items-center font-secondary">
          {error && <h1>Invalid Email or Password</h1>}
          <div className="flex w-full flex-col gap-2">
            <label> Email </label>
            <input
              type="text"
              name=""
              id=""
              className="py-4 border-2 border-opacity-60 border-secondary rounded-lg focus:outline-primary bg-transparent px-2"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label> Password</label>
            <input
              type="password"
              name=""
              id=""
              className="py-4 border-2 border-opacity-60 border-secondary rounded-lg focus:outline-primary bg-transparent px-2"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="">
            {!isLoading ? (
              <button
                className="hover:bg-secondary bg-primary  text-white hover:text-white w-full py-2 rounded px-8"
                onClick={handleLogin}
              >
                Login
              </button>
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
