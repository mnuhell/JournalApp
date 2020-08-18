    import React from 'react'
import { NoteAppBar } from './NoteAppBar'
    
    export const NoteScreen = () => {
        return (
            <div className="notes__main-content">
                
                <NoteAppBar />

                <div className="notes__content">
                    
                    <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"    
                    />

                    <textarea 
                    placeholder="what happend today"
                    className="notes__textarea"
                    ></textarea>

                    <div className="notes__image">
                        <img
                        src="https://i.blogs.es/594843/chrome/2560_3000.jpg"
                        alt="imagen"
                        />
                    </div>

                </div>

            </div>
        )
    }
    