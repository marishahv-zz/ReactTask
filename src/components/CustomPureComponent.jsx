import React from 'react';

export class CustomPureComponent extends React.PureComponent {
    render() {
        return (
            <div style={this.props.style}>{this.props.text}</div>
        )
    }
}