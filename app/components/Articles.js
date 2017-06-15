import React, {Component} from 'react';
import axios from 'axios';


export default class Articles extends Component {

    state = {
        posts: [],
        loading: true,
        error: null
    }

    componentDidMount () {
        axios.get('https://www.reddit.com/r/reactjs.json')
            .then(res => {
                this.setState({
                    posts: res.data.data.children,
                    loading: false,
                    error: null
                });
            })

            .catch(err => {
                this.setState({
                    loading: false,
                    error: err
                });
            });
    }

    renderLoading() {
        return (
            <div>Loading...</div>
        );
    }

    renderError() {
        return(
            <div>Something went wrong {this.state.error.message}</div>
        );
    }

    renderPosts() {
        const { error, posts } = this.state;

        if(error) {
            return this.renderError;
        }

        return (
            <ul>
                {posts.map(post =>
                    <li key={post.data.id} > <a href={post.data.url} target="_blank">{post.data.title}</a></li>
                )}
            </ul>
        );
    }
    render() {
        const {loading} = this.state;

        return (
            <div>
                <h1>API</h1>
                { loading ? this.renderLoading() : this.renderPosts()}
            </div>
        );
    }
}