import React from 'react';
import ReactDOM  from 'react-dom';
import CustomComponent from './components/CustomComponent';
import CustomPureComponent from './components/CustomPureComponent';

const elemStyle = {
    width: '150px',
    backgroundColor: 'blue',
    color: 'white',
    padding: '15px',
    margin: '15px'
}

///////////////////////React.createElement//////////////////////////

const element = React.createElement(
    'div',
    {
        style: elemStyle
    },
    "Hello world from CreateElement!!!"
);

ReactDOM.render(element, document.getElementById('createElement'));

//////////////////////functional component////////////////////////////

const FuncComponent = (props) =>{
    return <div style={props.style}>{props.text}</div>
};

ReactDOM.render(
    <FuncComponent style={elemStyle} text={'Hello world from FuncComponent!!!'} />,
    document.getElementById('funcComponent')
);

//////////////////////React.Component///////////////////////////

const customComponent = <CustomComponent style={elemStyle} text={'Hello world from Component!!!'} />;

ReactDOM.render(customComponent, document.getElementById('component'));

//////////////////////React.PureComponent///////////////////////////

const customPureComponent = <CustomPureComponent style={elemStyle} text={'Hello world from PureComponent!!!'} />;

ReactDOM.render(customPureComponent, document.getElementById('pureComponent'));