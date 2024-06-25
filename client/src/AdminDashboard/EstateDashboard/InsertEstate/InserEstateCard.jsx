import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const InsertEstateCard = () => {
  const [estate, setEstate] = useState({
    owner_id: "",
    staff_group_id: "",
    estate_address: "",
    estate_type: "",
    estate_bedrooms: "",
    estate_quadrature: "",
    estate_rent: "",
    estate_city: "",
    estate_bathrooms: "",
    estate_latitude: "",
    estate_longitude: "",
    estate_property: "",
  });

  const [owners, setOwners] = useState([]);
  const [groups, setGroups] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/owners")
      .then((result) => {
        if (result.data.Status) {
          setOwners(result.data.Result);
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
          setGroups(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!estate.owner_id || !estate.staff_group_id || !estate.estate_address) {
      alert("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();
    Object.keys(estate).forEach((key) => {
      formData.append(key, estate[key]);
    });

    axios
      .post("http://localhost:3000/auth/add-estate", formData)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/estates");
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
          <h3 className="grid-c-top text-silver-v1">Add Estate</h3>
          <form
            className="grid-c4-content bg-jet"
            onSubmit={handleSubmit}
          >
            <div className="grid-items">
              <label htmlFor="owner_id" className="grid-item-l w-100">
                Owner Type
              </label>
              <select
                name="owner_id"
                id="owner_id"
                className="form-select"
                onChange={(e) =>
                  setEstate({ ...estate, owner_id: e.target.value })
                }
              >
                <option value="" disabled>
                  Select Owner
                </option>
                {owners.map((owner) => (
                  <option key={owner.owner_id} value={owner.owner_id}>
                    {owner.owner_name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="staff_group_id" className="form-label">
                Staff Group
              </label>
              <select
                name="staff_group_id"
                id="staff_group_id"
                className="form-select"
                onChange={(e) =>
                  setEstate({ ...estate, staff_group_id: e.target.value })
                }
              >
                <option value="" disabled>
                  Select Staff Group
                </option>
                {groups.map((group) => (
                  <option key={group.staff_group_id} value={group.staff_group_id}>
                    {group.staff_group_id}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="estate_address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="estate_address"
                placeholder="Enter Estates Address"
                onChange={(e) =>
                  setEstate({ ...estate, estate_address: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_type" className="form-label">
                Estate Type
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="estate_type"
                placeholder="Enter The Estate Type"
                onChange={(e) =>
                  setEstate({ ...estate, estate_type: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_bedrooms" className="form-label">
                Bedrooms
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="estate_bedrooms"
                placeholder="Enter the number of bedrooms"
                onChange={(e) =>
                  setEstate({ ...estate, estate_bedrooms: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_quadrature" className="form-label">
                Quadrature
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="estate_quadrature"
                placeholder="Enter Estates Quadrature"
                onChange={(e) =>
                  setEstate({ ...estate, estate_quadrature: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_rent" className="form-label">
                Rent
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="estate_rent"
                placeholder="Enter the Rent amount"
                onChange={(e) =>
                  setEstate({ ...estate, estate_rent: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="estate_city"
                placeholder="Enter City of the Estate"
                onChange={(e) =>
                  setEstate({ ...estate, estate_city: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_bathrooms" className="form-label">
                Bathrooms
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="estate_bathrooms"
                placeholder="Enter Number of Bathrooms"
                onChange={(e) =>
                  setEstate({ ...estate, estate_bathrooms: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_latitude" className="form-label">
                Latitude
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="estate_latitude"
                placeholder="Enter Estates Latitude"
                onChange={(e) =>
                  setEstate({ ...estate, estate_latitude: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_longitude" className="form-label">
                Longitude
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="staff_birthdate"
                placeholder="Enter Estates Longitude"
                onChange={(e) =>
                  setEstate({ ...estate, estate_longitude: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="estate_property" className="form-label">
                Estate Property
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="estate_property"
                placeholder="Enter Estate Property"
                onChange={(e) =>
                  setEstate({ ...estate, estate_property: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Estate
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InsertEstateCard;
