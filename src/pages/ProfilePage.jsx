import service from "../services/index.services";
import { useEffect, useState } from "react";

function ProfilePage() {
  const [dataOnlyForLoggedUsers, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // call a private route here...
      const response = await service.get("/:userProfileId");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // loading handler here
  if (!dataOnlyForLoggedUsers) {
    return (
      <span className="bg-indigo-500">
        {" "}
        <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24">
          {" "}
          <h3>loading...</h3>
        </svg>
      </span>
    );
  }

  return (
    <div>
      <h3>Private Page Example</h3>
      <p>
        Should only be visible for logged in users that already validated their
        credentials (login) and have a valid token
      </p>

      {dataOnlyForLoggedUsers.username}
    </div>
  );
}

export default ProfilePage;
