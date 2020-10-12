import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeNote, startDeleting } from '../actions/notes';
import useForm from '../hooks/useForm';
import { NoteAppBar } from './NoteAppBar'
    
    export const NoteScreen = () => {

        const dispatch = useDispatch();

        const { active:note } = useSelector( state => state.notes);
        const [ formValues, handleInputChange, reset ] = useForm(note);
        const { body, title, id } = formValues;

        const activeId = useRef(note.id);

        useEffect(() => {
            
            if( note.id !== activeId.current ) {
                reset( note )
                activeId.current = note.id
            }

        }, [note, reset]);

        useEffect(() => {
            
            dispatch( activeNote(formValues.id, {...formValues}))

        }, [formValues, dispatch]);

        const handleDeleteNote = () => {
        
            dispatch(startDeleting( id ));

        }
        
        return (
            <div className="notes__main-content">
                
                <NoteAppBar />

                <div className="notes__content">
                    
                    <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    name="title"
                    onChange={ handleInputChange }
                    value={ title }
                    
                    />

                    <textarea 
                    placeholder="what happend today"
                    className="notes__textarea"
                    onChange={ handleInputChange }
                    name="body"
                    value={ body }
                    ></textarea>

                    {
                        (note.url) &&
                        (<div className="notes__image">
                            <img
                            src={note.url}
                            alt="imagen"
                            />
                        </div>)
                    }

                </div>
                <button 
                onClick={ handleDeleteNote }
                className="btn btn-danger">
                    DELETE
                </button>
            </div>
        )
    }
    