import React from "react";
import { connect } from "react-redux";

const UserHomePage = ({ carsOption }) => {
  return (
    <div>
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
                <li className="list-group-item">Sort by Type</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9 ">
          <div className="row mt-5">
            {carsOption.map((item, index) => {
              return (
                <>
                  <div className="col-4  " key={index}>
                    <div className="ui link cards">
                      <div className="card shadow-sm p-3 mb-5 bg-white ">
                        <div className="image">
                          <img src={item.image} alt={item.id} />
                        </div>
                        <div className="rate text-center">
                          <p> {item.status} </p>
                        </div>
                        <div className="content content-product">
                          <div className="category-text">
                            <span>{item.type} </span>
                          </div>
                          <div className="header">{item.name}</div>
                          <div className="category-text pb-2">
                            <span>{item.quantity} available </span>
                          </div>
                          <div className="form-group d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn btn-sm btn-dark button-shop"
                            >
                              Book
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ;
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  carsOption: state.carsOption,
});

export default connect(mapStateToProps)(UserHomePage);
