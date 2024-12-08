import { useDataFetcher } from "../hooks/useDataFetcher";
import { API_URL } from "../utils/constant";
import Table from "./Table";

function TableWrapper() {
  const { loading, data } = useDataFetcher(API_URL);
  return (
    <>
      <h1>SAAS LABS ASSIGNMENT</h1>
      <Table data={data} loading={loading} itemPerPage={5} />
    </>
  );
}

export default TableWrapper;
