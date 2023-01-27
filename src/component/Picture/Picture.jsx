import * as React from 'react';
import "./Picture.css";
export default class Picture extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            src: this.props.src,
            alt: this.props.alt
        }
    }

    render() {
        if (this.props.EditeMode) {
            return (
                <div className="Picture">
                    <img src={this.state.src} alt={this.props.alt} />
                    <div className="Picture-Edite" onClick={() => {
                        document.getElementById('input-picture').click()
                    }}>
                        <input id="input-picture" type="file" onChange={(e) => {
                            console.log(e.target.files[0]);
                            const reader = new FileReader();
                            reader.readAsDataURL(e.target.files[0]);
                            var image = new Image();

                            image.onload = () => {
                                var canvas = document.createElement('canvas');
                                var context = canvas.getContext('2d');

                                // resize image by ratio to fit in 200x200
                                var ratio = 1;
                                if (image.width > image.height) {
                                    ratio = 200 / image.width;
                                } else {
                                    ratio = 200 / image.height;
                                }
                                canvas.width = image.width * ratio;
                                canvas.height = image.height * ratio;

                                // draw image in canvas
                                context.drawImage(image, 0, 0, canvas.width, canvas.height);






                                var dataURL = canvas.toDataURL('image/jpeg', 0.5);
                                console.log(dataURL);
                                this.setState({
                                    src: dataURL
                                },
                                    () => {
                                        this.props.onChange(this.state.src);
                                    }
                                )

                            };

                            reader.onload = () => {
                                image.src = reader.result;

                            };
                        }} />
                    </div>
                </div>
            );
        } else {
            return (
                <div className="Picture">
                    <img src={this.state.src} alt={this.props.alt} />
                </div>
            );
        }
    }
}