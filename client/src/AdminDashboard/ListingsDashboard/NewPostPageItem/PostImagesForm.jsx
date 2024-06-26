import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InserAgentCard.scss";

const PostImagesForm = () => {
  const [postImages, setPostImages] = useState({
    estate_images_name: "",
    estate_id: "",
  });

  const [estate, setEstate] = useState([]);
  const navigate = useNavigate();

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
    const formData = new FormData();
    formData.append("estate_images_name", postImages.estate_images_name);
    formData.append("estate_id", postImages.estate_id);

    axios
      .post("http://localhost:3000/auth/add-post-images", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
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
            <div className="col-12 mb-3">
              <label className="form-label" htmlFor="estate_images_name">
                Select Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="estate_images_name"
                name="estate_images_name"
                onChange={(e) =>
                  setPostImages({
                    ...postImages,
                    estate_images_name: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="grid-items">
              <label htmlFor="post_id" className="grid-item-l w-100">
                Images for Estate:
              </label>
              <select
                name="post_id"
                id="post_id"
                className="form-select"
                onChange={(e) =>
                  setPostImages({ ...postImages, estate_id: e.target.value })
                }
              >
                {estate.map((estat) => (
                  <option value={estat.estate_id} key={estat.estate_id}>
                    {estat.estate_address}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Image
              </button>
            </div>
          </form>
          <form
            className="grid-c4-content bg-jet"
            style={{ backgroundColor: "#d78d42" }}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="col-12 mb-3">
              <label className="form-label" htmlFor="post_images_name">
                Select Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="post_images_name"
                name="post_images_name"
                onChange={(e) =>
                  setPostImages({
                    ...postImages,
                    post_images_name: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="grid-items">
              <label htmlFor="post_id" className="grid-item-l w-100">
                Images for Estate:
              </label>
              <select
                name="post_id"
                id="post_id"
                className="form-select"
                onChange={(e) =>
                  setPostImages({ ...postImages, estate_id: e.target.value })
                }
              >
                {estate.map((estat) => (
                  <option value={estat.estate_id} key={estat.estate_id}>
                    {estat.estate_address}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Image
              </button>
            </div>
          </form>
          <form
            className="grid-c4-content bg-jet"
            style={{ backgroundColor: "#d78d42" }}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="col-12 mb-3">
              <label className="form-label" htmlFor="post_images_name">
                Select Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="post_images_name"
                name="post_images_name"
                onChange={(e) =>
                  setPostImages({
                    ...postImages,
                    post_images_name: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="grid-items">
              <label htmlFor="post_id" className="grid-item-l w-100">
                Images for Estate:
              </label>
              <select
                name="post_id"
                id="post_id"
                className="form-select"
                onChange={(e) =>
                  setPostImages({ ...postImages, estate_id: e.target.value })
                }
              >
                {estate.map((estat) => (
                  <option value={estat.estate_id} key={estat.estate_id}>
                    {estat.estate_address}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Image
              </button>
            </div>
          </form>
          <form
            className="grid-c4-content bg-jet"
            style={{ backgroundColor: "#d78d42" }}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="col-12 mb-3">
              <label className="form-label" htmlFor="post_images_name">
                Select Image
              </label>
              <input
                type="file"
                className="form-control rounded-0"
                id="post_images_name"
                name="post_images_name"
                onChange={(e) =>
                  setPostImages({
                    ...postImages,
                    post_images_name: e.target.files[0],
                  })
                }
              />
            </div>
            <div className="grid-items">
              <label htmlFor="post_id" className="grid-item-l w-100">
                Images for Estate:
              </label>
              <select
                name="post_id"
                id="post_id"
                className="form-select"
                onChange={(e) =>
                  setPostImages({ ...postImages, estate_id: e.target.value })
                }
              >
                {estate.map((estat) => (
                  <option value={estat.estate_id} key={estat.estate_id}>
                    {estat.estate_address}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Add Image
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostImagesForm;
