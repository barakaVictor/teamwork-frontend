import React from 'react';
import {connect} from 'react-redux';
import { createArticle } from '../../../redux/actions/article-actions';
import './CreateArticle.css';

class CreateArticle extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            article: {
                title: '',
                body: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.postArticle = this.postArticle.bind(this);
    };

    handleChange(e){
        this.setState({article:{...this.state.article, [e.target.name]: e.target.value}});
    };

    postArticle(e){
        e.preventDefault();
        this.props.createArticle(this.state.article);
    };

    render(){
        return (
            <div className="article">
                <form>
                    <label>Title
                        <input 
                            type="text" 
                            className="form-control" 
                            name="title"
                            value={this.state.article.title} onChange={this.handleChange}
                        />
                    </label>
                    <label>Article Body
                        <textarea 
                            rows="20" 
                            className="form-control" 
                            name="body"
                            value={this.state.article.body} 
                            onChange={this.handleChange}
                        />
                    </label>
                    <button className="btn btn-primary" onClick={this.postArticle}>Post</button>
                </form>
            </div>
        );
    };
};

export default connect(null, {createArticle})(CreateArticle);