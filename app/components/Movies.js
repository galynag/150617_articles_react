import React, {Component} from 'react';
import axios from 'axios';

export default class Movies extends Component {
    state = {
        text : '',
        posts: [],
        loading: true,
        error: null
    };

    valueInput = (e) => {
        this.setState({text: e.target.value})
    };

    componentDidMount () {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2cdce3bbe05c745f380ca0af5874a2d8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1')
            .then(res => {
                this.setState({
                    posts: res.data.results,
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
        let filmsNewArray = posts.filter(item =>{
            let input2 = this.state.text.toLowerCase();
            let item2=item.title.toLowerCase();
            if(item2.indexOf(input2) >= 0) {
                return true
            }
        });

        if(error) {
            return this.renderError;
        }

        return (
            <div>
                {filmsNewArray.map(post =>
                    <div key={post.id} className="movies-item">
                        <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${post.poster_path}`}
                             alt={post.title}/>
                        <p>{`Language: ${post.original_language}`}</p>
                        <a href='#' target="_blank">{post.title}</a>
                        <p>{`Description: ${post.overview}`}</p>
                        <p>{`Raiting: ${post.popularity}`}</p>
                    </div>
                )}
            </div>
        );

    }
    render() {
        const {loading} = this.state;

        return (
            <div>
                <h1>Movies</h1>
                <input
                    type="text"
                    placeholder= "Enter text for filter"
                    value={this.state.text}
                    onChange={this.valueInput}
                />
                { loading ? this.renderLoading() : this.renderPosts()}
            </div>
        );
    }

}
