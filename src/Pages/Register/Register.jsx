import React, { useContext, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";

import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../Hook/UseAxiosPublic";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const { createUser, updateUserProfile,googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = UseAxiosPublic();

  const { districts, upazila } = useLoaderData();
  // console.log(districts, upazila)
  const [selectDistrict, setSelectDistrict] = useState();
  const [filterDistrict, setFilterDistrict] = useState(districts);

  // const [newUpazila, setNewUpazila] = useState();
  // const [selectUpazila, setSelectUpazila] = useState(upazila);

  const [newUpazila, setNewUpazila] = useState(upazila);
  const [selectUpazila, setSelectUpazila] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const avatar = form.avatar.value;
    const group = form.group.value;
    const district = form.district.value;
    const upazila = form.upazila.value;
    const password = form.textPass.value;
    const ConfirmPassword = form.password.value;

    const formData = {
      email,
      name,
      avatar,
      group,
      district,
      upazila,
      password,
      ConfirmPassword,
    };
    console.log(formData);

    // password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordPattern.test(ConfirmPassword)) {
      setErrorMessage(
        "At least one uppercase, one lower case and not less than six digit"
      );
      return;
    }

    createUser(email, ConfirmPassword).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile(name, avatar)
        .then(() => {
          // create user entry in the database

          const userInfo = {
            name: name,
            email: email,
            avatar: avatar,
            district: district,
            upazila: upazila,
            group: group,
          };

          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.inserted) {
              console.log("user added to database");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "registration completed successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
            navigate("/");
          });
        })
        .catch((error) => console.log(error));
    });
  };

  const handleGoogleLogin = () =>{
    googleLogin()
    .then(result =>{
      const user = result.user
      console.log(user);
      navigate("/")
    })
    .catch(error =>{
      console.log(error.message);
    })
  }

  

  return (
    <div>
      <div>
      <h1 className="text-5xl font-bold text-center mt-5">Register</h1>

      </div>
      <div className="card bg-base-100 w-full sm:w-3/4 md:w-1/2 lg:w-1/3  mx-auto my-10 shrink-0 shadow-2xl">
       
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Avatar</span>
            </label>
            <input
              type="URL"
              name="avatar"
              placeholder="Avatar"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood Group</span>
            </label>
            <select
              name="group"
              className="select select-bordered w-full max-w-xs"
            >
              <option value="">Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="flex gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <select
                name="district"
                className="select select-bordered w-full max-w-xs"
                value={selectDistrict}
                onChange={(e) => setSelectDistrict(e.target.value)}
              >
                <option value="">District</option>
                {filterDistrict.map((district) => (
                  <option key={district._id} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Upazila</span>
              </label>
              <select
                name="upazila"
                className="select select-bordered w-full max-w-xs"
                value={selectUpazila}
                onChange={(e) => setSelectUpazila(e.target.value)}
              >
                <option value="">upazila</option>
                {newUpazila.map((union) => (
                  <option key={union._id} value={union.name}>
                    {union.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              name="textPass"
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder=" confirm password"
              className="input input-bordered"
              required
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
             <button onClick={handleGoogleLogin} className="btn  mt-2"><FaGoogle></FaGoogle> Login With Google</button>
            <p>
              Older user here{" "}
              <Link className="text-primary" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
