import React from "react";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

//pass the parameter userData, carsOption from redux
const OwnerLandingPage = ({ userAccount, carsOption }) => {
  //   const navigate = useNavigate();
  return (
    <div className="container" data-testid="owner">
      <div className="row  d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <h2 className="text-lg-center pt-2">
            {/* get username and role from redux and display it */}
            {/* Hi {userAccount?.username}, your role is {userAccount.role} */}
          </h2>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Image</th>
                <th scope="col">Quantity</th>
                <th scope="col">Status</th>
                <th scope="col">Start Date</th>
                <th scope="col">End Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {carsOption.map((item, index) => {
                // const isAvailable = item.status === "available";
                return (
                  // shows data from redux
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.type}</td>
                    <td>{item.image}</td>
                    <td>{item.quantity}</td>
                    <td>{item.status}</td>
                    <td>{item.startDate}</td>
                    <td>{item.endDate}</td>
                    <td className="d-flex flex-row">
                      {/* shows edit button if the role is owner */}
                      {/* {userAccount?.role === "owner" && ( */}
                      <div>
                        <Link
                          to={`/edit/${item.id}`}
                          className="btn btn-sm btn-dark mr-1"
                        >
                          Edit
                        </Link>
                      </div>
                      {/* )} */}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userData: state.userData,
  carsOption: state.carsOption,
});

export { OwnerLandingPage as OwnerLandingPageUnwrapped };
export default connect(mapStateToProps)(OwnerLandingPage);
