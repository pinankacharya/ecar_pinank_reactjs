import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <>
            {/* <!-- Topbar Start --> */}
            <div className="container-fluid bg-dark py-3 px-lg-5 d-none d-lg-block">
                <div className="row">
                    <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-body pr-3" href="">
                                <i className="fa fa-phone-alt mr-2"></i>+91XXXXXXXXXX
                            </a>
                            <span className="text-body">|</span>
                            <a className="text-body px-3" href="">
                                <i className="fa fa-envelope mr-2"></i>Ecar@testing.com
                            </a>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-right">
                        <div className="d-inline-flex align-items-center">
                            <a className="text-body px-3" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="text-body px-3" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="text-body px-3" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="text-body px-3" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="text-body pl-3" href="">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Topbar End --> */}

            {/* <!-- Navbar Start --> */}
            <div className="container-fluid position-relative nav-bar p-0">
                <div className="position-relative px-lg-5" style={{ zIndex: "9" }}>
                    <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
                        <a href="" className="navbar-brand">
                            <h1 className="text-uppercase text-primary mb-1">Ecar</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                            <div className="navbar-nav ml-auto py-0">
                                <a href="index.html" className="nav-item nav-link active">
                                    Home
                                </a>
                                <a href="about.html" className="nav-item nav-link">
                                    About
                                </a>
                                <a href="service.html" className="nav-item nav-link">
                                    Service
                                </a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                        Cars
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="car.html" className="dropdown-item">
                                            Car Listing
                                        </a>
                                        <a href="detail.html" className="dropdown-item">
                                            Car Detail
                                        </a>
                                        <a href="booking.html" className="dropdown-item">
                                            Car Booking
                                        </a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="team.html" className="dropdown-item">
                                            The Team
                                        </a>
                                        <a href="testimonial.html" className="dropdown-item">
                                            Testimonial
                                        </a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">
                                    Contact
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Navbar End --> */}

            {/* <!-- Search Start --> */}
            <div className="container-fluid bg-white pt-3 px-lg-5">
                <div className="row mx-n2">
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <select className="custom-select px-4 mb-3" style={{ height: "50px" }}>
                            <option selected>Pickup Location</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                            <option value="3">Location 3</option>
                        </select>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <select className="custom-select px-4 mb-3" style={{ height: "50px" }}>
                            <option selected>Drop Location</option>
                            <option value="1">Location 1</option>
                            <option value="2">Location 2</option>
                            <option value="3">Location 3</option>
                        </select>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <div className="date mb-3" id="date" data-target-input="nearest">
                            <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Date" data-target="#date" data-toggle="datetimepicker" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <div className="time mb-3" id="time" data-target-input="nearest">
                            <input type="text" className="form-control p-4 datetimepicker-input" placeholder="Pickup Time" data-target="#time" data-toggle="datetimepicker" />
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <select className="custom-select px-4 mb-3" style={{ height: "50px" }}>
                            <option selected>Select A Car</option>
                            <option value="1">Car 1</option>
                            <option value="2">Car 1</option>
                            <option value="3">Car 1</option>
                        </select>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-md-6 px-2">
                        <button className="btn btn-primary btn-block mb-3" type="submit" style={{ height: "50px" }}>
                            Search
                        </button>
                    </div>
                </div>
            </div>
            {/* <!-- Search End --> */}

            {/* <!-- Carousel Start --> */}
            <div className="container-fluid p-0" style={{ marginBottom: "90px" }}>
                <div id="header-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="/images/carousel-1.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h4 className="text-white text-uppercase mb-md-3">Rent A Car</h4>
                                    <h1 className="display-1 text-white mb-md-4">Best Rental Cars In Your Location</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                                        Reserve Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="src/pages/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: "900px" }}>
                                    <h4 className="text-white text-uppercase mb-md-3">Rent A Car</h4>
                                    <h1 className="display-1 text-white mb-md-4">Quality Cars with Unlimited Miles</h1>
                                    <a href="" className="btn btn-primary py-md-3 px-md-5 mt-2">
                                        Reserve Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
                        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                            <span className="carousel-control-prev-icon mb-n2"></span>
                        </div>
                    </a>
                    <a className="carousel-control-next" href="#header-carousel" data-slide="next">
                        <div className="btn btn-dark" style={{ width: "45px", height: "45px" }}>
                            <span className="carousel-control-next-icon mb-n2"></span>
                        </div>
                    </a>
                </div>
            </div>
            {/* <!-- Carousel End --> */}

            {/* <!-- About Start --> */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-1 text-primary text-center">01</h1>
                    <h1 className="display-4 text-uppercase text-center mb-5">
                        Welcome To <span className="text-primary">Ecar</span>
                    </h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <img className="w-75 mb-4" src="/images/about.png" alt="" />
                            <p>
                                Justo et eos et ut takimata sed sadipscing dolore lorem, et elitr labore labore voluptua no rebum sed, stet voluptua amet sed elitr ea dolor dolores
                                no clita. Dolores diam magna clita ea eos amet, amet rebum voluptua vero vero sed clita accusam takimata. Nonumy labore ipsum sea voluptua sea eos
                                sit justo, no ipsum sanctus sanctus no et no ipsum amet, tempor labore est labore no. Eos diam eirmod lorem ut eirmod, ipsum diam sadipscing stet
                                dolores elitr elitr eirmod dolore. Magna elitr accusam takimata labore, et at erat eirmod consetetur tempor eirmod invidunt est, ipsum nonumy at et.
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-light p-4 mb-4" style={{ height: "150px" }}>
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-2x fa-headset text-secondary"></i>
                                </div>
                                <h4 className="text-uppercase m-0">24/7 Car Rental Support</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-secondary p-4 mb-4" style={{ height: "150px" }}>
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-2x fa-car text-secondary"></i>
                                </div>
                                <h4 className="text-light text-uppercase m-0">Car Reservation Anytime</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-2">
                            <div className="d-flex align-items-center bg-light p-4 mb-4" style={{ height: "150px" }}>
                                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary ml-n4 mr-4" style={{ width: "100px", height: "100px" }}>
                                    <i className="fa fa-2x fa-map-marker-alt text-secondary"></i>
                                </div>
                                <h4 className="text-uppercase m-0">Lots Of Pickup Locations</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}

            {/* <!-- Services Start --> */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-1 text-primary text-center">02</h1>
                    <h1 className="display-4 text-uppercase text-center mb-5">Our Services</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-2x fa-taxi text-secondary"></i>
                                    </div>
                                    <h1 className="display-2 text-white mt-n2 m-0">01</h1>
                                </div>
                                <h4 className="text-uppercase mb-3">Car Rental</h4>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                        </div>
                        {/* <!-- <div className="col-lg-4 col-md-6 mb-2">
                    <div className="service-item active d-flex flex-column justify-content-center px-4 mb-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <div className="d-flex align-items-center justify-content-center bg-primary ml-n4"
                                style={{width: 80px; height: 80px;">
                                <i className="fa fa-2x fa-money-check-alt text-secondary"></i>
                            </div>
                            <h1 className="display-2 text-white mt-n2 m-0">02</h1>
                        </div>
                        <h4 className="text-uppercase mb-3">Car Financing</h4>
                        <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo
                            elitr dolor amet sit sea sed</p>
                    </div>
                </div> --> */}
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-2x fa-car text-secondary"></i>
                                    </div>
                                    <h1 className="display-2 text-white mt-n2 m-0">03</h1>
                                </div>
                                <h4 className="text-uppercase mb-3">Car Inspection</h4>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-2x fa-cogs text-secondary"></i>
                                    </div>
                                    <h1 className="display-2 text-white mt-n2 m-0">04</h1>
                                </div>
                                <h4 className="text-uppercase mb-3">Auto Repairing</h4>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-2x fa-spray-can text-secondary"></i>
                                    </div>
                                    <h1 className="display-2 text-white mt-n2 m-0">05</h1>
                                </div>
                                <h4 className="text-uppercase mb-3">Auto Painting</h4>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="service-item d-flex flex-column justify-content-center px-4 mb-4">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="d-flex align-items-center justify-content-center bg-primary ml-n4" style={{ width: "80px", height: "80px" }}>
                                        <i className="fa fa-2x fa-pump-soap text-secondary"></i>
                                    </div>
                                    <h1 className="display-2 text-white mt-n2 m-0">06</h1>
                                </div>
                                <h4 className="text-uppercase mb-3">Auto Cleaning</h4>
                                <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Services End --> */}

            {/* <!-- Banner Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="bg-banner py-5 px-4 text-center">
                        <div className="py-5">
                            <h1 className="display-1 text-uppercase text-primary mb-4">50% OFF</h1>
                            <h1 className="text-uppercase text-light mb-4">Special Offer For New Members</h1>
                            <p className="mb-4">Only for Sunday from 1st Jan to 30th Jan 2045</p>
                            <a className="btn btn-primary mt-2 py-3 px-5" href="">
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}

            {/* <!-- Rent A Car Start --> */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-1 text-primary text-center">03</h1>
                    <h1 className="display-4 text-uppercase text-center mb-5">Find Your Car</h1>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="rent-item mb-4">
                                <img className="img-fluid mb-4" src="/images/car-rent-1.png" alt="" />
                                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="px-2">
                                        <i className="fa fa-car text-primary mr-1"></i>
                                        <span>2015</span>
                                    </div>
                                    <div className="px-2 border-left border-right">
                                        <i className="fa fa-cogs text-primary mr-1"></i>
                                        <span>AUTO</span>
                                    </div>
                                    <div className="px-2">
                                        <i className="fa fa-road text-primary mr-1"></i>
                                        <span>25K</span>
                                    </div>
                                </div>
                                <a className="btn btn-primary px-3" href="">
                                    $99.00/Day
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="rent-item active mb-4">
                                <img className="img-fluid mb-4" src="/images/car-rent-2.png" alt="" />
                                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="px-2">
                                        <i className="fa fa-car text-primary mr-1"></i>
                                        <span>2015</span>
                                    </div>
                                    <div className="px-2 border-left border-right">
                                        <i className="fa fa-cogs text-primary mr-1"></i>
                                        <span>AUTO</span>
                                    </div>
                                    <div className="px-2">
                                        <i className="fa fa-road text-primary mr-1"></i>
                                        <span>25K</span>
                                    </div>
                                </div>
                                <a className="btn btn-primary px-3" href="">
                                    $99.00/Day
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="rent-item mb-4">
                                <img className="img-fluid mb-4" src="/images/car-rent-3.png" alt="" />
                                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="px-2">
                                        <i className="fa fa-car text-primary mr-1"></i>
                                        <span>2015</span>
                                    </div>
                                    <div className="px-2 border-left border-right">
                                        <i className="fa fa-cogs text-primary mr-1"></i>
                                        <span>AUTO</span>
                                    </div>
                                    <div className="px-2">
                                        <i className="fa fa-road text-primary mr-1"></i>
                                        <span>25K</span>
                                    </div>
                                </div>
                                <a className="btn btn-primary px-3" href="">
                                    $99.00/Day
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="rent-item mb-4">
                                <img className="img-fluid mb-4" src="/images/car-rent-4.png" alt="" />
                                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="px-2">
                                        <i className="fa fa-car text-primary mr-1"></i>
                                        <span>2015</span>
                                    </div>
                                    <div className="px-2 border-left border-right">
                                        <i className="fa fa-cogs text-primary mr-1"></i>
                                        <span>AUTO</span>
                                    </div>
                                    <div className="px-2">
                                        <i className="fa fa-road text-primary mr-1"></i>
                                        <span>25K</span>
                                    </div>
                                </div>
                                <a className="btn btn-primary px-3" href="">
                                    $99.00/Day
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="rent-item mb-4">
                                <img className="img-fluid mb-4" src="/images/car-rent-5.png" alt="" />
                                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="px-2">
                                        <i className="fa fa-car text-primary mr-1"></i>
                                        <span>2015</span>
                                    </div>
                                    <div className="px-2 border-left border-right">
                                        <i className="fa fa-cogs text-primary mr-1"></i>
                                        <span>AUTO</span>
                                    </div>
                                    <div className="px-2">
                                        <i className="fa fa-road text-primary mr-1"></i>
                                        <span>25K</span>
                                    </div>
                                </div>
                                <a className="btn btn-primary px-3" href="">
                                    $99.00/Day
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-2">
                            <div className="rent-item mb-4">
                                <img className="img-fluid mb-4" src="/images/car-rent-6.png" alt="" />
                                <h4 className="text-uppercase mb-4">Mercedes Benz R3</h4>
                                <div className="d-flex justify-content-center mb-4">
                                    <div className="px-2">
                                        <i className="fa fa-car text-primary mr-1"></i>
                                        <span>2015</span>
                                    </div>
                                    <div className="px-2 border-left border-right">
                                        <i className="fa fa-cogs text-primary mr-1"></i>
                                        <span>AUTO</span>
                                    </div>
                                    <div className="px-2">
                                        <i className="fa fa-road text-primary mr-1"></i>
                                        <span>25K</span>
                                    </div>
                                </div>
                                <a className="btn btn-primary px-3" href="">
                                    $99.00/Day
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Rent A Car End --> */}

            {/* <!-- Team Start --> */}
            {/* <!-- <div className="container-fluid py-5">
    <div className="container py-5">
    <h1 className="display-1 text-primary text-center">04</h1>
    <h1 className="display-4 text-uppercase text-center mb-5">Meet Our Team</h1>
    <div className="owl-carousel team-carousel position-relative" style={{padding: 0 30px;">
        <div className="team-item">
            <img className="img-fluid w-100"  src="/images/team-1.jpg" alt="">
            <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div className="team-item">
            <img className="img-fluid w-100"  src="/images/team-2.jpg" alt="">
            <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div className="team-item">
            <img className="img-fluid w-100"  src="/images/team-3.jpg" alt="">
            <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        <div className="team-item">
            <img className="img-fluid w-100"  src="/images/team-4.jpg" alt="">
            <div className="position-relative py-4">
                <h4 className="text-uppercase">Full Name</h4>
                <p className="m-0">Designation</p>
                <div className="team-social position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-primary btn-lg-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    Team End --> */}

            {/* <!-- Banner Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row mx-0">
                        <div className="col-lg-6 px-0">
                            <div className="px-5 bg-secondary d-flex align-items-center justify-content-between" style={{ height: "350px" }}>
                                <img className="img-fluid flex-shrink-0 ml-n5 w-50 mr-4" src="/images/banner-left.png" alt="" />
                                <div className="text-right">
                                    <h3 className="text-uppercase text-light mb-3">provide your car become a host?</h3>
                                    <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                                    <a className="btn btn-primary py-2 px-4" href="">
                                        Start Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 px-0">
                            <div className="px-5 bg-dark d-flex align-items-center justify-content-between" style={{ height: "350px" }}>
                                <div className="text-left">
                                    <h3 className="text-uppercase text-light mb-3">Looking for a car?</h3>
                                    <p className="mb-4">Lorem justo sit sit ipsum eos lorem kasd, kasd labore</p>
                                    <a className="btn btn-primary py-2 px-4" href="">
                                        Start Now
                                    </a>
                                </div>
                                <img className="img-fluid flex-shrink-0 mr-n5 w-50 ml-4" src="/images/banner-right.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Banner End --> */}

            {/* <!-- Testimonial Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <h1 className="display-1 text-primary text-center">05</h1>
                    <h1 className="display-4 text-uppercase text-center mb-5">Our Client's Say</h1>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <img className="img-fluid ml-n4" src="/images/testimonial-1.jpg" alt="" />
                                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
                            </div>
                            <h4 className="text-uppercase mb-2">Client Name</h4>
                            <i className="mb-2">Profession</i>
                            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                        </div>
                        <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <img className="img-fluid ml-n4" src="/images/testimonial-2.jpg" alt="" />
                                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
                            </div>
                            <h4 className="text-uppercase mb-2">Client Name</h4>
                            <i className="mb-2">Profession</i>
                            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                        </div>
                        <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <img className="img-fluid ml-n4" src="/images/testimonial-3.jpg" alt="" />
                                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
                            </div>
                            <h4 className="text-uppercase mb-2">Client Name</h4>
                            <i className="mb-2">Profession</i>
                            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                        </div>
                        <div className="testimonial-item d-flex flex-column justify-content-center px-4">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <img className="img-fluid ml-n4" src="/images/testimonial-4.jpg" alt="" />
                                <h1 className="display-2 text-white m-0 fa fa-quote-right"></h1>
                            </div>
                            <h4 className="text-uppercase mb-2">Client Name</h4>
                            <i className="mb-2">Profession</i>
                            <p className="m-0">Kasd dolor no lorem nonumy sit labore tempor at justo rebum rebum stet, justo elitr dolor amet sit sea sed</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Testimonial End --> */}

            {/* <!-- Contact Start --> */}
            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <h1 className="display-1 text-primary text-center">06</h1>
                    <h1 className="display-4 text-uppercase text-center mb-5">Contact Us</h1>
                    <div className="row">
                        <div className="col-lg-7 mb-2">
                            <div className="contact-form bg-light mb-4" style={{ padding: "30px" }}>
                                <form>
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <input type="text" className="form-control p-4" placeholder="Your Name" required="required" />
                                        </div>
                                        <div className="col-6 form-group">
                                            <input type="email" className="form-control p-4" placeholder="Your Email" required="required" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control p-4" placeholder="Subject" required="required" />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control py-3 px-4" rows="5" placeholder="Message" required="required"></textarea>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary py-3 px-5" type="submit">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5 mb-2">
                            <div className="bg-secondary d-flex flex-column justify-content-center px-5 mb-4" style={{ height: "435px" }}>
                                <div className="d-flex mb-3">
                                    <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3"></i>
                                    <div className="mt-n1">
                                        <h5 className="text-light">Head Office</h5>
                                        <p>123 Street, New York, USA</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <i className="fa fa-2x fa-map-marker-alt text-primary flex-shrink-0 mr-3"></i>
                                    <div className="mt-n1">
                                        <h5 className="text-light">Branch Office</h5>
                                        <p>123 Street, New York, USA</p>
                                    </div>
                                </div>
                                <div className="d-flex mb-3">
                                    <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3"></i>
                                    <div className="mt-n1">
                                        <h5 className="text-light">Customer Service</h5>
                                        <p>customer@example.com</p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <i className="fa fa-2x fa-envelope-open text-primary flex-shrink-0 mr-3"></i>
                                    <div className="mt-n1">
                                        <h5 className="text-light">Return & Refund</h5>
                                        <p className="m-0">refund@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Contact End --> */}

            {/* <!-- Vendor Start --> */}
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="owl-carousel vendor-carousel">
                        <div className="bg-light p-4">
                            <img src="/images/vendor-1.png" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="/images/vendor-2.png" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="/images/vendor-3.png" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="/images/vendor-4.png" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="/images/vendor-5.png" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="/images/vendor-6.png" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="/images/vendor-7.png" alt="" />
                        </div>
                        <div className="bg-light p-4">
                            <img src="/images/vendor-8.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Vendor End --> */}

            {/* <!-- Footer Start --> */}
            <div className="container-fluid bg-secondary py-5 px-sm-3 px-md-5" style={{ marginTop: "90px" }}>
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt text-white mr-3"></i>123 Street, New York, USA
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-phone-alt text-white mr-3"></i>+012 345 67890
                        </p>
                        <p>
                            <i className="fa fa-envelope text-white mr-3"></i>info@example.com
                        </p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="text-uppercase text-light mb-4">Usefull Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <a className="text-body mb-2" href="#">
                                <i className="fa fa-angle-right text-white mr-2"></i>Private Policy
                            </a>
                            <a className="text-body mb-2" href="#">
                                <i className="fa fa-angle-right text-white mr-2"></i>Term & Conditions
                            </a>
                            <a className="text-body mb-2" href="#">
                                <i className="fa fa-angle-right text-white mr-2"></i>New Member Registration
                            </a>
                            <a className="text-body mb-2" href="#">
                                <i className="fa fa-angle-right text-white mr-2"></i>Affiliate Programme
                            </a>
                            <a className="text-body mb-2" href="#">
                                <i className="fa fa-angle-right text-white mr-2"></i>Return & Refund
                            </a>
                            <a className="text-body" href="#">
                                <i className="fa fa-angle-right text-white mr-2"></i>Help & FQAs
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        {/* <!-- <h4 className="text-uppercase text-light mb-4">Car Gallery</h4> --> */}
                        <div className="row mx-n1">
                            <h6 className="text-uppercase text-white py-2">Follow Us</h6>
                            <div className="d-flex justify-content-start">
                                <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="btn btn-lg btn-dark btn-lg-square mr-2" href="#">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                                <a className="btn btn-lg btn-dark btn-lg-square" href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        {/* <!-- <h4 className="text-uppercase text-light mb-4">Newsletter</h4> --> */}
                        {/* <!-- <p className="mb-4">Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed
                    kasd et</p> --> */}
                        <div className="w-100 mb-3">
                            <div className="input-group">
                                <input type="text" className="form-control bg-dark border-dark" style={{ padding: "25px" }} placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary text-uppercase px-3">Sign Up</button>
                                </div>
                            </div>
                        </div>
                        <i>Lorem sit sed elitr sed kasd et</i>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark py-4 px-sm-3 px-md-5">
                <p className="mb-2 text-center text-body">
                    &copy; <a href="#">Ecar</a>. All Rights Reserved.
                </p>

                {/* <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
            </div>
            {/* <!-- Footer End --> */}

            {/* <!-- Back to Top --> */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="fa fa-angle-double-up"></i>
            </a>
        </>
    );
};

export default Dashboard;
