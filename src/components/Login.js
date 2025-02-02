import React from 'react';
import loginSchema from '../verification/loginSchema';
import { Link } from "react-router-dom";
import useForm from '../hooks/useForm';

const defaultValues = {
    username: "",
    password: "",
}

export default function Login() {

    const [formValues, error, reset, change] = useForm(loginSchema, defaultValues)

    const submit = evt => {
        evt.preventDefault();
        // api post request goes here
        reset()
    }

    return (
        <form onSubmit={submit}>
            <h2>Create an Account:</h2>
            <label for="username">
                Username:
                <input 
                    type="text"
                    name="username"
                    id="username"
                    onChange={change}
                    value={formValues.username}
                />
            </label>
            <label for="password">
                Password:
                <input 
                    type="password"
                    name="password"
                    id="password"
                    onChange={change}
                    value={formValues.password}
                />
            </label>
            <button disabled={error}
            type="submit">Login</button>
            <Link to="/sign-up">Create an account?</Link>
        </form>
    )
}
