const KEYS = {
  employees: 'employees',
  employeeId: 'employeeId',
};

export const getDepartmentCollection = () => [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];

export const getUserViews = () => [

 { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'Accounting' },
  { id: '4', title: 'HR' },
];




export function insertEmployee(data) {
  let employees = getAllEmployees();
  data['id'] = generateEmployeeId();
  employees.push(data);
  localStorage.setItem(KEYS.employees, JSON.stringify(employees));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.employeeId) == null) localStorage.setItem(KEYS.employeeId, '0');
  var id = parseInt(localStorage.getItem(KEYS.employeeId));
  localStorage.setItem(KEYS.employeeId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.employees) == null)
    localStorage.setItem(KEYS.employees, JSON.stringify([]));
  let employees = JSON.parse(localStorage.getItem(KEYS.employees));
  //map departmentID to department title
  let departments = getDepartmentCollection();
  return employees.map(x => ({
    ...x,
    department: departments[x.departmentId - 1].title,
  }));
}



export const employees = async ({}) => {
  var id = await timeout(5000);
  console.log(id);
  clearTimeout();

  return {
    data: [
      {
        fullName: 'John Doe 1',
        imported: 'Black Gucci Jacket',
        expired: 'Tops and Casual',
        condition: '55 left',
        id: '1',
        _id: '1',
      },
      {
        fullName: 'John Doe 1',
        imported: 'Black Gucci Jacket',
        expired: 'Tops and Casual',
        condition: '55 left',
        id: '2',
        _id: '2',
      },
      {
        fullName: 'John Doe 1',
        imported: 'Black Gucci Jacket',
        expired: 'Tops and Casual',
        condition: '55 left',
        id: '3',
        _id: '3',
      },

      // {
      //   fullName: 'John Doe 6',
      //   email: 'doe@gmail.com',
      //   mobile: '1224142412',
      //   department: 'dpt',
      //   id: '1sd',
      // },
      // {
      //   fullName: 'John Doe 7',
      //   email: 'doe@gmail.com',
      //   mobile: '1224142412',
      //   department: 'dpt',
      //   id: '1sd',
      // },
      // {
      //   fullName: 'John Doe 8',
      //   email: 'doe@gmail.com',
      //   mobile: '1224142412',
      //   department: 'dpt',
      //   id: '1sd',
      // },
      // {
      //   fullName: 'John Doe 9',
      //   email: 'doe@gmail.com',
      //   mobile: '1224142412',
      //   department: 'dpt',
      //   id: '1sd',
      // },
      // {
      //   fullName: 'John Doe 10',
      //   email: 'doe@gmail.com',
      //   mobile: '1224142412',
      //   department: 'dpt',
      //   id: '1sd',
      // },
    ],
  };
};


export const getUsers = async ({}) => {
  var id = await timeout(5000);
  console.log(id);
  clearTimeout();

  return {
    data: [
      {
        fullName: 'John Doe 1',
        status: 'expired',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "bungalow",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '1',
        _id: '1',
      },

      {
        fullName: 'John Doe 1',
        status: 'Active Rents',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "bungalow",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '2',
        _id: '2',
      },

      {
        fullName: 'John Doe 1',
        status: 'Black Gucci Jacket',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        leaseYear: "2 years",
        typeofApartment: "bungalow",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        id: '2',
        _id: '2',
      },

      {
        fullName: 'John Doe 1',
        status: 'Active',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "bungalow",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '3',
        _id: '3',
      },

      {
        fullName: 'Pelemo Samson',
        status: 'expired',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "bungalow",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '4',
        _id: '4',
      },


      {
        fullName: 'John Doe 1',
        status: 'Active',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "Duplex",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '5',
        _id: '5',
      },

      {
        fullName: 'John Doe 1',
        status: 'expired',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "2 bedroom",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '6',
        _id: '6',
      },

      {
        fullName: 'jonny sunday',
        status: 'Active',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "3 bedroom",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '7',
        _id: '7',
      },

      {
        fullName: 'Reachel Adeyemo',
        status: 'expired',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "8 Bedroom",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '8',
        _id: '8',
      },

      {
        fullName: 'John Doe 1',
        status: 'Active',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "10 Bedroom",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '9',
        _id: '9',
      },

      {
        fullName: 'John Doe 1',
        status: 'expired',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "bungalow",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '10',
        _id: '10',
      },
      {
        fullName: 'John Doe 1',
        status: 'expired',
        dateEntered: '20/05/2022',
        expiringDate: '25/09/2023',
        email: "sundayezekiel83@gmail.com",
        typeofApartment: "bungalow",
        location: "off no 24 idumota lagos",
        phoneNo: "0987678278028",
        leaseYear: "2 years",
        id: '11',
        _id: '11',
      },
    
    ],
  };
};

function timeout(delay) {
  return new Promise(res => setTimeout(res, delay));
}
