import React from 'react';
import './header.scss';
import {Logo} from '../common/logo/logo';
import {SearchForm} from './searchForm/searchForm';

export class Header extends React.PureComponent {
    render() {
        return (
            <div className='header'>
                <Logo />
				<SearchForm />
            </div>
        )
    }
}