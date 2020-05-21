import React from 'react';
import {Link} from 'react-router-dom';
import './Article.css';

class Article extends React.Component{
    constructor(props){
        super(props);
        this.truncateChars = this.truncateChars.bind(this)
    };
    truncateChars(data){
        return data.slice(0, 50)
    }
    render(){
        const article = this.props.post;
        return(
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{article.title}</h4>
                    <div className="card-text">
                        <p>{
                            this.props.preview 
                            ?this.truncateChars(article.body)
                            :article.body
                        }</p>
                    </div>
                    { this.props.preview &&
                    <Link to={{
                        pathname: `/articles/${article.id}`,
                        state: {...article}
                        }}>Read More</Link>
                    }
                </div> 
            </div>
                
        )
    }
}

export default Article;