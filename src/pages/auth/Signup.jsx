import service from "../../services/index.services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import image from "../../assets/signup-img.jpg";

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSignup = async (e) => {
    e.preventDefault();

    const body = {
      email: email,
      username: username,
      password: password,
    };

    try {
      const response = await service.post("/auth/signup", body);
      navigate("/login");
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        setErrorMessage(error.response.data.errorMessage);
      } else {
        setErrorMessage("Oops! Something went wrong.");
      }
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center  bg-blue-50">
      <div className="flex rounded-3xl shadow-2xl">
        <div
          className="flex flex-col items-center justify-center h-120 w-100 bg-gray-50 rounded-2xl text-left gap-2
      
      lg:rounded-tr-none lg:rounded-br-none"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Signup
          </h2>
          <p>Create your account in just a few steps!</p> <br />
          <form onSubmit={handleSignup}>
            <label className="font-medium text-gray-600 mt-2">Email:</label>
            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md"
              type="text"
              name="email"
              placeholder="email"
              value={email}
              onChange={handleEmailChange}
            />

            <br />

            <label className="block font-medium text-gray-600 mt-2">
              Username:
            </label>
            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md"
              type="text"
              name="username"
              placeholder="username"
              value={username}
              onChange={handleUsernameChange}
            />

            <br />

            <label className="block font-medium text-gray-600 mt-2">
              Password:
            </label>
            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none mb-8 focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md"
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
              Signup
            </button>
            <p className="text-xs text-center">
              Already have an account?{" "}
              <Link to={"/login"}>
                <span className="text-blue-600">Login</span>
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

export default Signup;
