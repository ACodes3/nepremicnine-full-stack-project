import "./registerpage.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import apiRequest from "../lib/apiRequest";
import axios from "axios";

function UserRegister() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    role_id: "",
    user_name_surname: "",
    user_address: "",
    user_phone: "",
    user_fax: "",
    user_estate_type: "",
    user_space: "",
    user_max_rent: "",
    user_email: "",
    user_password: "",
    user_avatar: "",
    user_created_at: "",
  });

  const [roles, setRoles] = useState([]);

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
    formData.append("role_id", user.role_id);
    formData.append("user_name_surname", user.user_name_surname);
    formData.append("user_address", user.user_address);
    formData.append("user_phone", user.user_phone);
    formData.append("user_fax", user.user_fax);
    formData.append("user_estate_type", user.user_estate_type);
    formData.append("user_space", user.user_space);
    formData.append("user_max_rent", user.user_max_rent);
    formData.append("user_email", user.user_email);
    formData.append("user_password", user.user_password);
    formData.append("user_avatar", user.user_avatar);
    formData.append("user_created_at", user.user_create_at);

    axios
      .post("http://localhost:3000/auth/user-register", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/user-login");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Create an Account</h1>
          <select
            name="staffType"
            id="staffType"
            className="form-select"
            onChange={(e) => setUser({ ...user, role_id: e.target.value })}
          >
            {roles.map((role) => (
              <option value={role.role_id}>{role.role_name}</option>
            ))}
          </select>
          <input
            name="user_name_surname"
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) =>
              setUser({ ...user, user_name_surname: e.target.value })
            }
          />
          <input
            name="user_address"
            type="text"
            placeholder="Address"
            required
            onChange={(e) =>
              setUser({ ...user, user_address: e.target.value })
            }
          />
          <input name="user_phone" type="text" placeholder="Phone" required 
          onChange={(e) =>
            setUser({ ...user, user_phone: e.target.value })
          } />
          <input name="user_fax" type="text" placeholder="Fax" 
          onChange={(e) =>
            setUser({ ...user, user_fax: e.target.value })
          }/>
          <input
            name="user_estate_type"
            type="text"
            placeholder="Estate Type"
            required
            onChange={(e) =>
              setUser({ ...user, user_estate_type: e.target.value })
            }
          />
          <input
            name="user_max_space"
            type="number"
            placeholder="Max Space"
            required
            onChange={(e) =>
              setUser({ ...user, user_max_space: e.target.value })
            }
          />
          <input
            name="user_max_rent"
            type="number"
            placeholder="Max Rent"
            required
            onChange={(e) =>
              setUser({ ...user, user_max_rent: e.target.value })
            }
          />
          <input name="user_email" type="email" placeholder="Email" required
          onChange={(e) =>
            setUser({ ...user, user_email: e.target.value })
          } />
          <input
            name="user_password"
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setUser({ ...user, user_password: e.target.value })
            }
          />
          <input
            name="user_avatar"
            type="file"
            placeholder="Profile Picture"
            required
            onChange={(e) =>
              setUser({ ...user, user_avatar: e.target.files[0] })
            }
          />
          <input
            name="user_created_at"
            type="date"
            placeholder="User Created"
            required
            onChange={(e) =>
              setUser({ ...user, user_created_at: e.target.value })
            }
          />
          <button type="submit" disabled={isLoading}>
            Register
          </button>
          {error && <span>{error}</span>}
          <Link to="/sign-in">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="Background" />
      </div>
    </div>
  );
}

export default UserRegister;
