import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { startDeleting, startSaveNote, startUploading } from '../../actions/notes';
import moment from 'moment';

const NoteAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes);
    const noteDate = moment(active.date).format("dddd Do")
    const handleSave = () => {
        console.log(active);
        dispatch(startSaveNote(active))
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            dispatch(startUploading(file));
        }
    }

    const handleDeleteNote = () => {
        dispatch(startDeleting(active.id))
    }

    return (
        <div className="notes__appbar">
            <span>{noteDate}</span>

            <div>

                <input
                    id="fileSelector"
                    type="file"
                    name="file"
                    style={{display:'none'}}
                    onChange={handleFileChange}
                />

                <button
                    className="btn"
                    onClick={handlePictureClick}
                >
                    Picture
                </button>

                <button
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>

                <button
                    className="btn btn-danger"
                    onClick={handleDeleteNote}
                >
                    Delete

                </button>
            </div>
        </div>
    )
}

export default NoteAppBar
