import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../src/Styles/footer.css';
export default class Footer extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="footer">

                <footer className="footer-base container-fluid">
                    <div className="row text-center ">

                        {/*<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                                <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit.</p>
                            </div>*/}
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <p>
                                <a href="#!">About Us</a>
                            </p>
                            <p>
                                <a href="#!">Carrers</a>
                            </p>
                            <p>
                                <a href="#!">Privacy Policy</a>
                            </p>
                            <p>
                                <a href="#!">Site Map</a>
                            </p>
                        </div>
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                                <a href="#!">Life Insurance</a>
                            </p>
                            <p>
                                <a href="#!">Travel Insurance</a>
                            </p>
                            <p>
                                <a href="#!">Health Insurance</a>
                            </p>
                        </div>
                        <div className="col-sm-4 col-xs-4 col-md-4 col-lg-4">
                            <h6 className="text-uppercase  font-weight-bold">Contact</h6>
                            <p>
                                <i className="fa fa-home "></i> New York, NY 10012, US</p>
                            <p>
                                <i className="fa fa-envelope"></i> info@gmail.com</p>
                            <p>
                                <i className="fa fa-phone "></i> + 01 234 567 88</p>
                            <p>
                                <i className="fa fa-print"></i> + 01 234 567 89</p>
                        </div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-sm-6 col-xs-5 col-md-7 col-lg-7">

                            <p className="text-right ">© 2018 Copyright:
            <a href="#">
                                    <strong> XYZ.com</strong>
                                </a>
                            </p>

                        </div>
                        <div className="col-sm-6 col-xs-7 col-md-5 col-lg-5">

                            <div className="text-right">
                                <ul className="social">
                                    <li>
                                        <a href="https://twitter.com/" title="Twitter">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" title="Facebook">
                                            <span className="fa fa-facebook"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://plus.google.com/" title="Google+">
                                            <span className="fa fa-google-plus"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </footer>

            </div>
        );

    }
}