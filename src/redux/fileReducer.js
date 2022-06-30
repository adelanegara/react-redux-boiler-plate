const initialState = {
  userAccount: [],
  listCar: [],
  booking: [],
  isLogin: false,
  carsOption: [
    {
      id: 1,
      name: "Toyota Vios",
      type: "Sedan",
      image: "https://source.unsplash.com/x06lguTO7Hg",
      quantity: 8,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 2,
      name: "Mercedes Benz C Class ",
      type: "Sedan",
      image: "https://source.unsplash.com/DvldeHcqNSE",
      quantity: 8,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 3,
      name: "Hyundai Staria ",
      type: "Mini Van",
      image: "https://source.unsplash.com/3mZNCwWnaFw",
      quantity: 8,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 4,
      name: "Volkswagen Tosca",
      type: "Mini Van",
      image: "https://source.unsplash.com/iSyUe2vyOAg",
      quantity: 3,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 5,
      name: "Cayman ",
      type: "Sport",
      image: "https://source.unsplash.com/TFyha8E8ofo",
      quantity: 2,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 6,
      name: "Mustang Orange",
      type: "sSedan",
      image: "https://source.unsplash.com/umd7qYV0uvM",
      quantity: 1,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 7,
      name: "Porsche Cayman",
      type: "Sport",
      image: "https://source.unsplash.com/lY2cIeXbywE",
      quantity: 2,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 8,
      name: " Toyota Land Cruiser",
      type: "SUV",
      image: "https://source.unsplash.com/yAf2NB7Om4c",
      quantity: 9,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 9,
      name: "Mustang Blue ",
      type: "Sport",
      image: "https://source.unsplash.com/YzCu-V0aKHA",
      quantity: 3,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
    {
      id: 10,
      name: "Ferrari Red",
      type: "Sport",
      image: "https://source.unsplash.com/wDDCGk7YjIA",
      quantity: 1,
      status: "available",
      startDate: "2022-06-27",
      endDate: "2022-06-27",
      startBooking: null,
      endBooking: null,
    },
  ],
};

export const whitelist = [
  "userAccout",
  "listCar",
  "booking",
  "isLogin",
  "carOption",
];

export const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        isLogin: false,
      };
    case "SET_USER_ACCOUNT":
      return {
        ...state,
        userAccount: action.payload,
      };
    default:
      return state;
  }
};
