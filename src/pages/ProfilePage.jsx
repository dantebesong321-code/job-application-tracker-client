import service from "../services/index.services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import { BiEdit } from "react-icons/bi";
import { Spinner, Avatar } from "flowbite-react";

function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/auth/verify");

      console.log(response.data);

      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return <Spinner size="xl" aria-label="Loading..." className="me-3" light />;
  }

  return (
    <div className="min-h-svh p-5">
      {/* top section */}
      <div className="flex justify-between items-center mb-6">
        <BackButton />

        <Link to="/dashboard/profile/edit">
          <button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">
            <BiEdit />
            Edit
          </button>
        </Link>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex flex-col items-center text-center gap-4">
          <Avatar className="" img={user.avatar || ""} rounded size="xl" />

          <div>
            <h1 className="text-2xl font-bold">
              {user.firstName} {user.lastName}
            </h1>

            <h2 className="text-gray-500">@{user.username}</h2>
          </div>

          <p className="text-gray-600 max-w-md">
            {user.bio || "No bio added yet."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-600">{user.email}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-gray-600">{user.phone || "Not provided"}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-gray-600">
              {user.address?.city || "No location added"}
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl">
            <h3 className="font-semibold mb-1">Website</h3>
            <p className="text-gray-600">
              {user.socialLinks?.website || "No website"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
