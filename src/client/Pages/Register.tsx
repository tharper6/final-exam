import * as React from 'react';

class Register extends React.Component<IRegisterProps, IRegisterState> {

    constructor(props: IRegisterProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className="container my-5">
                <h1>Register</h1>
            </main>
        )
    }
}

export interface IRegisterProps { }

export interface IRegisterState {}

export default Register;