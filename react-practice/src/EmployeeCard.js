import React from "react";

function EmployeeCard( {name, job , email, src} ){
  return(
    <div className="employee-card">
      <img className="employee-card-img" src={src} alt={name}/>
      <div className="profile">
        <p>{name}</p>
        <p>{job}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default EmployeeCard
