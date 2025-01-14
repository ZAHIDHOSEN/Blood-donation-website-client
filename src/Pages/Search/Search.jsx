import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Search = () => {
  const districts = useLoaderData();
  // console.log(districts)
  const [selectDistrict, setSelectDistrict] = useState()
  const [filterDistrict, setFilterDistrict] = useState(districts)
  const [bloodGroup, setBloodGroup] = useState('')
  const [result, setResult] = useState([]);

  const [upazila, setUpazila] = useState([]);
  const [selectUpazila, setSelectUpazila] = useState();


  useEffect(()=>{
    fetch('http://localhost:5000/upazila')
    .then(res => res.json())
    .then(data =>{
      setUpazila(data)
    })
  },[])

  const handleSearch = () =>{
    setResult([
      {name: 'zahid', bloodGroup, district: selectDistrict, upazila: selectUpazila},
      {name: 'plabon', bloodGroup, district: selectDistrict, upazila: selectUpazila}
    ])
  }
    return (
      <div>
          <div className="card bg-slate-100 w-1/2 mx-auto shrink-0 shadow-2xl">
          <h2 className='text-3xl font-bold text-center'>Search for blood donner</h2>
        <form className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Blood group</span>
            </label>
            <select className="select select-bordered w-full max-w-xs" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
             
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">District</span>
            </label>
            <select className="select select-bordered w-full max-w-xs" value={selectDistrict} onChange={(e) => setSelectDistrict(e.target.value)}>
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
            <select className="select select-bordered w-full max-w-xs" value={selectUpazila} onChange={(e) => setSelectUpazila(e.target.value)}>
            <option value="">upazila</option>
            {upazila.map((union) => (
              <option key={union._id} value={union.name}>
                {union.name}
              </option>
            ))}
          </select>
           
          </div>
          <div className="form-control mt-6">
            <button onClick={handleSearch} className="btn btn-primary">Search</button>
          </div>
        </form>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-center my-10">Search result</h2>

        {result.length === 0 ? (
          <p className='text-center font-bold text-2xl text-red-500 my-10'>No Data Match.</p>
        ) : (
          <ul>
            {result.map((result, index) => (
              <li key={index}>
                {result.name} - {result.bloodGroup} - {result.district} - {result.upazila}
              </li>
            ))}
          </ul>
        )}

      </div>
      </div>
    );
};

export default Search;