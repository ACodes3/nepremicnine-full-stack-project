import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const PostForm = () => {
  const [post, setPost] = useState({
    office_branch_id: "",
    staff_id: "",
    estate_id: "",
    post_title: "",
    post_created_at: "",
  });

  const [officeBranch, setOfficeBranch] = useState([]);
  const [staff, setStaff] = useState([]);
  const [estate, setEstate] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/branch-offices")
      .then((result) => {
        if (result.data.Status) {
          setOfficeBranch(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/staff")
      .then((result) => {
        if (result.data.Status) {
          setStaff(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/estates")
      .then((result) => {
        if (result.data.Status) {
          setEstate(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/auth/add-post", post)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/listings");
        } else {
          alert(result.data.Error);
          console.log(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };






  return (
    <div className="insert-agent-card">
      <div className="grid-two-item grid-common grid-c4">
        <div>
          <h3 className="grid-c-top text-silver-v1">Add Post</h3>
          <form
            className="grid-c4-content bg-jet"
            style={{backgroundColor:"#d78d42"}}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="grid-items">
              <label htmlFor="office_branch_id" className="grid-item-l w-100">
                Office Branch
              </label>
              <select
                name="office_branch_id"
                id="office_branch_id"
                className="form-select"
                onChange={(e) =>
                  setPost({ ...post, office_branch_id: e.target.value })
                }
              >
                {officeBranch.map((office) => (
                  <option value={office.office_branch_id} key={office.office_branch_id}>
                    {office.office_street_name} 
                    {office.office_sreet_number}{" "}
                    {office.office_city}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="staff_id" className="form-label">
                Agent / Staff
              </label>
              <select
                name="staff_id"
                id="staff_id"
                className="form-select"
                onChange={(e) =>
                  setPost({ ...post, staff_id: e.target.value })
                }
              >
                {staff.map((staf) => (
                  <option value={staf.staff_id} key={staf.staff_id}>{staf.staff_name} {staf.staff_surname}</option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="estate_id" className="form-label">
                Estate
              </label>
              <select
                name="estate_id"
                id="estate_id"
                className="form-select"
                onChange={(e) =>
                  setPost({ ...post, estate_id: e.target.value })
                }
              >
                {estate.map((estat) => (
                  <option value={estat.estate_id} key={estat.estate_id}>{estat.estate_address}</option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="post_title" className="form-label">
                Post Title
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="post_title"
                placeholder="Enter Title"
                onChange={(e) =>
                  setPost({ ...post, post_title: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_created_at" className="form-label">
                Post Created Date
              </label>
              <input
                type="date"
                className="form-control rounded-0"
                id="post_created_at"
                placeholder="Enter Date"
                onChange={(e) =>
                  setPost({ ...post, post_created_at: e.target.value })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};

export default PostForm;
