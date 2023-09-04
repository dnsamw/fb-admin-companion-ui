"use client";
import React from "react";

type Props = {};

export const Pagination = ({
  itemsPerPage,
  currentPage,
  setCurrentPage,
  totalItems,
  changePage,
}: any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      if (newPage===1) {
        changePage(totalItems);
      }else{
        changePage(totalItems-((newPage-1) * itemsPerPage));
      }
     
    }
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  const displayedPageNumbers = getPageNumbers();

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const renderPageNumbers = () => {
    const visiblePageNumbers = [];
    const maxVisiblePages = 5; // Number of visible page numbers

    if (totalPages <= maxVisiblePages) {
      return displayedPageNumbers;
    }

    if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
      return displayedPageNumbers.slice(0, maxVisiblePages);
    }

    if (currentPage > totalPages - Math.floor(maxVisiblePages / 2)) {
      return displayedPageNumbers.slice(totalPages - maxVisiblePages);
    }

    const startPage = currentPage - Math.floor(maxVisiblePages / 2);
    const endPage = currentPage + Math.floor(maxVisiblePages / 2);

    return displayedPageNumbers.slice(startPage - 1, endPage);
  };

  return (
    <div className="container mx-auto px-4 mt-5">
      <nav className="flex flex-row flex-nowrap justify-between md:justify-center items-center">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center 
                        px-3 h-8 mr-5 leading-tight text-gray-500
                         bg-white border border-gray-300 rounded-l-lg
                          hover:bg-gray-100 hover:text-gray-700
                           dark:bg-gray-800 dark:border-gray-700
                            dark:text-gray-400 dark:hover:bg-gray-700
                             dark:hover:text-white cursor-pointer"
        >
          Previous
        </button>

        {renderPageNumbers().map((pageNumber, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(pageNumber)}
            className={` flex w-10 h-10 mx-1 justify-center items-center rounded-full border
                  ${
                    pageNumber === currentPage
                      ? `border border-black bg-black text-white pointer-events-none`
                      : "border-gray-200 bg-white text-black hover:border-gray-300 cursor-pointer"
                  }
                    `}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center  
                     px-3 h-8 ml-5 leading-tight text-gray-500
                   bg-white border border-gray-300 rounded-r-lg
                  hover:bg-gray-100 hover:text-gray-700
                 dark:bg-gray-800 dark:border-gray-700
                 dark:text-gray-400 dark:hover:bg-gray-700
                 dark:hover:text-white cursor-pointer"
        >
          Next
        </button>
      </nav>
    </div>
  );
};
