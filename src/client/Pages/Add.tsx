import * as React from 'react';

class Add extends React.Component<IAddProps, IAddState> {

    constructor(props: IAddProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className="container my-5">
                <h1>Add</h1>
            </main>
        )
    }
}

export interface IAddProps { }

export interface IAddState {}

export default Add;