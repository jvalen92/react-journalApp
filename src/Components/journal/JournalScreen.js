import React from 'react';
import Sidebar from "./Sidebar";
import NothingSelected from './NothingSelected';
import NoteScreen from '../notes/NoteScreen';
import { useSelector } from 'react-redux';

const JournalScreen = () => {
    const {active} = useSelector(state => state.notes)
    return (
        <div className="journal__main-content animate__animated animate__fadeIn animete-faster">
            <Sidebar />

            <main>
                {
                    (active)
                        ? (<NoteScreen/>)
                        :<NothingSelected />
                }
            </main>
        </div>
    )
}

export default JournalScreen
