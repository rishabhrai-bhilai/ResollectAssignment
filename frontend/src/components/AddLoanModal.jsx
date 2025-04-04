import { useState, useEffect } from "react";

function AddLoanModal({ isOpen, onClose, onSubmit, isUpdate = false, initialData = null }) {
  const [formData, setFormData] = useState({
    loanNo: "",
    loanType: "",
    borrower: "",
    borrowerAddress: "",
    coBorrower1Name: "",
    coBorrower1Address: "",
    currentDPD: "",
    sanctionAmount: "",
  });

  // Pre-populate form data when in update mode
  useEffect(() => {
    if (isUpdate && initialData) {
      setFormData({
        loanNo: initialData.loanNo || "",
        loanType: initialData.loanType || "",
        borrower: initialData.borrower || "",
        borrowerAddress: initialData.borrowerAddress || "",
        coBorrower1Name: initialData.coBorrower1Name || "",
        coBorrower1Address: initialData.coBorrower1Address || "",
        currentDPD: initialData.currentDPD?.toString() || "",
        sanctionAmount: initialData.sanctionAmount?.toString() || "",
      });
    }
  }, [isUpdate, initialData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanData = {
      loanNo: formData.loanNo,
      loanType: formData.loanType,
      borrower: formData.borrower,
      borrowerAddress: formData.borrowerAddress,
      coBorrower1Name: formData.coBorrower1Name,
      coBorrower1Address: formData.coBorrower1Address,
      currentDPD: parseInt(formData.currentDPD) || 0,
      sanctionAmount: parseInt(formData.sanctionAmount) || 0,
    };
    onSubmit(loanData);
    setFormData({
      loanNo: "",
      loanType: "",
      borrower: "",
      borrowerAddress: "",
      coBorrower1Name: "",
      coBorrower1Address: "",
      currentDPD: "",
      sanctionAmount: "",
    });
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}
      {/* Modal */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-base font-semibold">{isUpdate ? "Update Document" : "Add New Document"}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-700">Loan No</label>
            <input
              type="text"
              name="loanNo"
              value={formData.loanNo}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Loan Type</label>
            <input
              type="text"
              name="loanType"
              value={formData.loanType}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Borrower</label>
            <input
              type="text"
              name="borrower"
              value={formData.borrower}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Borrower Address</label>
            <input
              type="text"
              name="borrowerAddress"
              value={formData.borrowerAddress}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Co-Borrower 1 Name</label>
            <input
              type="text"
              name="coBorrower1Name"
              value={formData.coBorrower1Name}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Co-Borrower 1 Address</label>
            <input
              type="text"
              name="coBorrower1Address"
              value={formData.coBorrower1Address}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Current DPD</label>
            <input
              type="number"
              name="currentDPD"
              value={formData.currentDPD}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700">Sanction Amount</label>
            <input
              type="number"
              name="sanctionAmount"
              value={formData.sanctionAmount}
              onChange={handleInputChange}
              className="mt-1 block w-full border border-gray-300 rounded px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-1.5 rounded text-sm font-medium hover:bg-blue-700"
          >
            {isUpdate ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddLoanModal;