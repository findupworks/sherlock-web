import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import classNames from "classnames";
import { PaginationVariant, PaginationEntrieOrientation } from "../../types";

export enum PaginationEntries {
  ten = 10,
  twenty = 20,
  fifty = 50,
  hundred = 100,
}

export interface IProps {
  variant?: PaginationVariant;
  entrieOrientation?: PaginationEntrieOrientation;
  currentPage: number;
  totalPages: number;
  totalEntries: number;
  entrieLabel?: string;
  showingLabel?: string;
  ofLabel?: string;
  toLabel?: string;
  onChangePage: (page: number) => void;
}

export const Pagination: React.FC<IProps> = ({
  variant,
  entrieOrientation = "down",
  currentPage = 1,
  totalPages,
  totalEntries,
  entrieLabel,
  showingLabel,
  ofLabel,
  toLabel,
  onChangePage,
  ...props
}) => {
  const [showEntries, setshowEntries] = useState<boolean>(false);

  const [entrie, setEntrie] = useState(PaginationEntries.ten);

  function changeEntries(entrie: PaginationEntries) {
    setEntrie(entrie);
    setshowEntries(false);
  }

  function getEntriesElement(entrieOrientation) {
    if (entrieOrientation === "down") {
      return (
        <div
          className={classNames(
            "absolute z-20 w-24 py-2 top-6 bg-white rounded-md shadow-xl transition duration-150 ease-out transform",
            {
              hidden: !showEntries,
              "scale-100 opacity-100": showEntries,
            }
          )}
        >
          <p
            onClick={() => changeEntries(PaginationEntries.ten)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.ten}
          </p>
          <p
            onClick={() => changeEntries(PaginationEntries.twenty)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.twenty}
          </p>
          <p
            onClick={() => changeEntries(PaginationEntries.fifty)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.fifty}
          </p>
          <p
            onClick={() => changeEntries(PaginationEntries.hundred)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.hundred}
          </p>
        </div>
      );
    } else {
      return (
        <div
          className={classNames(
            "absolute z-20 w-24 py-2 -top-28 bg-white rounded-md shadow-xl transition duration-150 ease-out transform",
            {
              hidden: !showEntries,
              "scale-100 opacity-100": showEntries,
            }
          )}
        >
          <p
            onClick={() => changeEntries(PaginationEntries.ten)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.ten}
          </p>
          <p
            onClick={() => changeEntries(PaginationEntries.twenty)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.twenty}
          </p>
          <p
            onClick={() => changeEntries(PaginationEntries.fifty)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.fifty}
          </p>
          <p
            onClick={() => changeEntries(PaginationEntries.hundred)}
            className="flex flex-row items-center text-gray-600 transition-colors duration-200 transform  hover:bg-gray-300"
          >
            {PaginationEntries.hundred}
          </p>
        </div>
      );
    }
  }

  function getPages() {
    return (
      <>
        {currentPage - 2 <= 0 || currentPage - 2 >= totalPages ? (
          ""
        ) : (
          <p className={`page-item 'active'} `}>
            <a
              onClick={() => onChangePage(currentPage - 2)}
              className={classNames(
                "cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
              )}
            >
              {currentPage - 2}
            </a>
          </p>
        )}

        {currentPage - 1 <= 0 || currentPage - 2 >= totalPages ? (
          ""
        ) : (
          <p className={`page-item 'active'} `}>
            <a
              onClick={() => onChangePage(currentPage - 1)}
              className={classNames(
                "cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
              )}
            >
              {currentPage - 1}
            </a>
          </p>
        )}

        {currentPage > totalPages ? (
          ""
        ) : (
          <p className={`page-item 'active'} `}>
            <a
              onClick={() => onChangePage(currentPage)}
              className={classNames(
                "cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium",
                {
                  "text-darkD2 bg-gray-50": true,
                }
              )}
            >
              {currentPage}
            </a>
          </p>
        )}

        {currentPage + 1 > totalPages ? (
          ""
        ) : (
          <p className={`page-item 'active'} `}>
            <a
              onClick={() => onChangePage(currentPage + 1)}
              className={classNames(
                "cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
              )}
            >
              {currentPage + 1}
            </a>
          </p>
        )}

        {currentPage + 2 > totalPages ? (
          ""
        ) : (
          <p className={`page-item 'active'} `}>
            <a
              onClick={() => onChangePage(currentPage + 2)}
              className={classNames(
                "cursor-pointer bg-white text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium"
              )}
            >
              {currentPage + 2}
            </a>
          </p>
        )}
      </>
    );
  }

  function getContent() {
    return (
      <div
        className="bg-white px-4 py-3 flex items-center justify-between sm:px-6 space-x-20"
        onClick={showEntries ? () => setshowEntries(!showEntries) : () => ""}
      >
        <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between0">
          <div className="flex flex-row relative">
            <p className="text-sm text-gray-700">
              {entrie} {entrieLabel ?? "entradas"}
            </p>
            <i
              className={`cursor-pointer fa-solid fa-caret-${entrieOrientation} text-primary pl-2 pt-1`}
              onClick={() => setshowEntries(!showEntries)}
            ></i>
            {getEntriesElement(entrieOrientation)}

            <p className="text-sm text-gray-700 pl-2">
              {showingLabel ?? "Exibindo"} {currentPage * entrie - entrie + 1} {toLabel ?? "a"} {currentPage * entrie}{" "}
              {ofLabel ?? "de"} {totalEntries} {entrieLabel ?? "entradas"}.
            </p>
          </div>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md -space-x-px" aria-label="Pagination">
            {currentPage <= 1 ? (
              ""
            ) : (
              <a
                onClick={() => onChangePage(currentPage - 1)}
                className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}

            {getPages()}

            {currentPage >= totalPages ? (
              ""
            ) : (
              <a
                onClick={() => onChangePage(currentPage + 1)}
                className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </nav>
        </div>
      </div>
    );
  }

  function getVertical() {
    return (
      <div
        className="bg-white px-4 py-3 flex flex-col items-center sm:px-6 gap-4"
        onClick={showEntries ? () => setshowEntries(!showEntries) : () => ""}
      >
        <div className="flex relative">
          <p className="text-sm text-gray-700">
            {entrie} {entrieLabel ?? "Entradas"}
          </p>
          <i
            className={`cursor-pointer fa-solid fa-caret-${entrieOrientation} text-primary pl-2`}
            onClick={() => setshowEntries(!showEntries)}
          ></i>
          {getEntriesElement(entrieOrientation)}
        </div>
        <div>
          <p className="text-sm text-gray-700">
            {showingLabel ?? "Exibindo"} {currentPage * entrie - entrie + 1} {toLabel ?? "a"} {currentPage * entrie}{" "}
            {ofLabel ?? "de"} {totalEntries} entries.
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md -space-x-px" aria-label="Pagination">
            {currentPage <= 1 ? (
              ""
            ) : (
              <a
                onClick={() => onChangePage(currentPage - 1)}
                className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}

            {getPages()}

            {currentPage >= totalPages ? (
              ""
            ) : (
              <a
                onClick={() => onChangePage(currentPage + 1)}
                className="cursor-pointer relative inline-flex items-center px-2 py-2 rounded-l-md bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}
          </nav>
        </div>
      </div>
    );
  }

  return "default" == variant ? getContent() : getVertical();
};
