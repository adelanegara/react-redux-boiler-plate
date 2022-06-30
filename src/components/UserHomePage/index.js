import React from "react";

const UserHomePage = () => {
  return (
    <div>
      {" "}
      <div className="row m-0 ">
        <div className="col-3 ">
          <div className="card border-0 m-5">
            <div className="card-body shadow p-3 mb-5">
              <p className="card-title filter-text">FILTERS</p>
              <input
                className="input form-control my-3"
                type="text"
                placeholder="Search"
              />
              <ul className="list-group">
                <li className="list-group-item">Sort Ascending</li>
                <li className="list-group-item">Sort Descending</li>
                <li className="list-group-item">Sort Rates</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9 ">
          <div className="row mt-5">
            <div className="col-4 ">
              <div className="ui link cards">
                <div className="card shadow-sm p-3 mb-5 bg-white ">
                  <div className="image">
                    {/* <img src={item.image} alt={item.id} /> */}
                  </div>
                  <div className="rate text-center">
                    <p> AVAILABLE </p>
                  </div>
                  <div className="content content-product">
                    <div className="category-text">
                      <span>category: sedan </span>
                    </div>
                    <div className="header">Toyota Vios</div>
                    <div className="category-text pb-2">
                      <span>20 pieces available </span>
                    </div>
                    <div className="form-group d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-sm btn-dark button-shop"
                      >
                        Book
                      </button>
                      {/* <Link
                      to={`/view/${item.id}`}
                      className="btn btn-sm btn-dark button-shop"
                    >
                      View
                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHomePage;
