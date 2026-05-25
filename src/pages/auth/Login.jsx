import service from "../../services/index.services";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import image from "../../assets/login-img.jpg";

function Login() {
  const { setIsLoggedIn, setLoggedUserId, setLoggedUserRole } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    // ... contact backend to validate user credentials
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await service.post("/auth/login", body);

      // storing the token safely in localstorage
      localStorage.setItem("authToken", response.data.authToken);

      // update the auth context states accordingly
      setIsLoggedIn(true);
      setLoggedUserId(response.data.payload._id);
      setLoggedUserRole(response.data.payload.role);

      console.log(response.data);

      navigate("/jobList");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        // navigate("/error")
      }
    }
  };

  return (
    <section className="flex min-h-screen shadow-2xl  items-center justify-center  bg-blue-50">
      <div className="flex rounded-3xl shadow-2xl">
        <div
          className="flex flex-col items-center justify-center h-120 w-100 bg-gray-50 rounded-2xl text-left gap-2
      
      lg:rounded-tr-none lg:rounded-br-none"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Login
          </h2>

          <form className="auth-form" onSubmit={handleLogin}>
            <label className="block font-medium text-gray-600 mt-2">
              Email:
            </label>
            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-2"
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />
            <br />
            <label className="font-medium text-gray-600 mt-2">Password:</label>
            <input
              className="w-full px-2 py-1 border  border-stone-400 focus:outline-none mb-8 focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md"
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <br />
            <button
              className="bg-violet-500 hover:bg-violet-600 w-full  text-white p-2 rounded-md font-semibold transition mb-3"
              type="submit"
            >
              Login
            </button>{" "}
            <p className="text-xs text-center">
              Don't have an account?{" "}
              <Link to={"/signup"}>
                <span className="text-blue-600">Signup</span>
              </Link>
            </p>
            {errorMessage && <p>{errorMessage}</p>}
          </form>
        </div>
        <img
          src={image}
          alt=""
          className="w-120 object-cover lg:rounded-tr-2xl  lg:rounded-br-2xl lg:block hidden"
        />
      </div>
    </section>
  );
}

export default Login;
