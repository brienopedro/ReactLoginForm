import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <h3>Log in</h3>
                <div>
                    <form>
                    <input type="text" placeholder="User Name" name="userName" />
                    <br />
                    <input type="text" placeholder="Password" name="password" />
                    <br/>
                    <button>Log in</button>
                    </form>
                </div>
            </div>
        );
    }
}