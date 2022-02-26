import React from 'react'

const Body = () => {
  return (
    <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Starter Page</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Starter Page</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's
                content.
              </p>
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>
         
        </div>
        {/* /.col-md-6 */}
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header">
              <h5 className="m-0">Featured</h5>
            </div>
           
         
         
          </div>
        </div>
        {/* /.col-md-6 */}
      </div>
      {/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content */}
</div>


  )
}

export default Body