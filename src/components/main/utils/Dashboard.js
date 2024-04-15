import React, { useState } from 'react';


function Dashboard() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className='dahboard-wrap'>
            {/* Header */}
            <header>
                <div className="logosec">

                    <img
                        src="logo.png"
                        className="icn menuicn"
                        id="menuicn"
                        alt="menu-icon"
                        onClick={toggleNav}
                    />
                </div>
                <div>
                    Overview
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="Search" />
                    <div className="searchbtn">
                        <img
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                            className="icn srchicn"
                            alt="search-icon"
                        />
                    </div>
                </div>
                <div className="message">
                    <div className="circle"></div>
                    <img
                        src="https://media.geeksforgeeks.org/wp-content/uploads/20221210183322/8.png"
                        className="icn"
                        alt=""
                    />
                    <div className="dp">
                        <img
                            src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
                            className="dpicn"
                            alt="dp"
                        />
                    </div>
                </div>
            </header>

            {/* Main container */}
            <div className={`main-container ${isNavOpen ? 'nav-open' : ''}`}>
                {/* Navigation container */}
                <div className="navcontainer">
                    {/* Navigation */}
                    <nav className="nav">
                        {/* Navigation items */}
                        <div className="nav-upper-options">
                            <div className="nav-option option1 d-flex align-items-center">
                                <img
                                    src="/category-2.png"
                                    className="nav-img img-fluid"
                                    alt="dashboard"
                                />
                                <h3 className='ms-2 pt-1'> Dashboard</h3>
                            </div>
                            <div className="nav-option option2 d-flex align-items-center">
                                <img
                                    src="profile-m.png"
                                    className="nav-img img-fluid"
                                    alt="management"
                                />
                                <h3 className='ms-2 pt-1'> Management</h3>
                            </div>
                            <div className="nav-option option2 d-flex align-items-center">
                                <img
                                    src="profile-1-m.png"
                                    className="nav-img img-fluid"
                                    alt="profile"
                                />
                                <h3 className='ms-2 pt-1'> Profile</h3>
                            </div>
                            <div className="nav-option option2 d-flex align-items-center">
                                <img
                                    src="settings solid 2.png"
                                    className="nav-img img-fluid"
                                    alt="settings"
                                />
                                <h3 className='ms-2 pt-1'> Settings</h3>
                            </div>
                            {/* Add other navigation options here */}
                        </div>
                    </nav>

                </div>

                {/* Main content */}
                <div className="main">
                    {/* Rest of the main content */}
                    {/* Searchbar2 */}
                    <div className="searchbar2">
                        <input type="text" name="" id="" placeholder="Search" />
                        <div className="searchbtn">
                            <img
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                                className="icn srchicn"
                                alt="search-button"
                            />
                        </div>
                    </div>
                    {/* Box container */}
                    <div className='row'>
                        <div className='main-welcome'>
                            <h2>welcome</h2>
                            <p>Fuel Your Passion for Football</p>
                        </div>




                    </div>
                    <div className='row'>
                        <div className="col-md-3">
                            <div class=" card-dash d-flex">
                                <div class="card-image-side">
                                    <img src="People alt.png" alt="Background Image" />
                                </div>
                                <div class="card-content ms-4">
                                    <h2>100</h2>
                                    <p>Total member</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class=" card-dash d-flex">
                                <div class="card-image-side">
                                    <img src="cup-1.png" alt="Background Image" />
                                </div>
                                <div class="card-content ms-4">
                                    <h2>10</h2>
                                    <p>Total member</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class=" card-dash d-flex">
                                <div class="card-image-side">
                                    <img src="Directions run.png" alt="Background Image" />
                                </div>
                                <div class="card-content ms-4">
                                    <h2>11</h2>
                                    <p>Total member</p>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div class=" card-dash d-flex">
                                <div class="card-image-side">
                                    <img src="People alt.png" alt="Background Image" />
                                </div>
                                <div class="card-content ms-4">
                                    <h2>20</h2>
                                    <p>Total member</p>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Report container */}
                    <div className='row'>
                        <div className='col-7'>

                            <div className='premium-league'>
                                <h6>Premier League Details</h6>
                                {/* <p>ff</p> */}
                            </div>

                            <div className='col-6'>
                                {/* <div className='order-list'>
                                    <ul>
                                        <li>
                                            w
                                        </li>
                                        <li>
                                            w
                                        </li>
                                        <li>
                                            w
                                        </li>
                                    </ul>
                                </div> */}
                            </div>

                        </div>
                        <div className='col-4'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

