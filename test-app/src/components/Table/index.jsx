import React, { useMemo, useState } from "react";
import styles from "./index.module.css";
import Spinner from "../Spinner";

const Table = (props) => {
  const { data, itemPerPage, loading } = props;
  const pageSize = itemPerPage;
  const totalPages = Math.ceil(data.length / pageSize); // Total pages
  const [page, setPage] = useState(0);

  const currentPageData = React.useMemo(
    () => data.slice(page * pageSize, (page + 1) * pageSize),
    [data, page, pageSize]
  );

  // Generate pagination buttons with limited visibility
  const getPaginationButtons = useMemo(() => {
    const buttons = [];
    const start = Math.max(0, page - 2);
    const end = Math.min(totalPages - 1, page + 2);

    for (let i = start; i <= end; i++) {
      buttons.push(
        <button
          key={i}
          className={`${styles.pageButton} ${page === i ? styles.active : ""}`}
          onClick={() => setPage(i)}
          aria-current={page === i ? "page" : undefined}
        >
          {i + 1}
        </button>
      );
    }

    return buttons;
  }, [page, totalPages]);

  if (loading === true) {
    return (
      <>
        <Spinner /> <span className="sr-only">Loading...</span>
      </>
    );
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Percentage Funded</th>
            <th>Amount Pledged</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData?.length > 0 ? (
            currentPageData?.map((item) => (
              <tr key={item["s.no"]}>
                <td>{item["s.no"]}</td>
                <td>{item["percentage.funded"]}</td>
                <td>{item["amt.pledged"]}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="textCenter">
                No Data Available!
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className={styles.pagination}>
        <button
          className={styles.navButton}
          disabled={page === 0}
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          aria-label="Go to previous page"
        >
          &laquo; Previous
        </button>

        {getPaginationButtons}

        <button
          className={styles.navButton}
          disabled={page === totalPages - 1}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages - 1))}
          aria-label="Go to next page"
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Table;
