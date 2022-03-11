import React from 'react'
import { Link } from "react-router-dom";
import ViewUser from './ViewUser';

const Sidebar = () => {
  return (
  <>
  <aside className="main-sidebar sidebar-light-primary elevation-4 " style={{backgroundColor:"#66BB6A"}}>
  {/* Brand Logo */}
  
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block text-white">Food Donation System</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div><div className="sidebar-search-results"><div className="list-group"><a href="#" className="list-group-item"><div className="search-title"><strong className="text-light" />N<strong className="text-light" />o<strong className="text-light" /> <strong className="text-light" />e<strong className="text-light" />l<strong className="text-light" />e<strong className="text-light" />m<strong className="text-light" />e<strong className="text-light" />n<strong className="text-light" />t<strong className="text-light" /> <strong className="text-light" />f<strong className="text-light" />o<strong className="text-light" />u<strong className="text-light" />n<strong className="text-light" />d<strong className="text-light" />!<strong className="text-light" /></div><div className="search-path" /></a></div></div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        
        
          
        <li className="nav-item ">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit text-white " />
            <p  className="text-white">
             User
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon text-white" />
                <p className="text-white">Add Users</p>
              </a>
            </li>
            <li className="nav-item">
            <Link
                  to="/viewuser"
                  className="btn-sm bg-indigo"
                >
              <a href="" className="nav-link">
                <i className="far fa-circle nav-icon text-white" />
                <p className='text-white'>View Users</p>
              </a>
              </Link>
            </li>
            
            
            <li className="nav-item">
              <a href="forms/validation.html" className="nav-link">
                <i className="far fa-circle nav-icon text-white" />
                <p className="text-white">Validation</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit text-white " />
            <p  className="text-white">
            Donation
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon text-white" />
                <p className="text-white">Add Donation</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="forms/advanced.html" className="nav-link">
                <i className="far fa-circle nav-icon text-white" />
                <p className='text-white'>View Donations</p>
              </a>
            </li>
            </ul>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-edit text-white " />
            <p  className="text-white">
            Request
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="forms/general.html" className="nav-link">
                <i className="far fa-circle nav-icon text-white" />
                <p className="text-white">Add Request</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="forms/advanced.html" className="nav-link">
                <i className="far fa-circle nav-icon text-white" />
                <p className='text-white'>View Request</p>
              </a>
            </li>
            </ul>
        </li>
        
       
        
       
 
        
        
        
        
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

</>

  )
}

export default Sidebar