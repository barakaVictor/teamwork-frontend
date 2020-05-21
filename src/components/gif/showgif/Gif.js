import React from 'react';


class Gif extends React.Component {

    render(){
        const gif = this.props.post
        return(
            <div className="card">
                <img 
                    className="card-image" 
                    src={gif.imageurl}
                    alt=""/>
                <div className="card-body">
                    <h4>{gif.title}</h4>
                </div>
            </div>                      
        )
    }
}

export default Gif;