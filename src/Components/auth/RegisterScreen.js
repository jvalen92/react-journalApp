import React from 'react'
import { Link } from 'react-router-dom';
import { routes } from '../../const'


const RegisterScreen = () => {
    return (
        <>
            <h3 className='.auth__tittle'>Register</h3>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="Last Name"
                    className="auth__input"
                    autoComplete="off"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password1"
                    className="auth__input"
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                />


                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-5"
                >
                    Register
                </button>


                <Link
                    to={routes.login}
                    className="link"
                >
                    Alredy Register?
                </Link>

            </form>

        </>
    )
}

export default RegisterScreen
