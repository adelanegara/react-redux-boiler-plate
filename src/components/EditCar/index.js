import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import Switch from "@mui/material/Switch";

//what is the component will do
const EditCar = ({ carsOption, editCar }) => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { id } = useParams();

  //togle switch status
  const hanldeChecked = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const findCar = carsOption.find((item) => {
      return item.id === parseInt(id); //find carsOption with the id that the same with the id. parseInt(id) to make the str to int
    });
    if (findCar) {
      // if found
      //expanded data from findCar
      setData(findCar); //update data
      setStartDate(findCar.startDate); //update start date
      setEndDate(findCar.endDate); //update end date
      setStatus(findCar.status); //update status
      if (findCar.status === "available") {
        setIsChecked(true); //if status is available then togle is checked
      }
    }
  }, [carsOption, id]);

  useEffect(() => {
    if (isChecked) {
      setStatus("available");
    } else {
      setStatus("unavailable");
    }
  }, [isChecked]);

  //to update carsOption based on the input
  const edit = (e) => {
    e.preventDefault();
    const payload = {
      ...data,
      startDate,
      endDate,
      status,
    };
    editCar(payload);
    toast.success(`update date for ${data.name} successfully`);
    navigate("/owner");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column">
        <div className="col-md-6 mx-auto shadow p-5">
          <form>
            <div className="form-group">
              <label>Start Date</label>
              <input
                className="form-control"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
                value={startDate}
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                className="form-control"
                type="date"
                min={startDate}
                onChange={(e) => setEndDate(e.target.value)}
                value={endDate}
              />
            </div>
            <div className="form-group">
              {/* unavailable or available togle */}
              <Switch
                checked={isChecked}
                onChange={(e) => {
                  hanldeChecked(e);
                }}
              />
              <label>{status}</label>
            </div>
            <div className="form-group d-flex align-items-center justify-content-between my-2">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => edit(e)}
              >
                Update
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => navigate("/")}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

//redux selector
const mapStateToProps = (state) => ({
  carsOption: state.carsOption,
});

const mapDispatchToProps = (dispatch) => ({
  editCar: (payload) => {
    dispatch({ type: "EDIT_CARS", payload });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditCar);
