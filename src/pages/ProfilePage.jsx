import service from "../services/index.services";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton";
import { BiEdit } from "react-icons/bi";
import { Button, Spinner } from "flowbite-react";

function ProfilePage() {
  const [dataOnlyForLoggedUsers, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/user/${userId}`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!dataOnlyForLoggedUsers) {
    return <Spinner size="xl" aria-label="Loading..." className="me-3" light />;
  }

  return (
    <div className="min-h-svh">
      <div className="mt-5 flex justify-between flex-wrap">
        <BackButton />
        <Link to={`/dashboard/job/${job._id}`}>
          <button className="flex justify-center items-center gap-0.5 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-xs font-medium w-20">
            <BiEdit />
            Edit
          </button>
        </Link>
      </div>{" "}
      <div className="flex bg-white rounded-2xl p-6 items-start justify-between flex-wrap gap-4">
        <h3>Hello</h3>
        <h3>{}</h3>
        <p>
          Should only be visible for logged in users that already validated
          their credentials (login) and have a valid token
        </p>
      </div>
    </div>
  );
}

export default ProfilePage;
