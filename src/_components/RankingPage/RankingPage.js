import React, { useState, useEffect } from "react";
import { getTestData } from "../../_data/TestDataGenerator/TestDataGenerator.js";
import Pagination from "../Pagination/Pagination.js";
import WidePlate from "../WidePlate/WidePlate.js";

export default function() {
  const [isFetching, setIsFetching] = useState(false);
  const [userList, setUsetList] = useState([]);
  const [pageState, setPageState] = useState({
    currentPage: 1,
    totalPage: 0,
    maxPerPage: 3
  });

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);

      // Fetch data
      await getTestData();
      const offset = (pageState.currentPage - 1) * pageState.maxPerPage;
      const { userList, userCount } = await getTestData({ offset });
      setUsetList(userList);
      setIsFetching(false);

      // Update pagination state
      const totalPage = Math.ceil(userCount / pageState.maxPerPage);
      setPageState(Object.assign({ ...pageState }, { totalPage }));
    };

    fetchData();
  }, []);

  const handleClickPagination = async nextPageNumber => {
    setIsFetching(true);

    // Fetch data
    const offset = (nextPageNumber - 1) * pageState.maxPerPage;
    const { userList, userCount } = await getTestData({ offset });
    setUsetList(userList);
    setIsFetching(false);

    // Updata pagination state
    const totalPage = Math.ceil(userCount / pageState.maxPerPage);
    setPageState(
      Object.assign(
        { ...pageState },
        { totalPage, currentPage: nextPageNumber }
      )
    );
  };

  if (isFetching) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Pagination Sample</h1>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Admin</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <tr>
                  <WidePlate PlateInformation = {user}/>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          pageState={pageState}
          handleClickPagination={handleClickPagination}
        />
      </div>
    </div>
  );
}