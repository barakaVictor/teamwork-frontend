import React from 'react';
import UploadIcon from '../../../cloud_upload-black-18dp.svg'
import './DropZone.css';
class DropZone extends React.Component{
    constructor(props){
        super(props);
        this.fileInputRef = React.createRef();
        this.openFileSelectionDialog = this.openFileSelectionDialog.bind(this);
        this.onFilesAdded = this.onFilesAdded.bind(this);
    }

    openFileSelectionDialog(){
        this.fileInputRef.current.click()
    }

    onFilesAdded(e){
        this.props.onFilesAdded(e.target.files)
    }

    currentFileUrl(file){
        return file ? URL.createObjectURL(file): null
    }

    render(){
        return(
            <div className="dropzone">
                <div className="file-selector" onClick={this.openFileSelectionDialog}>
                        <img
                            src={UploadIcon}
                            className="icon"
                            alt="file upload field"
                        />
                        <span className="action-indicator">
                            {this.props.file
                            ?<span className="filename">{this.props.file.name}</span>
                            :'Select File'
                            }
                        </span>
                        <input 
                            type="file"
                            multiple = {this.props.multiple}
                            ref = {this.fileInputRef}
                            className="file-input"
                            onChange = {this.onFilesAdded}
                        />
                </div>
                 <div className="preview">
                    { this.props.file && 
                        <img
                            className="img-responsive"
                            src={this.currentFileUrl(this.props.file)}
                            alt="uploaded preview"
                        />
                    }
                 </div>
            </div>
        )
    }
}
export default DropZone;