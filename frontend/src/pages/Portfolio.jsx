import { useState, useEffect, useMemo } from "react";
import { getLoans, addLoan, updateLoan, deleteLoan } from "../data.js";
import AddLoanModal from "../components/AddLoanModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faPlus, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Portfolio() {
  const [loans, setLoans] = useState([]);
  const [filteredLoans, setFilteredLoans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTab, setSelectedTab] = useState("ALL");
  const [groupBy, setGroupBy] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLoans, setSelectedLoans] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [fields, setFields] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [loanToUpdate, setLoanToUpdate] = useState(null);
  const [expandedRows, setExpandedRows] = useState({});
  const [columnFilters, setColumnFilters] = useState({});
  const [tempFilters, setTempFilters] = useState({});
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    try {
      const fetchedLoans = getLoans();
      setLoans(fetchedLoans);
      setFilteredLoans(fetchedLoans);

      if (fetchedLoans.length > 0) {
        const loanFields = Object.keys(fetchedLoans[0]).filter((key) => key !== "id");
        setFields(loanFields);
      }

      setLoading(false);
    } catch (err) {
      setError("Failed to load loans.");
      setLoading(false);
    }
  }, []);

  const uniqueValues = useMemo(() => {
    const values = {};
    loans.forEach((item) => {
      fields.forEach((key) => {
        if (!values[key]) values[key] = new Set();
        values[key].add(item[key]);
      });
    });
    return Object.fromEntries(Object.entries(values).map(([key, set]) => [key, [...set]]));
  }, [loans, fields]);

  const filteredData = useMemo(() => {
    let data = loans.filter((row) =>
      fields.some((field) =>
        String(row[field]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    data = data.filter((row) =>
      Object.entries(columnFilters).every(([key, selectedValues]) => {
        if (!selectedValues || selectedValues.length === 0) return true;
        return selectedValues.includes(row[key]);
      })
    );

    if (selectedTab !== "ALL") {
      // Add custom filtering logic if needed
    }

    if (groupBy) {
      const grouped = data.reduce((acc, loan) => {
        const key = loan[groupBy];
        if (!acc[key]) acc[key] = [];
        acc[key].push(loan);
        return acc;
      }, {});
      return grouped;
    }

    if (sortConfig.key) {
      data.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "ascending" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "ascending" ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [loans, searchTerm, selectedTab, groupBy, sortConfig, columnFilters, fields]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    setCurrentPage(1);
  };

  const handleGroupBy = (e) => {
    const value = e.target.value;
    setGroupBy(value);
    setCurrentPage(1);
  };

  const handleSelectLoan = (loanId) => {
    setSelectedLoans((prev) =>
      prev.includes(loanId)
        ? prev.filter((id) => id !== loanId)
        : [...prev, loanId]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      const allLoanIds = paginatedLoans.map((item) => item.loan.id);
      setSelectedLoans(allLoanIds);
    } else {
      setSelectedLoans([]);
    }
  };

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setCurrentPage(1);
  };

  const formatFieldName = (field) => {
    return field
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  const handleAddLoan = (newLoan) => {
    if (isUpdateMode) {
      updateLoan(loanToUpdate.id, newLoan);
    } else {
      addLoan(newLoan);
    }
    const updatedLoans = getLoans();
    setLoans(updatedLoans);
    setFilteredLoans(updatedLoans);
    setIsModalOpen(false);
    setIsUpdateMode(false);
    setLoanToUpdate(null);
  };

  const handleDeleteLoan = (loanId) => {
    deleteLoan(loanId);
    const updatedLoans = getLoans();
    setLoans(updatedLoans);
    setFilteredLoans(updatedLoans);
    setSelectedLoans((prev) => prev.filter((id) => id !== loanId));
  };

  const handleUpdateLoan = (loan) => {
    setIsUpdateMode(true);
    setLoanToUpdate(loan);
    setIsModalOpen(true);
  };

  const toggleAccordion = (rowId) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const handleCheckboxChange = (column, value) => {
    setColumnFilters((prev) => {
      const newFilters = { ...prev };
      if (!newFilters[column]) newFilters[column] = [];
      if (newFilters[column].includes(value)) {
        newFilters[column] = newFilters[column].filter((v) => v !== value);
      } else {
        newFilters[column] = [...newFilters[column], value];
      }
      return newFilters;
    });
  };

  const handleTempCheckboxChange = (column, value) => {
    setTempFilters((prev) => {
      const newFilters = { ...prev };
      if (!newFilters[column]) newFilters[column] = [];
      if (newFilters[column].includes(value)) {
        newFilters[column] = newFilters[column].filter((v) => v !== value);
      } else {
        newFilters[column] = [...newFilters[column], value];
      }
      return newFilters;
    });
  };

  const applyMobileFilters = () => {
    setColumnFilters(tempFilters);
    setIsMobileFilterOpen(false);
    setSelectedColumn(null);
  };

  const openMobileFilter = () => {
    setIsMobileFilterOpen(true);
    setTempFilters({ ...columnFilters });
    setSelectedColumn(null); // Fixed typo here
  };

  const closeMobileFilter = () => {
    setIsMobileFilterOpen(false);
    setTempFilters({});
    setSelectedColumn(null);
  };

  const clearAllFilters = () => {
    setColumnFilters({});
    setTempFilters({});
    setSelectedColumn(null);
  };

  const handleColumnSelect = (column) => {
    setSelectedColumn(column === selectedColumn ? null : column);
  };

  const flattenGroupedData = () => {
    if (Array.isArray(filteredData)) {
      return filteredData.map((loan) => ({ loan, group: null }));
    }

    const flattened = [];
    Object.keys(filteredData).forEach((group) => {
      filteredData[group].forEach((loan) => {
        flattened.push({ loan, group });
      });
    });
    return flattened;
  };

  const flattenedLoans = flattenGroupedData();
  const totalItems = flattenedLoans.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedLoans = flattenedLoans.slice(startIndex, endIndex);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setSelectedLoans([]);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setSelectedLoans([]);
    }
  };

  if (loading) {
    return (
      <div className="p-4 sm:p-6">
        <div className="space-y-4 sm:hidden mt-4">
          {Array(5).fill().map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 animate-pulse rounded-lg"></div>
          ))}
        </div>
        <div className="hidden sm:block mt-4 bg-white rounded-lg shadow-lg overflow-x-auto">
          <div className="space-y-2 p-4">
            {Array(5).fill().map((_, i) => (
              <div key={i} className="h-12 bg-gray-200 animate-pulse rounded-md"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-6 text-red-500">
        <div className="mt-4 text-center text-red-500 p-4 bg-red-50 rounded-lg border border-red-200">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-1 pt-8 md:pt-4">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-xl sm:text-2xl font-bold">PORTFOLIO</h1>
        <div className="flex items-center space-x-2">
          
          <button
            onClick={clearAllFilters}
            className=" sm:block  text-red-500 text-sm font-medium hover:text-red-600 transition-colors"
          >
            Clear Filter
          </button>
        </div>
      </div>

      <div className="hidden md:block flex space-x-2 mb-4 overflow-x-auto">
        {[
          "ALL",
          "Pre Sarfaesi",
          "NPA",
          "13(3) Responses",
          "Symbolic Possession",
          "DM Order",
          "Physical Possessions",
          "Auctions",
        ].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-lg border-b-2 transition-colors whitespace-nowrap ${
              selectedTab === tab
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent text-gray-600 border-transparent hover:bg-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0 sm:space-x-2">
        <input
          type="text"
          placeholder="Search Loans"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-blue-200 rounded px-3 py-4 md:py-1 text-xs sm:text-sm w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <select
            value={groupBy}
            onChange={handleGroupBy}
            className=" sm:block border border-blue-200 rounded px-3 py-4 md:py-1 text-xs sm:text-sm text-gray-600 focus:outline-none w-full sm:w-auto"
          >
            <option value="">Group By...</option>
            {fields.map((field) => (
              <option key={field} value={field}>
                {formatFieldName(field)}
              </option>
            ))}
          </select>
          <button className="hidden md:flex bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm font-medium items-center justify-center w-full sm:w-auto">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            <span>More Filters</span>
          </button>
          <button
            onClick={() => {
              setIsUpdateMode(false);
              setLoanToUpdate(null);
              setIsModalOpen(true);
            }}
            className="hidden md:flex bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm font-medium items-center justify-center w-full sm:w-auto"
          >
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span>Add Item</span>
          </button>
        </div>
      </div>

      <AddLoanModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setIsUpdateMode(false);
          setLoanToUpdate(null);
        }}
        onSubmit={handleAddLoan}
        isUpdate={isUpdateMode}
        initialData={loanToUpdate}
      />

      <div className="hidden md:block text-xs sm:text-sm text-gray-600 mb-3 bg-white border border-gray-300 rounded-lg px-3 py-1.5 sm:px-4 sm:py-2">
        {selectedLoans.length} loans selected
      </div>

      <div className=" md:border bg-blue-50 md:bg-gray-50 md:border-gray-300 md:rounded-lg md:shadow">
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full bg-blue-50 md:bg-gray-50">
            <thead>
              <tr>
                <th className="px-4 py-2 md:px-2 md:py-1 text-left border-b border-gray-300 text-xs md:text-[10px] text-gray-600">
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      paginatedLoans.length > 0 &&
                      paginatedLoans.every((item) => selectedLoans.includes(item.loan.id))
                    }
                  />
                </th>
                {fields.map((field) => (
                  <th
                    key={field}
                    className="px-4 py-2 md:px-2 md:py-1 text-left border-b border-gray-300 text-xs md:text-[10px] text-gray-600"
                  >
                    <div className="flex items-center">
                      {formatFieldName(field)}
                      <button onClick={() => handleSort(field)} className="ml-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="size-4 md:size-3 text-gray-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                ))}
                <th className="px-4 py-2 md:px-2 md:py-1 text-left border-b border-gray-300 text-xs md:text-[10px] text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedLoans.length > 0 ? (
                paginatedLoans.map((item, index) => {
                  const { loan, group } = item;
                  const showGroupHeader =
                    group &&
                    (index === 0 || paginatedLoans[index - 1].group !== group);

                  return (
                    <>
                      {showGroupHeader && (
                        <tr key={`group-${group}`}>
                          <td
                            colSpan={fields.length + 2}
                            className="px-4 py-2 md:px-2 md:py-1 font-bold text-xs md:text-[10px] text-gray-600 bg-gray-100"
                          >
                            {group}
                          </td>
                        </tr>
                      )}
                      <tr key={loan.id} className="border-t border-gray-300">
                        <td className="px-4 py-2 md:px-2 md:py-1">
                          <input
                            type="checkbox"
                            checked={selectedLoans.includes(loan.id)}
                            onChange={() => handleSelectLoan(loan.id)}
                          />
                        </td>
                        {fields.map((field) => (
                          <td key={field} className="px-4 py-2 md:px-2 md:py-1 text-xs md:text-[10px] text-gray-600">
                            {field === "sanctionAmount"
                              ? `₹ ${loan[field].toLocaleString()}`
                              : loan[field]}
                          </td>
                        ))}
                        <td className="px-4 py-2 md:px-2 md:py-1 text-xs md:text-[10px] text-gray-600">
                          {selectedLoans.includes(loan.id) && (
                            <div className="flex space-x-2 md:space-x-1">
                              <button
                                onClick={() => handleUpdateLoan(loan)}
                                className="text-blue-600 hover:text-blue-800"
                                title="Update"
                              >
                                <svg
                                  className="w-4 h-4 md:w-3 md:h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l9.414-9.414z"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDeleteLoan(loan.id)}
                                className="text-red-600 hover:text-red-800"
                                title="Delete"
                              >
                                <svg
                                  className="w-4 h-4 md:w-3 md:h-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4M3 7h18"
                                  />
                                </svg>
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={fields.length + 2}
                    className="px-4 py-2 md:px-2 md:py-1 text-center text-xs md:text-[10px] text-gray-600"
                  >
                    No loans found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="block bg-blue-50 sm:hidden space-y-4">
          {paginatedLoans.length > 0 ? (
            paginatedLoans.map((item, index) => {
              const { loan, group } = item;
              const showGroupHeader =
                group &&
                (index === 0 || paginatedLoans[index - 1].group !== group);

              const getBadgeColor = (loanType) => {
                switch (loanType.toLowerCase()) {
                  case "home loan":
                    return "bg-blue-100 text-blue-800";
                  case "car loan":
                    return "bg-purple-100 text-purple-800";
                  case "personal loan":
                    return "bg-green-100 text-green-800";
                  case "education loan":
                    return "bg-yellow-100 text-yellow-800";
                  case "business loan":
                    return "bg-red-100 text-red-800";
                  case "mortgage loan":
                    return "bg-indigo-100 text-indigo-800";
                  default:
                    return "bg-gray-100 text-gray-800";
                }
              };

              return (
                <div key={loan.id}>
                  {showGroupHeader && (
                    <div className="font-bold text-xs text-gray-600 bg-gray-100 p-2 rounded mb-2">
                      {group}
                    </div>
                  )}
                  <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h3 className="text-sm font-semibold text-gray-900">{loan.loanNo}</h3>
                        <div className="flex items-center space-x-2">
                          <p className="text-xs text-gray-600">{loan.borrower}</p>
                          <span
                            className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${getBadgeColor(
                              loan.loanType
                            )}`}
                          >
                            {loan.loanType}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedLoans.includes(loan.id)}
                          onChange={() => handleSelectLoan(loan.id)}
                        />
                        {selectedLoans.includes(loan.id) && (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleUpdateLoan(loan)}
                              className="text-blue-600 hover:text-blue-800"
                              title="Update"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-2.828 0l-1.414-1.414a2 2 0 010-2.828l9.414-9.414z"
                                />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeleteLoan(loan.id)}
                              className="text-red-600 hover:text-red-800"
                              title="Delete"
                            >
                              <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4M3 7h18"
                                />
                              </svg>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                    {expandedRows[index] && (
                      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-700">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="grid grid-cols-1 gap-4">
                            {fields.map((field) => (
                              <div key={field}>
                                <span className="font-semibold text-gray-900">{formatFieldName(field)}:</span>{" "}
                                {field === "sanctionAmount"
                                  ? `₹ ${loan[field].toLocaleString()}`
                                  : loan[field]}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="mt-3 flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors duration-200 focus:outline-none"
                      aria-label={expandedRows[index] ? "Hide details" : "Show details"}
                    >
                      <FontAwesomeIcon
                        icon={expandedRows[index] ? faChevronUp : faChevronDown}
                        className="mr-1"
                      />
                      {expandedRows[index] ? "Hide Details" : "Show Details"}
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-xs text-gray-600 p-4">
              No loans found.
            </div>
          )}
          <div className="fixed bottom-4 right-4 sm:hidden flex space-x-3">
            <button
              onClick={openMobileFilter}
              className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
              aria-label="Open filters"
            >
              <FontAwesomeIcon icon={faFilter} className="mr-2" />
              Filter
            </button>
            <button
              onClick={() => {
                setIsUpdateMode(false);
                setLoanToUpdate(null);
                setIsModalOpen(true);
              }}
              className="bg-violet-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center"
              aria-label="Add item"
            >
              <FontAwesomeIcon icon={faPlus} className="mr-2" />
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="pb-16 md:pb-0 flex flex-col sm:flex-row sm:justify-between mt-4 space-y-2 sm:space-y-0">
        <p className="text-xs text-gray-600 text-center sm:text-left">
          Total {totalItems} row(s). Page {currentPage} of {totalPages}
        </p>
        <div className="flex justify-center sm:justify-end space-x-2">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 border border-gray-300 rounded text-xs text-gray-600 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"
            }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages || totalPages === 0}
            className={`px-3 py-1 border border-gray-300 rounded text-xs text-gray-600 ${
              currentPage === totalPages || totalPages === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {isMobileFilterOpen && window.innerWidth < 640 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-end">
          <div className="bg-white w-full max-h-[90%] rounded-t-lg shadow-lg p-4 overflow-y-auto scrollbar-hidden">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                onClick={clearAllFilters}
                className="text-red-500 text-sm font-medium hover:text-red-600"
              >
                CLEAR ALL
              </button>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-2">
                {fields.map((key) => (
                  <button
                    key={key}
                    onClick={() => handleColumnSelect(key)}
                    className={`w-full text-left px-4 py-2 mb-2 rounded-md text-sm font-medium ${
                      selectedColumn === key
                        ? "bg-blue-100 text-blue-800 border border-blue-300"
                        : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {formatFieldName(key)}
                  </button>
                ))}
              </div>
              <div className="w-1/2 pl-2">
                {selectedColumn && uniqueValues[selectedColumn] && (
                  <div className="space-y-2 max-h-60 overflow-y-auto scrollbar-hidden">
                    {uniqueValues[selectedColumn].map((value) => (
                      <label
                        key={value}
                        className="flex items-center px-2 py-2 hover:bg-gray-100 border-b border-gray-200"
                      >
                        <input
                          type="checkbox"
                          className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
                          checked={tempFilters[selectedColumn]?.includes(value) || false}
                          onChange={() => handleTempCheckboxChange(selectedColumn, value)}
                        />
                        <span className="text-sm text-gray-700">{value}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center border-t border-gray-200 pt-4">
              <button
                onClick={closeMobileFilter}
                className="text-gray-600 text-sm font-medium hover:text-gray-800"
              >
                CLOSE
              </button>
              <button
                onClick={applyMobileFilters}
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                APPLY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Portfolio;