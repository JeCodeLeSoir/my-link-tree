import React from 'react';

import Select from '../Select/Select';
import './ButtonEditor.css';

export default class ButtonEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }

    render() {

        const buttons = this.state.data.map((button, index) => {
            return (
                <div className='add-form'
                    key={index}
                >
                    <a className='remove'
                        href='/#'
                        onClick={(e) => {
                            e.preventDefault();
                            let data = this.state.data;
                            data.splice(index, 1);
                            this.setState({ data: data }, () => {
                                this.props.onChange(this.state.data);
                            });
                        }}
                    >
                        <img alt='remove' src='https://img.icons8.com/color/48/ffffff/delete-sign.png' />
                    </a>
                    <Select
                        value={button.type}
                        options={[
                            { value: 'instagram', icon: 'instagram-new.png' },
                            { value: 'facebook', icon: 'facebook-new.png' },
                            { value: 'twitter', icon: 'twitter.png' },
                            { value: 'linkedin', icon: 'linkedin.png' },
                            { value: 'youtube', icon: 'youtube-play.png' },
                            { value: 'github', icon: 'github.png' },
                            { value: 'reddit', icon: 'reddit.png' },
                            { value: 'twitch', icon: 'twitch.png' },
                            { value: 'tiktok', icon: 'tiktok.png' },
                            { value: 'snapchat', icon: 'snapchat.png' },
                            { value: 'pinterest', icon: 'pinterest.png' },
                            { value: 'spotify', icon: 'spotify.png' },
                            { value: 'soundcloud', icon: 'soundcloud.png' },
                        ]}
                        onChange={(value) => {
                            let data = this.state.data
                            data[index].type = value
                            this.setState({ data: data })
                        }}
                    >
                    </Select>
                    <input type="text"
                        value={button.name}
                        onChange={(value) => {
                            let data = this.state.data
                            data[index].name = value.target.value
                            this.setState({ data: data })
                        }}
                    />
                </div>
            )
        })

        return (
            <div className='Buttons'>
                {buttons}
                <a href="/#" className='add'
                    onClick={(e) => {
                        e.preventDefault()
                        this.setState({
                            data: this.state.data.concat({
                                type: 'instagram',
                                name: ''
                            })
                        }, () => this.props.onChange(this.state.data))
                    }}
                >
                    <img
                        alt='add'
                        src="https://img.icons8.com/ios/50/ffffff/plus.png" />
                </a>
            </div>
        )
    }
}