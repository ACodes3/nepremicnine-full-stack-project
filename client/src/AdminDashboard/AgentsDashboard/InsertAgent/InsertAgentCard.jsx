import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const InsertAgentCard = () => {
  const [staff, setStaff] = useState({
    staff_type_id: "",
    staff_group_id: "",
    role_id: "",
    staff_name: "",
    staff_surname: "",
    staff_email: "",
    staff_password: "",
    staff_address: "",
    staff_phone: "",
    staff_fax: "",
    staff_gender: "",
    staff_birthdate: "",
    staff_emso: "",
    staff_pay: "",
    staff_startdate: "",
    staff_avatar: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("staff_type_id", staff.staff_type_id);
    formData.append("staff_group_id", staff.staff_group_id);
    formData.append("role_id", staff.role_id);
    formData.append("staff_name", staff.staff_name);
    formData.append("staff_surname", staff.staff_surname);
    formData.append("staff_email", staff.staff_email);
    formData.append("staff_password", staff.staff_password);
    formData.append("staff_address", staff.staff_address);
    formData.append("staff_phone", staff.staff_phone);
    formData.append("staff_fax", staff.staff_fax);
    formData.append("staff_gender", staff.staff_gender);
    formData.append("staff_birthdate", staff.staff_birthdate);
    formData.append("staff_emso", staff.staff_emso);
    formData.append("staff_pay", staff.staff_pay);
    formData.append("staff_startdate", staff.staff_startdate);
    formData.append("staff_avatar", staff.staff_avatar);

    axios
      .post("http://localhost:3000/auth/add-agent", formData)
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
          <h3 className="grid-c-top text-silver-v1">Add staff</h3>
          <form
            className="grid-c4-content bg-jet"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="grid-items">
              <label htmlFor="staffType" className="grid-item-l w-100">
                Staff Type
              </label>
              <select
                name="staffType"
                id="staffType"
                className="form-select"
                onChange={(e) =>
                  setStaff({ ...staff, staff_type_id: e.target.value })
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
              <label htmlFor="staffGroup" className="form-label">
                Staff Group
              </label>
              <select
                name="staffGroup"
                id="staffGroup"
                className="form-select"
                onChange={(e) =>
                  setStaff({ ...staff, staff_group_id: e.target.value })
                }
              >
                {staffGroup.map((group) => (
                  <option value={group.staff_group_id}>
                    {group.staff_group_id}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="role_id" className="form-label">
                Role
              </label>
              <select
                name="role_id"
                id="role_id"
                className="form-select"
                onChange={(e) =>
                  setStaff({ ...staff, role_id: e.target.value })
                }
              >
                {roles.map((role) => (
                  <option value={role.role_id}>{role.role_name}</option>
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
                  setStaff({ ...staff, staff_name: e.target.value })
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
                  setStaff({ ...staff, staff_surname: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_email" className="form-label">
                Email
              </label>
              <input
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
              <label htmlFor="staff_fax" className="form-label">
                Fax Number
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="staff_fax"
                placeholder="Enter Fax Number"
                onChange={(e) =>
                  setStaff({ ...staff, staff_fax: e.target.value })
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
                  setStaff({ ...staff, staff_gender: e.target.value })
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
                  setStaff({ ...staff, staff_birthdate: e.target.value })
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
                  setStaff({ ...staff, staff_emso: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_pay" className="form-label">
                Agents Pay
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="staff_pay"
                placeholder="Enter The Agents Pay"
                onChange={(e) =>
                  setStaff({ ...staff, staff_pay: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="staff_startdate" className="form-label">
                Agents Start Date
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="staff_startdate"
                placeholder="Enter The Agents Start Date"
                onChange={(e) =>
                  setStaff({ ...staff, staff_startdate: e.target.value })
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
                  setStaff({ ...staff, staff_avatar: e.target.files[0] })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Agent
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertAgentCard;
