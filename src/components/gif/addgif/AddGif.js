import React from 'react';
import { connect } from 'react-redux';
import { uploadGif } from '../../../redux/actions/gif-actions';
import DropZone from '../../layout/dropzone/DropZone';
import './Gif.css';

class AddGif extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            file: null
        }

        this.onFilesAdded = this.onFilesAdded.bind(this);
        this.upload = this.upload.bind(this);
    }

    onFilesAdded(files){
        this.setState({file: files[0]})
    }

    upload(){
        const formData = new FormData();
        formData.append('gif', this.state.file);
        this.props.uploadGif(formData);
    }
    
    render(){
        return (
            <>
            <div className="card">
                <div className="card-body">
                    <h4 className="title">File Upload</h4>
                    <div className="content my-2">
                        <DropZone  file={this.state.file} onFilesAdded={this.onFilesAdded}/>
                    </div>
                    <div className="actions">
                        <button type="button" className="btn btn-primary" onClick={this.upload}>Upload</button>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default connect(null, {uploadGif})(AddGif);