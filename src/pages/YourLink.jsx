import * as React from 'react';
import '../css/YourLink/YourLink.css';

import Picture from '../component/Picture/Picture';
import Button from '../component/Button/Button';

import ButtonEditor from '../component/ButtonEditor/ButtonEditor';

/*  lz-string */
/*import * as LZString from 'lz-string';*/


export default class YourLink extends React.Component {

    constructor(props) {
        super(props);

        console.log("=== YourLink ===");

        const load = (data) => {
            data = decodeURIComponent(atob(data))
            console.log(data);
            //data = LZString.decompress(data);
            data = JSON.parse(data);
            this.state = {
                EditeMode: false,
                name: data.name,
                picture: data.picture,
                description: data.description,
                buttons: data.buttons,
                background: data.background,
            }

            /* backgound */
            /*
                background-image: url("../../../public/background-image.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center;
            */
        }

        if (this.props.user === 'create') {
            this.state = {
                EditeMode: true,
                name: "Your Name",
                picture: "https://www.w3schools.com/howto/img_avatar.png",
                description: "Your Description",
                buttons: [],
                background: "https://www.w3schools.com/howto/img_avatar.png",
            }
        } else {
            if (this.props.user === ">") {
                const hash = window.location.hash
                if (hash[0] === "#" &&
                    hash[1] === "/") {
                    const data = hash.slice(2);
                    load(data);
                }
            }
            else {
                load(this.props.user);
            }
        }
    }

    render() {

        document.body.style.backgroundImage = `url(${this.state.background})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundPosition = "center";

        return (
            <div className="YourLink">

                {this.state.EditeMode ? (
                    <div className="EditeBackground">
                        <label for="background-image"> Background Image </label>
                        <input id="background-image" type="text"
                            value={this.state.background}
                            onChange={(e) => this.setState({
                                background: e.target.value
                            })}
                        />
                    </div>
                ) : null}

                <Picture
                    EditeMode={this.state.EditeMode} src={this.state.picture}
                    onChange={(src) => {
                        this.setState({
                            picture: src
                        })
                    }}
                ></Picture>

                {this.state.EditeMode ? (
                    <div className="EditeName">
                        <input type="text"
                            value={this.state.name}
                            onChange={(e) => this.setState({
                                name: e.target.value
                            })}
                        />
                    </div>
                ) : (<h1>{this.state.name}</h1>)}


                {this.state.EditeMode ? (
                    <div className="EditeDescription">
                        <textarea value={this.state.description}
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                    </div>
                ) : (<p>{this.state.description}</p>)}

                {this.state.EditeMode ?
                    (<ButtonEditor
                        data={this.state.buttons}
                        onChange={
                            (data) => {
                                this.setState({ buttons: data })
                            }
                        }
                    />)
                    : (
                        <div className='Buttons'>
                            {
                                this.state.buttons.map((button, index) => {
                                    return <Button
                                        key={index}
                                        type={button.type} _={button.name}>{button.type}
                                    </Button>
                                })}
                        </div>)
                }

                <div className="Create">
                    <a href="/#" onClick={(e) => {
                        e.preventDefault();

                        if (this.state.EditeMode) {
                            const data = JSON.stringify(this.state);

                            /*LZString*/
                            //console.log("x:" + );
                            //console.log("y:" + LZString.compress(data).length);
                            //console.log("z:" + LZString.decompress(LZString.compress(data)));

                            //let x = LZString.compress(data);

                            //let y = LZString.compressToEncodedURIComponent(data);

                            //console.log(x.length, y.length);
                            //console.log(y)


                            //window.location.href = `http://localhost:3000/>/#/`;
                            window.location.href = `http://localhost:3000/>/#/${encodeURIComponent(btoa(data))}`;
                        }
                        this.setState({ EditeMode: !this.state.EditeMode })
                    }}>Create Your</a>
                </div>
            </div>
        );
    }
}