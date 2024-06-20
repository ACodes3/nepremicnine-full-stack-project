import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const InsertAdminCard = () => {
  const [admins, setAdmins] = useState({
    staff_group_id: "",
    role_id: "",
    admin_name: "",
    staff_surname: "",
    staff_email: "",
    admin_password: "",
    admin_address: "",
    admin_phone: "",
    admin_fax: "",
    admin_gender: "",
    admin_birthdate: "",
    admin_emso: "",
    admin_pay: "",
    admin_startdate: "",
    admin_avatar: "",
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
    formData.append("staff_type_id", admins.staff_type_id);
    formData.append("role_id", admins.role_id);
    formData.append("admin_name", admins.admin_name);
    formData.append("admin_surname", admins.admin_surname);
    formData.append("admin_email", admins.admin_email);
    formData.append("admin_password", admins.admin_password);
    formData.append("admin_address", admins.admin_address);
    formData.append("admin_phone", admins.admin_phone);
    formData.append("admin_fax", admins.admin_fax);
    formData.append("admin_gender", admins.admin_gender);
    formData.append("admin_birthdate", admins.admin_birthdate);
    formData.append("admin_emso", admins.admin_emso);
    formData.append("admin_pay", admins.admin_pay);
    formData.append("admin_startdate", admins.admin_startdate);
    formData.append("admin_avatar", admins.admin_avatar);

    axios
      .post("http://localhost:3000/auth/add-admin", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard");
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
          <h3 className="grid-c-top text-silver-v1">Add Admin</h3>
          <form
            className="grid-c4-content bg-jet"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="grid-items">
              <label htmlFor="staffType" className="grid-item-l w-100">
                Admin Type
              </label>
              <select
                name="staffType"
                id="staffType"
                className="form-select"
                onChange={(e) =>
                  setAdmins({ ...admins, staff_type_id: e.target.value })
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
              <label htmlFor="role_id" className="form-label">
                Role
              </label>
              <select
                name="role_id"
                id="role_id"
                className="form-select"
                onChange={(e) =>
                  setAdmins({ ...admins, role_id: e.target.value })
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
                  setAdmins({ ...admins, admin_name: e.target.value })
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
                  setAdmins({ ...admins, admin_surname: e.target.value })
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
                  setAdmins({ ...admins, admin_email: e.target.value })
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
                  setAdmins({ ...admins, admin_password: e.target.value })
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
                  setAdmins({ ...admins, admin_address: e.target.value })
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
                  setAdmins({ ...admins, admin_phone: e.target.value })
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
                  setAdmins({ ...admins, admin_fax: e.target.value })
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
                  setAdmins({ ...admins, admin_gender: e.target.value })
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
                  setAdmins({ ...admins, admin_birthdate: e.target.value })
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
                  setAdmins({ ...admins, admin_emso: e.target.value })
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
                  setAdmins({ ...admins, admin_pay: e.target.value })
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
                  setAdmins({ ...admins, admin_startdate: e.target.value })
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
                  setAdmins({ ...admins, admin_avatar: e.target.files[0] })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Admin
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertAdminCard;
