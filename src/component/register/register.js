import React, { useState } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import "./register.css";
const Register = () => {
    const [IsPassword, setIsPassword] = useState(false);
    const activitiesPassword = () => {
        setIsPassword(!IsPassword);
    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="content-wrapper d-flex" style={{ marginRight: '60px' }}>
                    <div className="login-section">
                        <div className="card-register p-4 shadow-sm">
                            <img className="text-center font-instagram" src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png' />
                            <h5 className='ig-h5'>Sign up to see photos and videos from your friends.</h5>
                            <a className='btn btn-primary w-100 text-decoration-none' href='https://www.facebook.com/login/?locale=vi_VN'>
                                Log in with Facebook
                            </a>
                            <div className="text-center my-3 position-relative">
                                <div className="or-divider">
                                    <span>OR</span>
                                </div>
                            </div>
                            <form className=''>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Mobile Number or Email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Username"
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
                                        className="ig-icon-register position-absolute translate-middle-y"
                                    >
                                        {IsPassword ? <FaEyeSlash /> : <IoEyeSharp />}
                                    </span>
                                </div>
                                <p className="text-center mt-3">
                                    People who use our service may have uploaded your contact information to Instagram.
                                    <a href="https://www.facebook.com/help/instagram/261704639352628" className="text-center ig-text-forgot text-decoration-none"> Learn More</a>
                                </p>
                                <p className="text-center mt-3">
                                    By signing up, you agree to our
                                    <a href="https://help.instagram.com/581066165581870/?locale=en_US" className="text-center ig-text-forgot text-decoration-none"> Terms,</a>
                                    <a href="https://www.facebook.com/privacy/policy" className="text-center ig-text-forgot text-decoration-none"> Privacy Policy </a><br />
                                    and
                                    <a href="https://privacycenter.instagram.com/policies/cookies/" className="text-center ig-text-forgot text-decoration-none"> Cookies Policy</a>
                                </p>
                                <button type="submit" className="btn btn-primary w-100">Sign up</button>
                            </form>
                        </div>
                        <div className="card-register mt-3 p-4 text-center">
                            <p className='ig-text'>Have an account? <a href="/login" className="text-primary text-decoration-none">Login</a></p>
                        </div>
                        <div className="download-section-register text-center mt-3">
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
        </>
    );
}
export default Register;