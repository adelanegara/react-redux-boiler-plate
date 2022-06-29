const initialState = {
  userCart: [], //for updating updated product list
  productSortAsc: [], // for sort asc from products
};

export const whitelist = ["userCart"];

export const fileReducer = (state = initialState) => {
  return <div>fileReducer</div>;
};
