import React from 'react';
import './navbar.css'
export default class Navbar extends React.Component {
    render() {
        return (
            <div>
               <nav>
                   <p>Virtual Board</p>
                   <ul>
                       <li><a href='#'>Home</a></li>
                       <li><a href='#'>About</a></li>
                       <li><a href='#'>Contact</a></li>
                   </ul>
               </nav>
            </div>
        );
    }
}