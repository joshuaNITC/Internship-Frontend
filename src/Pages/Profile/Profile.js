import React from "react";
import "./profile.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";

const Profile = () => {
  return (
    <>
      <div className="container">
        <Card className="card-profile shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Body>
            <Row>
              <div className="col">
                <div className="card-profile-stats d-flex justify-content-center ">
                  <img src="/man.png" alt="" />
                </div>
              </div>
            </Row>
            <div className="text-center">
              <h3>Joshua</h3>
              <h4>
                <i class="fa-solid fa-envelope email"></i>&nbsp;
                {/* &nbsp; can also be used for space */}
                <span>josh@gmail.com</span>
              </h4>
              <h4>
                <i class="fa-solid fa-mobile-screen"></i>&nbsp;
                <span>0987654321</span>
              </h4>
              <h4>
                <i class="fa-solid fa-person"></i>&nbsp;
                {/* &nbsp; can also be used for space */}
                <span>Female</span>
              </h4>
              <h4>
                <i class="fa-solid fa-location-dot"></i>&nbsp;
                <span>home/sohnijuneja</span>
              </h4>
              <h4>
                Status:&nbsp;
                <span>Acitve</span>
              </h4>
              <h4>
                <i class="fa-solid fa-calendar-days"></i>&nbsp;
                Date Created:&nbsp;
                <span>13-01-2024</span>
              </h4>
              <h4>
                <i class="fa-regular fa-pen-to-square"></i>&nbsp;
                Date Updated:&nbsp;
                <span>14-01-2024</span>
              </h4>
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Profile;
