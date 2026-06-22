import { useState } from "react";
import CreateUser from '../../services/userService'
import './createUserForm.css'
const CreateUserForm = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formValues.password !== formValues.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        CreateUser.postUserInfo(formValues)
        // Add registration logic here
    };



    return (
        <div className="d-flex justify-content-center align-items-center mt-5 ">
            <div className="card shadow-lg py-5 px-3" style={{ maxWidth: '500px', width: '100%' }}>
                <form className="register-form w-100" autoComplete="false" onSubmit={handleSubmit}>
                    <h2 className="text-center mb-4 fw-bold text-primary">Create an Account</h2>
                    <div className="d-flex w-100 justify-content-between">
                        <div className="mb-3 w-50 px-2">
                            <label className="form-label fw-500">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formValues.firstName}
                                onChange={handleChange}
                                required
                                className="form-control form-control-lg"
                                placeholder="Enter your first name"
                            />
                        </div>

                        <div className="mb-3 w-50 px-2">
                            <label className="form-label fw-500">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formValues.lastName}
                                onChange={handleChange}
                                required
                                className="form-control form-control-lg"
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>
                    <div className="mb-3 px-2">
                        <label className="form-label fw-500">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            required
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="d-flex w-100 justify-content-between">
                        <div className="mb-3 w-50 px-2">
                            <label className="form-label fw-500">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                                required
                                className="form-control form-control-lg"
                                placeholder="Enter your password"
                            />
                        </div>

                        <div className="mb-4 w-50 px-2">
                            <label className="form-label fw-500">Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                                required
                                className="form-control form-control-lg"
                                placeholder="Confirm your password"
                            />
                        </div>
                    </div>
                    <div className="px-2">
                        <button type="submit" className="btn btn-primary btn-lg w-100 fw-bold">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateUserForm;