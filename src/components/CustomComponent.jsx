import React from 'react';

export class CustomComponent extends React.Component {
    render() {
        return (
            <div style={this.props.style}>{this.props.text}</div>
        )
    }
}