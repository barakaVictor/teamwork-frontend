import React from 'react';
import { connect } from 'react-redux';
import { isGif, isArticle} from '../../utilities/feedobjectidentifier';
import Gif from '../gif/showgif/Gif';
import Article from '../article/showarticle/Article';

class Post extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            post: {}
        };
    };

    componentDidMount(){
        this.setState({post: this.props.location.state})
    }

    render(){
        return(
            <div className="container">
                <div className="single-post">
                    {
                        isGif(this.state.post)
                        ?<Gif post={this.state.post}/>
                        :isArticle(this.state.post) &&
                        <Article post={this.state.post}/>
                    }

                </div>
            </div>                
        )
    }
}

const mapStateToProps = (state) => {
    const { feed } = state;

    return { feed }
}

export default connect(mapStateToProps)(Post);
