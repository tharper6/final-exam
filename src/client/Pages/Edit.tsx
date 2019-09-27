import * as React from 'react';

class Edit extends React.Component<IEditProps, IEditState> {

    constructor(props: IEditProps) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <main className="container my-5">
                <h1>Edit</h1>
            </main>
        )
    }
}

export interface IEditProps { }

export interface IEditState {}

export default Edit;