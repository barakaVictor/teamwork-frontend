import React from 'react'
import { isGif, isArticle } from '../../utilities/feedobjectidentifier'
import { connect } from 'react-redux';
import { fetchFeed } from '../../redux/actions/feed-actions';
import Article from '../article/showarticle/Article';
import Gif from '../gif/showgif/Gif'
import "./Feed.css";

class Feed extends React.Component{

    componentDidMount(){
        this.props.fetchFeed();
    }
    render(){
        const { data } = this.props.feed;
        return (
            <div className="container">
                {
                    data.map((post) => 
                    <div className="row" key={`${post.title}-${post.id}`}>
                        <div className="col-md-6 post">
                            {
                                isGif(post)
                                ?<Gif post={post}/>
                                : isArticle(post)&&
                                <Article preview post={post}/>
                            }
                        </div>
                    </div>
                    )
                }
            </div>
               
        )
    }
}

const mapStateToProps = (state) => {
    const {feed} = state
    return {feed}
}

export default connect(mapStateToProps, {fetchFeed})(Feed);