// src/data.js

// In-memory data store
let loans = [
  {
    id: 1,
    loanNo: "L2BU3247",
    loanType: "HOME LOAN",
    borrower: "Vedika Sachar",
    borrowerAddress: "83 Yogi Gari, Kadapa-058720",
    coBorrower1Name: "Divit Vora",
    coBorrower1Address: "24/543, Acharya Path Ongole-052360",
    currentDPD: 91,
    sanctionAmount: 19340688,
  },
  {
    id: 2,
    loanNo: "L2BU3243",
    loanType: "CAR LOAN",
    borrower: "Hrishita Agrawal",
    borrowerAddress: "86/622, Deo Path, Berhampore 841186",
    coBorrower1Name: "Mahika Tak",
    coBorrower1Address: "58 Tella Road, Sultan Pur Majra 919878",
    currentDPD: 100,
    sanctionAmount: 1842143,
  },
  {
    id: 3,
    loanNo: "L2BU3249",
    loanType: "PERSONAL LOAN",
    borrower: "Rahul Sharma",
    borrowerAddress: "123 Main Street, Mumbai-400001",
    coBorrower1Name: "Priya Patel",
    coBorrower1Address: "456 Park Avenue, Pune-411001",
    currentDPD: 0,
    sanctionAmount: 500000,
  },
  {
    id: 4,
    loanNo: "L2BU3250",
    loanType: "EDUCATION LOAN",
    borrower: "Aarav Desai",
    borrowerAddress: "789 Lake Road, Ahmedabad-380001",
    coBorrower1Name: "Isha Mehta",
    coBorrower1Address: "321 Ocean Drive, Surat-395001",
    currentDPD: 10,
    sanctionAmount: 1200000,
  },
  {
    id: 5,
    loanNo: "L2BU3251",
    loanType: "BUSINESS LOAN",
    borrower: "Neha Kapoor",
    borrowerAddress: "987 Business Park, Delhi-110001",
    coBorrower1Name: "Rajesh Verma",
    coBorrower1Address: "654 Market Street, Gurgaon-122001",
    currentDPD: 5,
    sanctionAmount: 3000000,
  },
  {
    id: 6,
    loanNo: "L2BU3252",
    loanType: "MORTGAGE LOAN",
    borrower: "Anjali Sharma",
    borrowerAddress: "567 Green Valley, Bangalore-560001",
    coBorrower1Name: "Rahul Jain",
    coBorrower1Address: "890 Blue Ridge, Hyderabad-500001",
    currentDPD: 20,
    sanctionAmount: 2500000,
  },
  {
    id: 7,
    loanNo: "L2BU3253",
    loanType: "HOME LOAN",
    borrower: "Amitabh Bachchan",
    borrowerAddress: "111 Juhu Beach, Mumbai-400016",
    coBorrower1Name: "Shweta Bachchan",
    coBorrower1Address: "222 Peddar Road, Mumbai-400026",
    currentDPD: 0,
    sanctionAmount: 5000000,
  },
  {
    id: 8,
    loanNo: "L2BU3254",
    loanType: "CAR LOAN",
    borrower: "Aamir Khan",
    borrowerAddress: "333 Bandra West, Mumbai-400050",
    coBorrower1Name: "Kiran Rao",
    coBorrower1Address: "444 Pali Hill, Mumbai-400050",
    currentDPD: 5,
    sanctionAmount: 1500000,
  },
  {
    id: 9,
    loanNo: "L2BU3255",
    loanType: "PERSONAL LOAN",
    borrower: "Salman Khan",
    borrowerAddress: "555 Carter Road, Bandra West, Mumbai-400050",
    coBorrower1Name: "Kareena Kapoor",
    coBorrower1Address: "666 Juhu Tara Road, Mumbai-400016",
    currentDPD: 10,
    sanctionAmount: 2000000,
  },
  {
    id: 10,
    loanNo: "L2BU3256",
    loanType: "EDUCATION LOAN",
    borrower: "Alia Bhatt",
    borrowerAddress: "777 Powai Lake, Mumbai-400076",
    coBorrower1Name: "Ranbir Kapoor",
    coBorrower1Address: "888 Juhu Beach, Mumbai-400016",
    currentDPD: 0,
    sanctionAmount: 1000000,
  },
  {
    id: 11,
    loanNo: "L2BU3257",
    loanType: "BUSINESS LOAN",
    borrower: "Kangana Ranaut",
    borrowerAddress: "999 Andheri East, Mumbai-400059",
    coBorrower1Name: "Ranveer Singh",
    coBorrower1Address: "1010 Juhu Beach, Mumbai-400016",
    currentDPD: 15,
    sanctionAmount: 4000000,
  },
  {
    id: 12,
    loanNo: "L2BU3258",
    loanType: "MORTGAGE LOAN",
    borrower: "Deepika Padukone",
    borrowerAddress: "2020 Bandra Kurla Complex, Mumbai-400055",
    coBorrower1Name: "Ranveer Singh",
    coBorrower1Address: "3030 Juhu Beach, Mumbai-400016",
    currentDPD: 0,
    sanctionAmount: 3500000,
  },
  {
    id: 13,
    loanNo: "L2BU3259",
    loanType: "HOME LOAN",
    borrower: "Akshay Kumar",
    borrowerAddress: "4040 Juhu Beach, Mumbai-400016",
    coBorrower1Name: "Twinkle Khanna",
    coBorrower1Address: "5050 Bandra West, Mumbai-400050",
    currentDPD: 0,
    sanctionAmount: 6000000,
  },
  {
    id: 14,
    loanNo: "L2BU3260",
    loanType: "CAR LOAN",
    borrower: "Shah Rukh Khan",
    borrowerAddress: "6060 Bandra West, Mumbai-400050",
    coBorrower1Name: "Gauri Khan",
    coBorrower1Address: "7070 Juhu Beach, Mumbai-400016",
    currentDPD: 5,
    sanctionAmount: 2000000,
  },
  {
    id: 15,
    loanNo: "L2BU3261",
    loanType: "PERSONAL LOAN",
    borrower: "Kareena Kapoor",
    borrowerAddress: "8080 Juhu Beach, Mumbai-400016",
    coBorrower1Name: "Saif Ali Khan",
    coBorrower1Address: "9090 Bandra West, Mumbai-400050",
    currentDPD: 0,
    sanctionAmount: 1800000,
  },
  {
    id: 16,
    loanNo: "L2BU3262",
    loanType: "EDUCATION LOAN",
    borrower: "Ranbir Kapoor",
    borrowerAddress: "1010 Bandra West, Mumbai-400050",
    coBorrower1Name: "Alia Bhatt",
    coBorrower1Address: "1111 Powai Lake, Mumbai-400076",
    currentDPD: 10,
    sanctionAmount: 1200000,
  },
  {
    id: 17,
    loanNo: "L2BU3263",
    loanType: "BUSINESS LOAN",
    borrower: "Ranveer Singh",
    borrowerAddress: "1212 Juhu Beach, Mumbai-400016",
    coBorrower1Name: "Deepika Padukone",
    coBorrower1Address: "1313 Bandra Kurla Complex, Mumbai-400055",
    currentDPD: 0,
    sanctionAmount: 5000000,
  },
  {
    id: 18,
    loanNo: "L2BU3264",
    loanType: "MORTGAGE LOAN",
    borrower: "Twinkle Khanna",
    borrowerAddress: "1414 Bandra West, Mumbai-400050",
    coBorrower1Name: "Akshay Kumar",
    coBorrower1Address: "1515 Juhu Beach, Mumbai-400016",
    currentDPD: 5,
    sanctionAmount: 4500000,
  },
  {
    id: 19,
    loanNo: "L2BU3265",
    loanType: "HOME LOAN",
    borrower: "Gauri Khan",
    borrowerAddress: "1616 Juhu Beach, Mumbai-400016",
    coBorrower1Name: "Shah Rukh Khan",
    coBorrower1Address: "1717 Bandra West, Mumbai-400050",
    currentDPD: 0,
    sanctionAmount: 7000000,
  },
  {
    id: 20,
    loanNo: "L2BU3266",
    loanType: "CAR LOAN",
    borrower: "Saif Ali Khan",
    borrowerAddress: "1818 Bandra West, Mumbai-400050",
    coBorrower1Name: "Kareena Kapoor",
    coBorrower1Address: "1919 Juhu Beach, Mumbai-400016",
    currentDPD: 10,
    sanctionAmount: 2200000,
  }
];

// CRUD Operations
export const getLoans = () => {
  return [...loans]; // Return a copy to prevent direct manipulation
};

export const addLoan = (newLoan) => {
  newLoan.id = loans.length ? Math.max(...loans.map((loan) => loan.id)) + 1 : 1;
  loans.push(newLoan);
  return newLoan;
};

export const updateLoan = (id, updatedLoan) => {
  const index = loans.findIndex((loan) => loan.id === id);
  if (index !== -1) {
    loans[index] = { ...loans[index], ...updatedLoan };
    return loans[index];
  }
  return null;
};

export const deleteLoan = (id) => {
  const initialLength = loans.length;
  loans = loans.filter((loan) => loan.id !== id);
  return initialLength > loans.length;
};