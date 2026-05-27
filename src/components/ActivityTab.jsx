import service from "../services/index.services";
import { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

function ActivityTab() {
  const [jobStatus, setJobStatus] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/activity");

      console.log(response.data);

      setJobStatus(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!jobStatus) {
    return <h3>Loading...</h3>;
  }

  return <div></div>;
}
export default ActivityTab;
