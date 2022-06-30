import React, { useState } from "react";
import { connect } from "react-redux";
import orderBy from "lodash/orderBy";

//pass the parameter carsOption
const UserHomePage = ({ carsOption }) => {
  const [filteredData, setFilteredData] = useState(carsOption);

  //handling word for search bar
  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return value.title.toLowerCase().match(new RegExp(searchTerm, "g"));
    });
  };

  //handling search bar
  const handleSearch = async (e) => {
    let value = e.target.value;
    let search = await arraySearch(carsOption, value);
    setFilteredData(search);
  };

  //handling sort by type
  const handleSort = (type) => {
    const sortData = orderBy(carsOption, ["name"], [type]);
    setFilteredData(sortData);
  };

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
                onChange={(e) => handleSearch(e)}
              />
              <ul className="list-group">
                <li
                  className="list-group-item"
                  onClick={() => handleSort("asc")}
                >
                  Sort Ascending
                </li>
                <li
                  className="list-group-item"
                  onClick={() => handleSort("desc")}
                >
                  Sort Descending
                </li>
                <li className="list-group-item">
                  Sort by Type
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Sport
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Sedan
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Hatchback
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      SUV
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Mini Van
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-9 ">
          <div className="row mt-5">
            {filteredData.map((item, index) => {
              return (
                <>
                  <div className="col-4  " key={index}>
                    <div className="ui link cards">
                      <div className="card shadow-sm p-3 mb-5  bg-white ">
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
                          <div className="category-text pb-3">
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
