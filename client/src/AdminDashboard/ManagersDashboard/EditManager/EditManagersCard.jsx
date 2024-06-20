import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const EditManagersCard = () => {
  const { id } = useParams();
  const [manager, setManager] = useState({
    manager_name: "",
    manager_surname: "",
    manager_address: "",
    manager_phone: "",
    manager_fax: "",
    manager_pay:"",
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
      .get("http://localhost:3000/auth/managers/" + id)
      .then((result) => {
        setManager({
          ...manager,
          manager_name: result.data.Result[0].manager_name,
          manager_surname: result.data.Result[0].manager_surname,
          manager_address: result.data.Result[0].manager_address,
          manager_phone: result.data.Result[0].manager_phone,
          manager_fax: result.data.Result[0].manager_fax,
          manager_pay: result.data.Result[0].manager_pay,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3000/auth/edit-manager/" + id, manager)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/managers");
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
          <h3 className="grid-c-top text-silver-v1">Edit Manager</h3>
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
                value={manager.manager_name}
                type="text"
                className="form-control rounded-0"
                id="staff_name"
                placeholder="Enter Name"
                onChange={(e) =>
                  setManager({ ...manager, manager_name: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_surname" className="form-label">
                Surname
              </label>
              <input
                value={manager.manager_surname}
                type="text"
                className="form-control rounded-0"
                id="staff_surname"
                placeholder="Enter Surname"
                onChange={(e) =>
                  setManager({ ...manager, manager_surname: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_address" className="form-label">
                Address
              </label>
              <input
                value={manager.manager_address}
                type="text"
                className="form-control rounded-0"
                id="staff_address"
                placeholder="1234 Main St"
                onChange={(e) =>
                  setManager({ ...manager, manager_address: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_phone" className="form-label">
                Phone Number
              </label>
              <input
                value={manager.manager_phone}
                type="text"
                className="form-control rounded-0"
                id="staff_phone"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  setManager({ ...manager, manager_phone: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_phone" className="form-label">
                Fax Number
              </label>
              <input
                value={manager.manager_fax}
                type="text"
                className="form-control rounded-0"
                id="staff_phone"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  setManager({ ...manager, manager_fax: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_phone" className="form-label">
                Pay
              </label>
              <input
                value={manager.manager_pay}
                type="number"
                className="form-control rounded-0"
                id="staff_phone"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  setManager({ ...manager, manager_pay: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Edit Manager
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditManagersCard;
