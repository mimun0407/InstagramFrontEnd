
import React, { useState } from 'react';
import './login.css';
import { FaFacebookSquare } from "react-icons/fa";
import myImage from '../assets/image/myImage.png';
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const Login = () => {

    const [IsPassword, setIsPassword] = useState(false);
    const activitiesPassword = () => {
        setIsPassword(!IsPassword);
    }

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="content-wrapper d-flex" style={{ marginRight: '120px' }}>
                <div className="image-section d-none d-lg-block">
                    <img src={myImage} alt="Instagram preview" className="img-fluid" />
                </div>
                <div className="login-section">
                    <div className="card p-4 shadow-sm">
                        <img className="text-center font-instagram" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' />
                        <form className='mt-4'>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Phone number, username, or email"
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type={IsPassword ? "text" : "password"}
                                    className="form-control"
                                    placeholder="Password"
                                />
                                <span
                                    onClick={activitiesPassword}
                                    className="ig-icon position-absolute translate-middle-y"
                                >
                                    {IsPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                </span>
                            </div>
                            <button type="submit" className="btn btn-primary w-100">Log In</button>
                        </form>
                        <div className="text-center my-3 position-relative">
                            <div className="or-divider">
                                <span>OR</span>
                            </div>
                        </div>
                        <button className="btn btn-link text-decoration-none w-100">
                            <a className='text-decoration-none btn-link ' href='https://www.facebook.com/login/?locale=vi_VN'>
                                <FaFacebookSquare /> Log in with Facebook
                            </a>
                        </button>
                        <p className="text-center mt-3">
                            <a href="#" className="ig-text-forgot text-decoration-none">Forgot password?</a>
                        </p>
                    </div>
                    <div className="card mt-3 p-4 text-center">
                        <p className='ig-text'>Don't have an account? <a href="/signup" className="text-primary text-decoration-none">Sign up</a></p>
                    </div>
                    <div className="download-section text-center mt-3">
                        <p>Get the app.</p>
                        <div className="d-flex justify-content-center">
                            <a href='https://apps.apple.com/us/app/instagram/id389801252'>
                                <img src="https://static.cdninstagram.com/rsrc.php/v3/yt/r/Yfc020c87j0.png" alt="App Store" className="app-badge" />
                            </a>
                            <a href='https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D1C032558-14E3-4054-8760-6570776B1F27%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%3A%2F%2Fwww.google.com%2F'>
                                <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="Google Play" className="app-badge" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
