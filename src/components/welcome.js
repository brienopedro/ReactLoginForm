import React from 'react';
import LoginForm from './login';
import Navbar from './navbar';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
            <Navbar />
            <LoginForm />
            </div>
        );
    }
}
