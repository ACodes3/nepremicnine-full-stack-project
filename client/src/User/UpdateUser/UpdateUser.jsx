import "./updateUser.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiRequest from "../lib/apiRequest";
import axios from "axios";

function UpdateUser() {
    const { id } = useParams();
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    const [user, setUser] = useState({
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
    });

    useEffect(() => {
        axios
          .get("http://localhost:3000/auth/users/" + id)
          .then((result) => {
            setUser({
              ...user,
              user_name_surname: result.data.Result[0].user_name_surname,
              user_address: result.data.Result[0].user_address,
              user_phone: result.data.Result[0].user_phone,
              user_fax: result.data.Result[0].user_fax,
              user_estate_type: result.data.Result[0].user_estate_type,
              user_space: result.data.Result[0].user_space,
              user_max_rent: result.data.Result[0].user_max_rent,
              user_email: result.data.Result[0].user_email,
              user_password: result.data.Result[0].user_password,
              user_avatar: result.data.Result[0].user_avatar,
            });
          })
          .catch((err) => console.log(err));
      }, []);

      const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading state
        axios
          .put("http://localhost:3000/auth/edit-user/" + id, user)
          .then((result) => {
            setIsLoading(false); // Stop loading state
            if (result.data.Status) {
              navigate("/profile");
            } else {
              setError(result.data.Error);
            }
          })
          .catch((err) => {
            setIsLoading(false); // Stop loading state
            console.error(err);
            setError("Failed to update user.");
          });
      };


  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h1>Update Account</h1>
          <input
            className="input"
            value={user.user_name_surname}
            name="user_name_surname"
            type="text"
            placeholder="Full Name"
            required
            onChange={(e) =>
              setUser({ ...user, user_name_surname: e.target.value })
            }
          />
          <input
            value={user.user_address}
            name="user_address"
            type="text"
            placeholder="Address"
            required
            onChange={(e) =>
              setUser({ ...user, user_address: e.target.value })
            }
          />
          <input
          value={user.user_phone}
          name="user_phone" type="text" placeholder="Phone" required 
          onChange={(e) =>
            setUser({ ...user, user_phone: e.target.value })
          } />
          <input
          value={user.user_fax}
          name="user_fax" type="text" placeholder="Fax" 
          onChange={(e) =>
            setUser({ ...user, user_fax: e.target.value })
          }/>
          <input
          value={user.user_estate_type}
            name="user_estate_type"
            type="text"
            placeholder="Estate Type"
            required
            onChange={(e) =>
              setUser({ ...user, user_estate_type: e.target.value })
            }
          />
          <input
          value={user.user_space}
            name="user_max_space"
            type="number"
            placeholder="Max Space"
            required
            onChange={(e) =>
              setUser({ ...user, user_max_space: e.target.value })
            }
          />
          <input
          value={user.user_max_rent}
            name="user_max_rent"
            type="number"
            placeholder="Max Rent"
            required
            onChange={(e) =>
              setUser({ ...user, user_max_rent: e.target.value })
            }
          />
          <input
          value={user.user_email}
          name="user_email" type="email" placeholder="Email" required
          onChange={(e) =>
            setUser({ ...user, user_email: e.target.value })
          } />
          <input
          value={user.user_password}
            name="user_password"
            type="password"
            placeholder="Password"
            required
            onChange={(e) =>
              setUser({ ...user, user_password: e.target.value })
            }
          />
          <button type="submit" disabled={isLoading}>
            Update Account
          </button>
          {error && <span>{error}</span>}
          <Link to="/sign-in">Do you have an account?</Link>
        </form>
      </div>
      <div className="sideContainer">
        <img src={`http://localhost:3000/Images/${user.user_avatar}` || "/noavatar.jpg"} alt="" className="avatar" />
      </div>
    </div>
  );
}

export default UpdateUser;