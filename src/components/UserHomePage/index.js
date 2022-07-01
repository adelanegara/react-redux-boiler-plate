import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import orderBy from "lodash/orderBy";
import { useNavigate } from "react-router-dom";

//pass the parameter carsOption
const UserHomePage = ({ carsOption, userAccount }) => {
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState([]);
  const [filterKey, setFilterKey] = useState([]);

  //handling word for search bar
  const arraySearch = (array, keyword) => {
    const searchTerm = keyword.toLowerCase();
    return array.filter((value) => {
      return value.name.toLowerCase().match(new RegExp(searchTerm, "g"));
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

  const handleSortType = async (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFilterKey([...filterKey, value]);
    } else {
      const removeFilter = filterKey.filter((item) => {
        return item !== value;
      });
      setFilterKey(removeFilter);
    }
  };

  useEffect(() => {
    if (filterKey.length < 1) {
      setFilteredData(carsOption);
    } else {
      const filterByType = async () => {
        const sortData = await carsOption.filter((item) => {
          if (filterKey.includes(item.type)) {
            return item;
          }
        });
        setFilteredData(sortData);
      };
      filterByType();
    }
  }, [filterKey, carsOption]);

  return (
    <div>
      <div>
        <h2 className="text-lg-center pt-2">
          {/* get username and role from redux and display it */}
          Hi {userAccount?.name}, your role is {userAccount?.role}
        </h2>
      </div>
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
                      value="Sport"
                      id="flexCheckDefault"
                      onClick={(e) => handleSortType(e)}
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Sport
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Sedan"
                      id="flexCheckChecked"
                      onClick={(e) => handleSortType(e)}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Sedan
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Hatchback"
                      id="flexCheckChecked"
                      onClick={(e) => handleSortType(e)}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Hatchback
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="SUV"
                      id="flexCheckChecked"
                      onClick={(e) => handleSortType(e)}
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      SUV
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="Mini Van"
                      id="flexCheckChecked"
                      onClick={(e) => handleSortType(e)}
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
              const isUnavailable = item.status === "unavailable";
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
                              disabled={isUnavailable}
                              type="button"
                              className="btn btn-sm btn-dark button-shop"
                              onClick={() => navigate(`/booking/${item.id}`)}
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
  userAccount: state.userAccount,
});

//combine the 2 state (action & selector from redux)
export default connect(mapStateToProps)(UserHomePage);
