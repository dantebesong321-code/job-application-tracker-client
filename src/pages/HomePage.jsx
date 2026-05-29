import { AiOutlineArrowRight } from "react-icons/ai";
import { RxBackpack } from "react-icons/rx";

import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import imgLandingPg1 from "../assets/imgLandingPg1.jpg";
import imgLandingPg2 from "../assets/imgLandingPg2.jpg";
import imgLandingPg3 from "../assets/imgLandingPg3.jpg";
import imgLandingPg4 from "../assets/imgLandingPg4.jpg";

function Home() {
  return (
    <section>
      <div className="m-10 min-h-svh">
        <div className="flex items-center text-left p-5 justify-center bg-stone-100 min-h-70 rounded-2xl ">
          <div className="text-center">
            <h1>Your job search, finally organized.</h1>
            <h5 className="text-base text-<size>/[<14px>] ">
              Track your applications, and prepare for interviews without the
              spreadsheet chaos.
            </h5>{" "}
            <div className="flex flex-col justify-center p-4 md:flex-row xl:max-w-9xl">
              <Link to={"/signup"}>
                <button className="lg:text-xs bg-violet-500 hover:bg-violet-600 w-full text-white p-2 rounded-md font-semibold transition">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <br /> <br />
        <h2>Built for modern job seekers who want clarity.</h2>
        <h5>
          Join Jobbler and take control of your applications, interviews, and
          career journey.
        </h5>{" "}
        <br />
        <div className="flex justify-center flex-wrap gap-3 ">
          <div className="flex items-center w-sm text-left justify-center bg-stone-200 overflow-hidden h-50 rounded-2xl ">
            <img src={imgLandingPg1} height="180px" width="auto" alt="" />
          </div>
          <div className="flex items-center w-sm text-left justify-center bg-stone-200 overflow-hidden h-50 rounded-2xl ">
            <img src={imgLandingPg2} height="180px" width="auto" alt="" />
          </div>
          <div className="flex items-center w-sm text-left justify-center bg-stone-200 overflow-hidden h-50 rounded-2xl ">
            <img src={imgLandingPg3} height="180px" width="auto" alt="" />
          </div>
          <div className="flex items-center w-sm text-left justify-center bg-stone-200 overflow-hidden h-50 rounded-2xl ">
            <img src={imgLandingPg4} height="180px" width="auto" alt="" />
          </div>
        </div>
      </div>

      <Link to={"/login"}>
        <div className=" m-10 flex items-center text-left justify-center  bg-stone-200  min-h-60 overflow-hidden rounded-2xl">
          <h1 className="flex gap-8 items-center">
            {" "}
            <RxBackpack size={200} />
            Let’s make progress today
          </h1>
          <h5>
            <AiOutlineArrowRight size={50} />
          </h5>
        </div>
      </Link>
    </section>
  );
}

export default Home;
