import React, {Component} from 'react';
import axios from 'axios';

export default class Movies extends Component {
    state = {
        search: '',
        books: [],
        loading: true,
        error: null
    };
    valueInput = (e) => {
        this.setState({search: e.target.value})
    };
    componentDidMount () {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=Harry&key=AIzaSyA7gjbadpyT8hPDfVfPUpbZFkhKwfi_C0A')
            .then(res => {
                this.setState({
                    books: res.data.items,
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
        const { error, books } = this.state;
        let booksNewArray = books.filter(item =>{
            let input2 = this.state.search.toLowerCase();
            let item2=item.volumeInfo.title.toLowerCase();
            if(item2.indexOf(input2) >= 0) {
                return true
            }
        });

        if(error) {
            return this.renderError;
        }

        return (
            <div>
                {booksNewArray.map(item =>
                    <div key={item.id} className="movies-item">
                        <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.title}/>

                        <a href='#' target="_blank">{item.volumeInfo.title}</a>

                    </div>
                )}
            </div>
        );

    }
    render() {
        const {loading} = this.state;

        return (
            <div>
                <header>
                    <div id="logo">

                    </div>
                    <h1>Book Store</h1>
                    <input
                        type="text"
                        placeholder= "Enter text for filter"
                        value={this.state.search}
                        onChange={this.valueInput}
                    />
                </header>
                <div id="reclama"></div>

                { loading ? this.renderLoading() : this.renderPosts()}
            </div>
        );
    }
}
