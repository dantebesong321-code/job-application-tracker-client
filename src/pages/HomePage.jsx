import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function Home() {
  return (
    <section>
      <div className="m-10 min-h-svh">
        <div className="flex items-center text-left p-5 justify-center bg-stone-200 min-h-70 rounded-2xl ">
          <div>
            <h1>Your job search, finally organized.</h1>
            <p>
              Track your applications, and prepare for interviews without the
              spreadsheet chaos.
            </p>{" "}
            <div className="flex flex-col p-4 md:flex-row xl:max-w-9xl">
              <Link to={"/dashboard/job"}>
                <button className="xl:min-w-3xs lg:text-xs bg-violet-500 hover:bg-violet-600 w-full text-white p-2 rounded-md font-semibold transition">
                  Get started
                </button>
              </Link>
            </div>
            <div className="flex text-xs gap-2 mb-4">
              <Link className="hover:text-sky-600" to={"/signup"}>
                Signup
              </Link>
              <Link className="hover:text-sky-600" to={"/dashboard"}>
                Dashboard
              </Link>
            </div>
          </div>
        </div>
        <br />
        <div className="h-20 "></div>
        <div className="flex justify-center flex-wrap gap-3 ">
          <div className="flex items-center w-sm text-left p-5 justify-center bg-stone-200 h-50 rounded-2xl ">
            Content here
          </div>
          <div className="flex items-center w-sm text-left p-5 justify-center bg-stone-200 h-50 rounded-2xl ">
            Content here
          </div>
          <div className="flex items-center w-sm text-left p-5 justify-center bg-stone-200 h-50 rounded-2xl ">
            Content here
          </div>
          <div className="flex items-center w-sm text-left p-5 justify-center bg-stone-200 h-50 rounded-2xl ">
            Content here
          </div>
        </div>
      </div>
      <div className=" m-10 flex items-center text-left p-5 justify-center bg-stone-200 min-h-60 rounded-2xl"></div>
    </section>
  );
}

export default Home;
