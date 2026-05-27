import service from "../services/index.services";
import { useEffect, useState } from "react";

function JobDetail() {
  const { projectId } = useParams(); // destructuring the project id from dynamic params (see App.jsx => :projectId)

  const [project, setProject] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // call the API here to receive project details...
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/projects/${projectId}?_embed=tasks`,
      );
      console.log(response.data);
      setProject(response.data);
    } catch (error) {
      console.log(error);
      //todo proper error handling here
    }
  };

  if (!project) return <h3>Loading...</h3>; //todo proper loading animation here

  return (
    <div className="ProjectDetailsPage">
      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      {/* ... list of all Tasks for this Project should be rendered here */}

      {/* example of a single TaskCard being rendered */}
      {/* <TaskCard /> */}
      {project.tasks.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}

      {/* ... form for adding a new Task should be rendered here    */}
      <AddTask projectId={project.id} getData={getData} />

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      <Link to={`/projects/edit/${project.id}`}>
        <button>Edit Project</button>
      </Link>
    </div>
  );
}
export default JobDetail;
