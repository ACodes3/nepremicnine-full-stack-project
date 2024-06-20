import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const EditAgentCard = () => {
  const { id } = useParams();
  const [staff, setStaff] = useState({
    staff_name: "",
    staff_surname: "",
    staff_email: "",
    staff_password: "",
    staff_address: "",
    staff_phone: "",
  });

  const [staffType, setStaffType] = useState([]);
  const [staffGroup, setStaffGroup] = useState([]);
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/staff-type")
      .then((result) => {
        if (result.data.Status) {
          setStaffType(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/staff-group")
      .then((result) => {
        if (result.data.Status) {
          setStaffGroup(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/roles")
      .then((result) => {
        if (result.data.Status) {
          setRoles(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/agents/" + id)
      .then((result) => {
        setStaff({
          ...staff,
          staff_name: result.data.Result[0].staff_name,
          staff_surname: result.data.Result[0].staff_surname,
          staff_email: result.data.Result[0].staff_email,
          staff_password: result.data.Result[0].staff_password,
          staff_address: result.data.Result[0].staff_address,
          staff_phone: result.data.Result[0].staff_phone,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit-agent/" + id, staff)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/agents");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="insert-agent-card">
      <div className="grid-two-item grid-common grid-c4">
        <div>
          <h3 className="grid-c-top text-silver-v1">Edit staff</h3>
          <form
            className="grid-c4-content bg-jet"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="col-12">
              <label htmlFor="staff_name" className="form-label">
                Name
              </label>
              <input
                value={staff.staff_name}
                type="text"
                className="form-control rounded-0"
                id="staff_name"
                placeholder="Enter Name"
                onChange={(e) =>
                  setStaff({ ...staff, staff_name: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_surname" className="form-label">
                Surname
              </label>
              <input
                value={staff.staff_surname}
                type="text"
                className="form-control rounded-0"
                id="staff_surname"
                placeholder="Enter Surname"
                onChange={(e) =>
                  setStaff({ ...staff, staff_surname: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_email" className="form-label">
                Email
              </label>
              <input
                value={staff.staff_email}
                type="email"
                className="form-control rounded-0"
                id="staff_email"
                placeholder="Enter Email"
                autoComplete="off"
                onChange={(e) =>
                  setStaff({ ...staff, staff_email: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_password" className="form-label">
                Password
              </label>
              <input
                value={staff.staff_password}
                type="password"
                className="form-control rounded-0"
                id="staff_password"
                placeholder="Enter Password"
                onChange={(e) =>
                  setStaff({ ...staff, staff_password: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_address" className="form-label">
                Address
              </label>
              <input
                value={staff.staff_address}
                type="text"
                className="form-control rounded-0"
                id="staff_address"
                placeholder="1234 Main St"
                onChange={(e) =>
                  setStaff({ ...staff, staff_address: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_phone" className="form-label">
                Phone Number
              </label>
              <input
                value={staff.staff_phone}
                type="text"
                className="form-control rounded-0"
                id="staff_phone"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  setStaff({ ...staff, staff_phone: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Edit Agent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditAgentCard;
