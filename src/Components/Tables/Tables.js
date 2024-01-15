import React from "react";
import "./table.css";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";

const Tables = () => {
  return (
    <>
      <div className="container">
        <Row>
          <div className="col mt-2">
            <Card className="shadow mt-3 p-3">
              <Table
                striped
                bordered
                hover
                className="align-items-center"
                responsive="sm"
              >
                <thead className="thead-dark">
                  <tr className="table-dark">
                    <th>ID</th>
                    <th>FullName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Profile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>testuser</td>
                    <td>abc@gmail.com </td>
                    <td>M</td>
                    <td className="d-flex align-items-center justify-content-center">
                      <Dropdown className="text-center ">
                        <Dropdown.Toggle
                          className="dropdown_btn"
                          id="dropdown-basic"
                        >
                          <Badge bg="primary">
                            Active &nbsp;
                            <i class="fa-solid fa-angle-down "></i>
                          </Badge>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>Active</Dropdown.Item>
                          <Dropdown.Item>InActive</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className="img_parent text-center">
                      <img src="/man.png" alt="" />
                    </td>
                    <td className="text-center">
                      <Dropdown className="text-center ">
                        <Dropdown.Toggle
                          className="action"
                          id="dropdown-basic"
                          variant="light"
                        >
                          <i class="fa-solid fa-ellipsis-vertical"></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item>
                            <i class="fa-solid fa-eye" style={{color:"green"}}></i>&nbsp; View
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i class="fa-solid fa-pencil" style={{color:"blue"}}></i>&nbsp; Edit
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <i class="fa-solid fa-trash" ></i>&nbsp;Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card>
          </div>
        </Row>
      </div>
    </>
  );
};

export default Tables;
