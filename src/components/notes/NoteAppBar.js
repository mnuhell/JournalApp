import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';

export const NoteAppBar = () => {

    const dispatch = useDispatch()
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( active ) )
    }


    return (
        <div className="notes__appbar">
           <span>28 de agosto 2020</span>

           <div>
               <button className="btn">
                   picture
               </button>
               <button 
               className="btn"
               onClick={ handleSave } >
                   save
               </button>
           </div> 
        </div>
    )
}
