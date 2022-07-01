import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

//Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

//pass the parameter  userData, slot, request, setRequest, editSlot from redux
const RequestBooking = ({
  booking,
  userAccount,
  carsOption,
  updateRequest,
  editCar,
}) => {
  const [open, setOpen] = React.useState(false); //Modal close & open handler
  const handleClose = () => setOpen(false); //Modal close & open handler
  const [data, setData] = useState(); //state for data from Request.
  const [selectedData, setSelectedData] = useState();

  //fetch data and shows list from request
  useEffect(() => {
    setData(booking);
  }, [booking]);

  //Modal Approve open handler
  const handleOpen = (item) => {
    setSelectedData(item);
    setOpen(true);
  };

  //func approve, expand selectedData, change the status to approve
  const onApprove = () => {
    const newRequest = {
      ...selectedData,
      status: "approved",
    };

    const findCar = carsOption.find((item) => {
      return item.id === selectedData.idCar; //find slot with the id that the same with the idSlot
    }); // if found
    if (findCar) {
      const newCar = {
        ...findCar,
        status: "unavailable",
      };
      //expanded data from findSlot & change the status to unavailable
      updateRequest(newRequest); //update request
      editCar(newCar); //update slot
      toast.success(`request booking ${selectedData.name} approved`); //shows success
      handleClose(); //close popup
    }
  };

  //func decline, expand selectedData, change the status to decline. Then shows decline message
  const onDecline = () => {
    const payload = {
      ...selectedData,
      status: "declined",
    };
    updateRequest(payload);
    toast.warning(`request booking ${selectedData.name} declined`); //shows error
    handleClose();
  };

  //error handling
  const styleButton = (type) => {
    if (type === "approved") {
      return "btn-success";
    }
    if (type === "declined") {
      return "btn-danger";
    }
    return "btn-primary";
  };

  return (
    <div className="container">
      <div className="row  d-flex flex-column">
        <div className="col-md-10 mx-auto my-4">
          <h2 className="text-lg-center pt-2">Request Slot:</h2>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Start Booking</th>
                <th scope="col">End Booking</th>
                <th scope="col">Car</th>
                <th scope="col">Status</th>
                {/* get data from user data role. Shows action if it's role is Owner */}
                {userAccount?.role === "owner" && <th scope="col">Action</th>}
              </tr>
            </thead>
            <tbody>
              {/* shows data to the table from redux initialState */}
              {data?.map((item, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.startBooking}</td>
                  <td>{item.endBooking}</td>
                  <td>{item.carName}</td>
                  <td>{item.status}</td>
                  {userAccount?.role === "owner" && (
                    <td className="d-flex flex-row">
                      <div>
                        <button
                          //disable button if it already approved or declined
                          disabled={
                            item.status === "declined" ||
                            item.status === "approved"
                          }
                          className={`btn btn-sm mr-1 ${styleButton(
                            item.status
                          )}`}
                          onClick={() => handleOpen(item)}
                        >
                          {item.status === "waiting for approval"
                            ? "Approve"
                            : item.status}
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Popup modal UI */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <div className="row d-flex flex-column">
                <div className="col mx-auto p-2">
                  <div>
                    <div className="text-info text-center mb-4">
                      <strong>Request Detail</strong>
                    </div>
                    <table className="table">
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">:</th>
                        <th scope="col">{selectedData?.idCar}</th>
                      </tr>
                      <tr>
                        <th scope="col">Car</th>
                        <th scope="col">:</th>
                        <th scope="col">{selectedData?.carName}</th>
                      </tr>
                      <tr>
                        <th scope="col">Start Booking</th>
                        <th scope="col">:</th>
                        <th scope="col">{selectedData?.startBooking}</th>
                      </tr>
                      <tr>
                        <th scope="col">End Booking</th>
                        <th scope="col">:</th>
                        <th scope="col">{selectedData?.endBooking}</th>
                      </tr>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">:</th>
                        <th scope="col">{selectedData?.username}</th>
                      </tr>
                    </table>
                    <div className="form-group d-flex align-items-center justify-content-between my-2">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={onApprove}
                      >
                        Approve
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={onDecline}
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

//redux selector
const mapStateToProps = (state) => ({
  booking: state.booking,
  userAccount: state.userAccount,
  carsOption: state.carsOption,
});

//redux action
const mapDispatchToProps = (dispatch) => ({
  updateRequest: (payload) => {
    dispatch({ type: "UPDATE_REQUEST_BOOKING", payload });
  },
  editCar: (payload) => {
    dispatch({ type: "EDIT_CARS", payload });
  },
});

//combine the 2 state (action & selector from redux)
export default connect(mapStateToProps, mapDispatchToProps)(RequestBooking);
