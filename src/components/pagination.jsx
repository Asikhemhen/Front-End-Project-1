import { React, useState } from "react";

const Pagination = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const data = props.filteredData;
  const totalPage = Math.ceil(data / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOFFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOFFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }

    const handleLastPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  };

  return <div></div>;
};

export default Pagination;
