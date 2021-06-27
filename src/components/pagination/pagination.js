import React, { useEffect, useState } from "react";
import clsx from "clsx";
import "./pagination.scss";

const limit = 5;
const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {
    console.log({totalPages, currentPage})
  const [displayList, setDisplayList] = useState([]);
  useEffect(() => {
    const pageList = [];
    if (totalPages <= limit) {
      for (let i = 0; i < totalPages; i++) {
        pageList.push(i + 1);
      }
      setDisplayList([...pageList]);
    } else {
      if (currentPage < limit) {
        for (let i = 0; i < limit; i++) {
          pageList.push(i + 1);
        }
        setDisplayList([...pageList]);
      } else if (currentPage - 1 > totalPages - limit) {
        for (let i = totalPages - limit; i < totalPages; i++) {
          pageList.push(i + 1);
        }
        setDisplayList([...pageList]);
      } else {
        pageList.push(currentPage - 1, currentPage, currentPage + 1);
        setDisplayList([...pageList]);
      }
    }
  }, [currentPage, totalPages]);

  const onClickHandler = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  return (
    <div className="pagination">
      {currentPage >= limit && (
        <>
          <div
            className="pagination--page pagination--page__border"
            onClick={onClickHandler}
            id={1}
          >
            1
          </div>
          <div className="pagination--page after" />
        </>
      )}
      {displayList.map((page, index) => (
        <div
          className={clsx("pagination--page", "pagination--page__border", {
            "pagination--page__active": page === currentPage
          })}
          key={index}
          onClick={onClickHandler}
          id={page}
        >
          {page}
        </div>
      ))}
      {currentPage - 1 <= totalPages - limit && (
        <>
          <div className="pagination--page before" />
          <div
            className="pagination--page pagination--page__border"
            onClick={onClickHandler}
            id={totalPages}
          >
            {totalPages}
          </div>
        </>
      )}
    </div>
  );
};

export default Pagination;
