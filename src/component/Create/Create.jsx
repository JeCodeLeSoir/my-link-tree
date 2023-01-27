import React from 'react';

export default class Create extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            IsCreate: false
        }
    }

    render() {
        const form = (
            <form>
                <textarea>

                </textarea>

                <button type="submit">Confirm</button>
            </form>)

        return (
            <div className="Create">
                <button onClick={() => this.setState({ IsCreate: !this.state.IsCreate })}>
                    Create Your
                </button>
                {this.state.IsCreate ? form : null}
            </div>
        );
    }
}