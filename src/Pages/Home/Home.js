import React, { useEffect, useState } from "react";
import "./home.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import Tables from "../../Components/Tables/Tables";
import Spiner from "../../Components/Spiner/Spiner";

const Home = () => {
  const navigate = useNavigate();
  const adduser = () => {
    navigate("/register");
  };
  
  const [showSpin, setShowSpin] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setShowSpin(false);
    },600)
  },[])

  return (
    <>
      <div className="container">
        <div className="main_div">
          {/* search add btn */}
          <div className="search_add mt-4 d-flex justify-content-between ">
            <div className="search col-lg-4 ">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="outline-success"
                  className="search_btn text-white "
                >
                  Search
                </Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="primary" onClick={adduser}>
                <i class="fa-solid fa-plus"></i>&nbsp; Add User
              </Button>
            </div>
          </div>
          {/* export,status,gender */}
          <div className="filter_div mt-5 d-flex justify-content-between flex-flex-wrap ">
            <div className="export_csv">
              <Button className="export_btn">Export to csv</Button>
            </div>
            <div className="filter_gender">
              <div className="filter">
                <h3>Filter by Gender</h3>
                <div className="gender d-flex justify-content-between ">
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`All`}
                    name="gender"
                    value={"All"}
                    defaultChecked
                  />
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`Male`}
                    name="gender"
                    value={"Male"}
                  />
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`Female`}
                    name="gender"
                    value={"Female"}
                  />
                </div>
              </div>
            </div>
            {/* sort by value */}
            <div className="filter_new_old">
              <h3>Sort by Value</h3>
              <Dropdown className="text-center ">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                  <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>New</Dropdown.Item>
                  <Dropdown.Item>Old</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* filter by status */}
            <div className="filter_status">
              <div className="status">
                <h3>Filter by Status</h3>
                <div className="status_radio d-flex justify-content-between flex-wrap ">
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`All`}
                    name="status"
                    value={"All"}
                    defaultChecked
                  />
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`Acitve`}
                    name="status"
                    value={"Acitve"}
                  />
                  <Form.Check // prettier-ignore
                    type={"radio"}
                    label={`InActive`}
                    name="status"
                    value={"InActive"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSpin ? <Spiner /> : <Tables />}
      </div>
    </>
  );
};

export default Home;
