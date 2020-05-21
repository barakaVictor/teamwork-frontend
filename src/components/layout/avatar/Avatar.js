import React from 'react';

class Avatar extends React.Component{
    render(){
        return(
            <div className="avatar">
                <img
                    src={this.props.src}
                />
            </div>
        )
    }
}

export default Avatar;