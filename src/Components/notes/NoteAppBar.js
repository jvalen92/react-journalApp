import React from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { startSaveNote } from '../../actions/notes';

const NoteAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector(state => state.notes)
    const handleSave = () => {
        console.log(active);
        dispatch(startSaveNote(active))
    }
    
    return (
        <div className="notes__appbar">
            <span>28 de agosto de 2020</span>

            <div>
                <button className="btn">
                    Picture
                </button>

                <button 
                    className="btn"
                    onClick={handleSave}
                >
                    Save
                </button>
            </div>
        </div>
    )
}

export default NoteAppBar
