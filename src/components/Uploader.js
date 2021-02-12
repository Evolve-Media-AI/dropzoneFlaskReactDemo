import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import logo from '../logo.svg';
import '../App.css';

function Uploader() {
    // specify upload params and url for your files
    const getUploadParams = ({ meta }) => { 
        return { url: 'https://httpbin.org/post'}
    }

    // called every time a file's `status` changes
    const handleChangeStatus = ({ meta, file }, status) => {
        console.log(status, meta, file)
    }

    // receives array of files that are done uploading when submit button is clicked
    const handleSubmit = (files, allFiles) => {
        console.log(files.map(file => file.meta))
        allFiles.forEach(file => file.remove())
    }

    return (
        <Dropzone
            getUploadParams={getUploadParams}
            onChangeStatus={handleChangeStatus}
            onSubmit={handleSubmit}
            accept="image/*,audio/*,video/*"
        />
    );
}

export default Uploader;