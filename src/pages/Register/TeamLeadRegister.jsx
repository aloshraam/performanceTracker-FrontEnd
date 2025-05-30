import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import axios from "axios"; // Import Axios library
import Navbar from "../../components/Header/Navbar";

const TeamLeadRegister = () => {
    const [name, setName] = useState("");
    const [email_address, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");
    const [phoneno, setPhoneNo] = useState("");
    const [username, setUserName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [home_address, setHomeAdress] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const registerUser = async () => {
        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/teamleadapi/register/",
                {
                    name,
                    email_address,
                    phoneno,
                    username,
                    password,
                    home_address
                }
            );
    
            Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: "You have successfully registered.",
            }).then(() => {
                console.log(response.data);
                navigate("/");
            });
    
        } catch (error) {
            console.error("Registration error:", error);
    
            if (error.response?.data?.username) {
                setErrorMessage(error.response.data.username[0]);
            } else if (error.response?.data?.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("Registration failed");
            }
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setErrorMessage("");
        await registerUser();
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="min-h-screen flex justify-center items-center bg-gray-100">
                <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
                        Register to your account
                    </h2>
                    <form onSubmit={handleRegister} className="space-y-6">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Full Name
                            </label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                required
                                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-900"
                            >
                                User Name
                            </label>
                            <input
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                                type="text"
                                required
                                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Email address
                            </label>
                            <input
                                value={email_address}
                                onChange={(e) =>
                                    setEmailAddress(e.target.value)
                                }
                                type="email"
                                required
                                className="block w-full py-2 pl-3 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-900 relative"
                            >
                                Password
                                <input
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    type={showPassword ? "text" : "password"}
                                    required
                                    className="block w-full pl-3  py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                                />
                                <span
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute inset-y-0 right-0 flex items-center pt-4 pr-3 cursor-pointer"
                                >
                                    {showPassword ? <FiEyeOff /> : <FiEye />}
                                </span>
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Home Adress
                            </label>
                            <input
                                value={home_address}
                                onChange={(e) => setHomeAdress(e.target.value)}
                                type="text"
                                required
                                className="block w-full py-2 pl-3 pr-3 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="phoneno"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Phone Number
                            </label>
                            <input
                                value={phoneno}
                                onChange={(e) => setPhoneNo(e.target.value)}
                                type="tel"
                                required
                                className="block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            {errorMessage && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errorMessage}
                                </p>
                            )}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <Link
                            to={"/login"}
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default TeamLeadRegister;
