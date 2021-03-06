import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote, startUploadFile } from '../actions/notes';
import moment from 'moment';

export const NoteAppBar = () => {

    const dispatch = useDispatch()
    const { active } = useSelector( state => state.notes );

    const handleSave = () => {
        dispatch( startSaveNote( active ) )
    }

    const handlePicture = () => {
        document.querySelector('#fileSelector').click();
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if( file ) {
            dispatch( startUploadFile( file ) );
        }
    }



    return (
        <div className="notes__appbar">
           <span>{moment().format('LL')}</span>

           <input
           id="fileSelector"
           type="file"
           name="file"
           style={{ display: 'none' }}
           onChange={ handleFileChange }
            />

           <div>
               <button 
               onClick={ handlePicture }
               className="btn">
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
