import { useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

export const FormularioComponent = () => {

    const focusRef = useRef();

    console.log(focusRef);

    const initialForm = {
        userName: "",
        email: "",
        password: ""
    }

    const { formState, onInputChange } = useForm(initialForm);

    const { userName, email, password } = formState;

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(formState);
    }

    useEffect(() => {
        focusRef.current.focus();
    }, []);

    return (
        <>
            <h1>Formulario Component</h1>

            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="userName"
                        aria-describedby="emailHelp"
                        value={userName}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        ref={focusRef}
                        type="email"
                        className="form-control"
                        name="email"
                        aria-describedby="emailHelp"
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit</button>
            </form>
        </>
    )
}
