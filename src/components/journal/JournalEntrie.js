import React from 'react';

export const JournalEntrie = () => {
    return (
        <div className="journal__entry">
            <div 
            className="journal__entry-picture"
            style={ { 
                backgroundSize: 'cover',
                backgroundImage: 'url(https://i.pinimg.com/originals/67/54/78/675478c7dcc17f90ffa729387685615a.jpg)'
            }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">Un nuevo dia</p>

                <p className="journal__entry-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni molestias accusantium reprehenderit possimus in odit sequi reiciendis quo provident, ullam nihil illum consectetur fugiat ducimus nemo unde nisi temporibus saepe!</p>
            </div>
            <div className="journal__entry-date">
                <span>monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
