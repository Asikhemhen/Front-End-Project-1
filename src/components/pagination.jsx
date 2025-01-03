import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Pagination = (props) => {
  const [goToPage, setGoToPage] = useState("");
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      props.setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "auto" }); // Scroll to top
    }
  };

  const handleGoToPage = () => {
    const page = parseInt(goToPage, 10);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      props.setCurrentPage(page);
      setGoToPage("");
      window.scrollTo({ top: 0, behavior: "auto" }); // Scroll to top
    }
  };

  const PageButtons = (props) => {
    return (
      <button
        key={props.key}
        disabled={props.currentPage === 1}
        onClick={props.handleClick}
        className={`h-9 w-9 ml-2 mt-2 ${props.text} ${props.bg}
        rounded-md`}
      >
        {props.pageNo}
      </button>
    );
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    const maxButtons = 5; // Number of buttons to show around the current page

    let startPage = Math.max(props.currentPage - Math.floor(maxButtons / 2), 1);
    let endPage = Math.min(startPage + maxButtons - 1, totalPages);

    if (endPage - startPage + 1 < maxButtons) {
      startPage = Math.max(endPage - maxButtons + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <PageButtons
          key={i}
          handleClick={() => handlePageChange(i)}
          pageNo={i}
          text={props.currentPage === i ? "text-white" : "text-indigo-950"}
          bg={props.currentPage === i ? "bg-indigo-950" : "bg-stone-200"}
        />
      );
    }

    if (startPage > 1) {
      pageNumbers.unshift(<PageButtons key={"elipse left"} pageNo={"..."} />);
      pageNumbers.unshift(
        <PageButtons
          key={1}
          handleClick={() => handlePageChange(1)}
          pageNo={1}
          text={props.currentPage === 1 ? "text-white" : "text-indigo-950"}
          bg={props.currentPage === 1 ? "bg-indigo-950" : "bg-stone-200"}
        />
      );
    }

    if (endPage < totalPages) {
      pageNumbers.push(<PageButtons key={"elllipse right"} pageNo={"..."} />);
      pageNumbers.push(
        <PageButtons
          key={totalPages}
          handleClick={() => handlePageChange(totalPages)}
          pageNo={totalPages}
          text={
            props.currentPage === totalPages ? "text-white" : "text-indigo-950"
          }
          bg={
            props.currentPage === totalPages ? "bg-indigo-950" : "bg-stone-200"
          }
        />
      );
    }

    return pageNumbers;
  };

  const [largeScreen, setLargeScreen] = useState(false);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });

  useEffect(() => {
    if (isLargeScreen !== largeScreen) {
      setLargeScreen(isLargeScreen);

      if (props.currentPage > totalPages) {
        {
          handlePageChange(totalPages - 1);
        }
      }
    }
  }, [largeScreen, isLargeScreen]);

  if (props.currentPage > totalPages) {
    handlePageChange(totalPages - 1);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-2 lg:gap-9 lg:flex-row mt-10">
      <div>
        <PageButtons
          key={"<"}
          handleClick={() => handlePageChange(props.currentPage - 1)}
          pageNo={"<"}
          text={
            props.currentPage === 1
              ? "bg-stone-200 opacity-40 cursor-not-allowed"
              : "bg-stone-200  opacity-100"
          }
        />
        {renderPageNumbers()}
        <PageButtons
          key={">"}
          handleClick={() => handlePageChange(props.currentPage + 1)}
          pageNo={">"}
          text={
            props.currentPage === totalPages
              ? "bg-stone-200 opacity-40 cursor-not-allowed"
              : "bg-stone-200  opacity-100"
          }
        />
      </div>
      <div className="flex justify-center items-center gap-2 pt-1">
        <label>Go to page</label>
        <input
          type="text"
          className="h-9 w-9 bg-stone-200 rounded-md text-center focus:ring-1 focus:ring-indigo-900 focus:outline-none"
          value={goToPage}
          onChange={(e) => setGoToPage(e.target.value)}
        />
        <label>{"/" + totalPages}</label>
        <button
          className="h-9 w-auto px-3 bg-indigo-950 text-white text-sm rounded-md hover:bg-indigo-900"
          onClick={handleGoToPage}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Pagination;
