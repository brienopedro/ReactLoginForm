import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <div>
               <nav>
                   <ul>
                       <li>Home</li>
                       <li>About</li>
                       <li>Contact</li>
                   </ul>
               </nav>
            </div>
        );
    }
}