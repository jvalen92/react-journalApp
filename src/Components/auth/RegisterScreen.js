import React from 'react'
import { Link } from 'react-router-dom';
import { routes } from '../../const'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';


const RegisterScreen = () => {

    const [formValues, handleInputChange] = useForm({
        name: 'Angelica',
        lastName: 'Aguirre',
        email: 'amaguirre09@gmail.com',
        password: '123456',
        password2: '123456'
    })

    const { name, lastName, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            console.log('Formulrio Correcto');
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0) {
            console.log('name is required');
            return false
        }else if (!validator.isEmail(email)) {
            console.log('Email is not valid');
        }else if (password !== password2 || password.length < 5) {
            console.log('Passowrd should be at least 6 characters and match each other');
            return false;
        }

        

        return true;
    }
    return (
        <>
            <h3 className='.auth__tittle'>Register</h3>

            <form onSubmit={handleRegister} >

                <div className="auth__alert-error">
                    Hola Mundo
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="LastName"
                    className="auth__input"
                    autoComplete="off"
                    value={lastName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    value={password2}
                    onChange={handleInputChange}
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
