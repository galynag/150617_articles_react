import React, {Component} from 'react';
import {Link} from 'react-router';

export default class MainLayout extends Component {
    render() {
        return(
            <div className="container">
                <aside>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/mvc">MVC</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/movies">Movies</Link></li>
                        <li><Link to="/store">Books Store</Link></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    };
};
