import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./edit.css";
import Spiner from "../../Components/Spiner/Spiner";

const Edit = () => {
  const [showSpin, setShowSpin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSpin(false);
    }, 600);
  }, []);

  const [inputdata, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: "",
  });

  const [status, setStatus] = useState("Active");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");

  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];

  // set input value
  const setInputValue = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputdata, [name]: value });
  };

  // status set
  const setStatusValue = (e) => {
    setStatus(e.value);
  };

  // set profile
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  // submit user data
  const submitUserData = (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = inputdata;
    if (fname === "") {
      toast.error("First name is required!!");
    } else if (lname === "") {
      toast.error("Last name is required!");
    } else if (email === "") {
      toast.error("Email is required!");
    } else if (!email.includes("@")) {
      toast.error("Enter valid email!");
    } else if (mobile === "") {
      toast.error("Mobile number is required!");
    } else if (mobile.length > 10) {
      toast.error("Enter valid mobile number!");
    } else if (gender === "") {
      toast.error("Gender is required!");
    } else if (status === "") {
      toast.error("Status is required!");
    } else if (image === "") {
      toast.error("Image is required!");
    } else if (location === "") {
      toast.error("Location is required!");
    } else {
      toast.success("Registration Successful!");
    }
  };

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);
  return (
    <>
      {showSpin ? (
        <Spiner />
      ) : (
        <div className="container">
          <h2 className="text-center mt-1">Update Your Details</h2>
          <Card className="shadow mt-3 p-3">
            <div className="profile_div text-center ">
              <img src={preview ? preview : "/man.png"} alt="img" />
            </div>
            <Form>
              <Row>
                <Form.Group
                  className="mb-3 col-lg-6 "
                  controlId="formBasicEmail"
                >
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="fname"
                    placeholder="First name"
                    onChange={setInputValue}
                    value={inputdata.fname}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lname"
                    placeholder="Last name"
                    onChange={setInputValue}
                    value={inputdata.lname}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email address"
                    onChange={setInputValue}
                    value={inputdata.email}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    placeholder="Mobile Number"
                    onChange={setInputValue}
                    value={inputdata.mobile}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select you gender</Form.Label>
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                    onChange={setInputValue}
                  />
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                    onChange={setInputValue}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select you Status</Form.Label>
                  <Select
                    options={options}
                    onChange={setStatusValue}
                    value={status}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6 "
                  controlId="formBasicEmail"
                >
                  <Form.Label>Select Your Profile</Form.Label>
                  <Form.Control
                    type="file"
                    name="user_profile"
                    placeholder="Select Your Profile"
                    onChange={setProfile}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-lg-6 "
                  controlId="formBasicEmail"
                >
                  <Form.Label>Enter Your Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Enter Your Location"
                    onChange={setInputValue}
                    value={inputdata.location}
                  />
                </Form.Group>
              </Row>
              <Button variant="primary" type="submit" onClick={submitUserData}>
                Submit
              </Button>
            </Form>
          </Card>
          <ToastContainer position="top-center" />
        </div>
      )}
    </>
  );
};

export default Edit;
