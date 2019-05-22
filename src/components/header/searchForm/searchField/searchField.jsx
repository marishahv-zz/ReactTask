import React from 'react';
import './searchField.scss'

export class SearchField extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
				<label className='title'>Find your movie</label>
				<input type='text'className='search-field'></input>
            </React.Fragment>
        )
    }
}