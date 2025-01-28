import React, { useEffect } from "react";
import Table from "../components/common/Table";
import Pagination from "../components/common/Pagination";
import { columns } from "../constants/profile.constant";
import { getProfile } from "../services/profile.service";
import { Button } from "../components/common";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Profile() {
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);
  const [data, setData] = React.useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getProfile();
        setData(response?.data?.recipes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-20 mx-2">
        <Table columns={columns} data={data} title={"My Recipes"} />
        <Pagination
          currentPage={page}
          totalPages={pageSize}
          onPageChange={(val) => {
            console.log(val);
            setPage(val);
          }}
        />
      </div>

      <Button className={"absolute bottom-10 right-10 rounded-full"}>
        <FontAwesomeIcon icon={faPlus} />
      </Button>
    </>
  );
}

export default Profile;
