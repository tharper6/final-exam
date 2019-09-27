import * as React from 'react';

class Login extends React.Component<ILoginProps, ILoginState> {

    constructor(props: ILoginProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className="container my-5">
                <h1>Login</h1>
            </main>
        )
    }
}

export interface ILoginProps { }

export interface ILoginState {}

export default Login;