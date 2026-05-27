import service from "../services/index.services";
import AddJobPage from "./AddJobPage";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";

function JobDetail() {
  const { projectId } = useParams(); // destructuring the project id from dynamic params (see App.jsx => :projectId)

  const [jobDetail, setjobDetail] = useState(null);
  const { jobId } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      await service.patch(`/job/${jobId}`, body);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  if (!jobDetail) return <h3>Loading...</h3>;

  return (
    <div className="min-h-svh bg-white rounded-3xl">
      <div>
        <h1>{job.jobRole}</h1>
        <p>{project.description}</p>
      </div>

      {project.tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}

      <AddTask projectId={project.id} getData={getData} />

      <div className="flex-col justify-between text-sm">
        <Button className="flex h-8 w-4 text-xs" color="light">
          {" "}
          <Link to={`/dashboard`}>Back</Link>
        </Button>

        <Button className="flex h-8 w-4 text-xs" color="light">
          {" "}
          <Link to={`/dashboard/job/${job._id}`}> {<BiEditAlt />}</Link>
        </Button>
      </div>
    </div>
  );
}
export default JobDetail;
