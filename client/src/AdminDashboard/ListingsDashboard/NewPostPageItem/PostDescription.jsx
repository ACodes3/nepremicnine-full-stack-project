import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const PostDescription = () => {
  const [postDetails, setPostDetails] = useState({
    post_id: "",
    post_detail_desc: "",
    post_detail_utilities: "",
    post_detail_pets: "",
    post_detail_income: "",
    post_detail_size: "",
    post_detail_schools: "",
    post_detail_bus: "",
    post_detail_restaurant: "",
  });

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/auth/posts")
      .then((result) => {
        if (result.data.Status) {
          setPosts(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/auth/add-post-description", postDetails)
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
            style={{ backgroundColor: "#d78d42" }}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="grid-items">
              <label htmlFor="post_id" className="grid-item-l w-100">
                Description for Post:
              </label>
              <select
                name="post_id"
                id="post_id"
                className="form-select"
                onChange={(e) =>
                  setPostDetails({ ...postDetails, post_id: e.target.value })
                }
              >
                {posts.map((post) => (
                  <option value={post.post_id} key={post.post_id}>
                    {post.post_title}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_desc" className="form-label">
                Post Description
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="post_detail_desc"
                placeholder="Enter Title"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_desc: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_utilities" className="form-label">
                Post Utilities
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="post_detail_utilities"
                placeholder="Enter Post Utilities Policy"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_utilities: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_pets" className="form-label">
                Post Pets
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="post_detail_pets"
                placeholder="Enter Post Pets Policy"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_pets: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_income" className="form-label">
                Post Income
              </label>
              <input
                type="text"
                className="form-control rounded-0"
                id="post_detail_income"
                placeholder="Enter Post Income Policy"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_income: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_size" className="form-label">
                Post Size
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="post_detail_size"
                placeholder="Enter Post Estate Size"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_size: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_schools" className="form-label">
                Post Schools Away
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="post_detail_schools"
                placeholder="Enter How many km the school is away"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_schools: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_bus" className="form-label">
                Post Bus Away
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="post_detail_bus"
                placeholder="Enter How many km the bus is away"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_bus: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <label htmlFor="post_detail_restaurant" className="form-label">
                Post Restaurant Away
              </label>
              <input
                type="number"
                className="form-control rounded-0"
                id="post_detail_restaurant"
                placeholder="Enter How many km the restaurant is away"
                onChange={(e) =>
                  setPostDetails({
                    ...postDetails,
                    post_detail_restaurant: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Post Details
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostDescription;
