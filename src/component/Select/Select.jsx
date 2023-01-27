import React from 'react';

import './Select.css';

export default class Select extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            on: false
        }
    }

    render() {

        const options = this.props.options.map((option, index) => {
            return (<a
                key={index}
                href="/#"
                onClick={
                    (e) => {
                        e.preventDefault()
                        this.setState({ value: option.value, on: false })
                        this.props.onChange(option.value)
                    }
                }
            ><img
                    alt={option.value}
                    src={"https://img.icons8.com/color/48/ffffff/" + option.icon}
                /></a>)
        })

        const ValueInOption = (Value) => {
            let v = this.props.options.find((option) => {
                return option.value.toLowerCase() === Value.toLowerCase()
            })
            if (v !== undefined)
                return v.icon
            else
                return this.props.options[0].icon
        }

        return (
            <div className='Select'
                onBlur={(e) => {
                    if (!e.relatedTarget) {
                        this.setState({ on: false })
                        return
                    }

                    //console.log(e.relatedTarget.parentElement)
                    //console.log(e.relatedTarget.parentElement.parentElement)

                    if (e.relatedTarget.parentElement.parentElement !== e.target.parentElement) {
                        console.log('== blur ==')
                        this.setState({ on: false })
                    }

                }}
            >
                <div className='Select-value'>
                    {
                        this.state.value === "" ?
                            <img
                                alt={this.props.options[0].value}
                                src={"https://img.icons8.com/color/48/ffffff/" + this.props.options[0].icon} />
                            :
                            <img
                                alt={this.state.value}
                                src={"https://img.icons8.com/color/48/ffffff/" + ValueInOption(this.state.value)} />
                    }
                </div>
                <div
                    onBlur={() => {
                        //console.log('== blur ==')
                        //this.setState({ on: false })
                    }}
                    onFocus={() => {
                        // console.log('== focus ==')
                        // this.setState({ on: false })
                    }}
                    className={'Select-options ' + (this.state.on ? 'visible' : '')} >
                    {options}
                </div>
                <a href="/#"
                    className='Select-button'
                    onClick={(e) => {
                        e.preventDefault()
                        this.setState({ on: !this.state.on })
                    }}
                >
                    <img
                        alt='down'
                        src="https://img.icons8.com/color/48/ffffff/down.png"
                    />
                </a>
            </div>
        )
    }
}