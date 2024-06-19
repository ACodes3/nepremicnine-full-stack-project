import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const InsertManagerCard = () => {
  const [manager, setManager] = useState({
    role_id: "",
    staff_type_id: "",
    manager_name: "",
    manager_surname: "",
    manager_address: "",
    manager_phone: "",
    manager_fax: "",
    manager_gender: "",
    manager_birthdate: "",
    manager_emso: "",
    manager_pay: "",
    manager_startdate: "",
    manager_became_date: "",
    manager_avatar: "",
  });

  const [staffType, setStaffType] = useState([]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role_id", manager.role_id);
    formData.append("staff_type_id", manager.staff_type_id);
    formData.append("manager_name", manager.manager_name);
    formData.append("manager_surname", manager.manager_surname);
    formData.append("manager_address", manager.manager_address);
    formData.append("manager_phone", manager.manager_phone);
    formData.append("manager_fax", manager.manager_fax);
    formData.append("manager_gender", manager.manager_gender);
    formData.append("manager_birthdate", manager.manager_birthdate);
    formData.append("manager_emso", manager.manager_emso);
    formData.append("manager_pay", manager.manager_pay);
    formData.append("manager_startdate", manager.manager_startdate);
    formData.append("manager_became_date", manager.manager_became_date);
    formData.append("manager_avatar", manager.manager_avatar);

    axios
      .post("http://localhost:3000/auth/add-manager", formData)
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
          <h3 className="grid-c-top text-silver-v1">Add Manager</h3>
          <form
            className="grid-c4-content bg-jet"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
                        <div className="col-12">
              <label htmlFor="role_id" className="form-label">
                Role
              </label>
              <select
                name="role_id"
                id="role_id"
                className="form-select"
                onChange={(e) =>
                  setManager({ ...manager, role_id: e.target.value })
                }
              >
                {roles.map((role) => (
                  <option value={role.role_id}>{role.role_name}</option>
                ))}
              </select>
            </div>
            <div className="grid-items">
              <label htmlFor="staffType" className="grid-item-l w-100">
                Staff Type
              </label>
              <select
                name="staffType"
                id="staffType"
                className="form-select"
                onChange={(e) =>
                  setManager({ ...manager, staff_type_id: e.target.value })
                }
              >
                {staffType.map((type) => (
                  <option value={type.staff_type_id}>
                    {type.staff_type_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="staff_name" className="form-label">
                Name
              </label>
              <input
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
              <label htmlFor="staff_fax" className="form-label">
                Fax Number
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="staff_fax"
                placeholder="Enter Fax Number"
                onChange={(e) =>
                  setManager({ ...manager, manager_fax: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_gender" className="form-label">
                Gender
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="staff_gender"
                placeholder="Enter Agents Gender"
                onChange={(e) =>
                  setManager({ ...manager, manager_gender: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_birthdate" className="form-label">
                BirthDate
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="staff_birthdate"
                placeholder="Enter Agents Birth Date"
                onChange={(e) =>
                  setManager({ ...manager, manager_birthdate: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_emso" className="form-label">
                EMSO
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="staff_emso"
                placeholder="Enter Agents EMSO"
                onChange={(e) =>
                  setManager({ ...manager, manager_emso: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_pay" className="form-label">
                Managers Pay
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="staff_pay"
                placeholder="Enter The Agents Pay"
                onChange={(e) =>
                  setManager({ ...manager, manager_pay: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_startdate" className="form-label">
                Managers Start Date
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="staff_startdate"
                placeholder="Enter The Agents Start Date"
                onChange={(e) =>
                  setManager({ ...manager, manager_startdate: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_startdate" className="form-label">
                Managers Became Date
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="staff_startdate"
                placeholder="Enter The Agents Start Date"
                onChange={(e) =>
                  setManager({ ...manager, manager_became_date: e.target.value })
                }
              />
            </div>
            <div className="col-12 mb-3">
              <label className="form-label" htmlFor="staff_avatar">
                Select Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="staff_avatar"
                name="staff_avatar"
                onChange={(e) =>
                  setManager({ ...manager, manager_avatar: e.target.files[0] })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Manager
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertManagerCard;
