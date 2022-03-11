import React from 'react'

const User = () => {
  return (
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        
      <div  className="table table-hover table-bordered">
        <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th> PhoneNumber</th>
            </thead>
            <tbody>
                <tr align="center">
                <td colSpan={9}>No User AVailable</td></tr></tbody>
                    </div>
    
       
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>

  )
}

export default User