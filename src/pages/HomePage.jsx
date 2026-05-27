import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

function Home() {
  return (
    <section>
      <div className="min-h-svh">
        <h1>Your job search, finally organized.</h1>
        <p>
          Track applications, tailor resumes, and prepare for interviews without
          the spreadsheet chaos.
        </p>{" "}
        <br />
        <Link to={"/dashboard"}>Dashboard</Link>
      </div>
    </section>
  );
}

export default Home;
