import React from 'react'


import Playlists from './Playlists';

const Categories = () => {

    const dataCategories = [
        {
            id: 1,
            name: 'Focus',
            tagline: 'Music to help you concentrate'
        },
        {
            id: 2,
            name: 'Mood',
            tagline: 'Playlists to match your mood'
        },
        {
            id: 3,
            name: 'Soundtrack your home',
            tagline: ''
        },
        {
            id: 4,
            name: 'Kick back this Sunday',

        },
    ]
    return (
        <div className="mainInner">
            {dataCategories.map((category, id) => (

                <div className="cardsWrap" key={id}>
                    <h1>{category.name}</h1>
                    <p className="subtext">Music to help you concentrate</p>
                    <Playlists category_id={category.id} />
                    
                </div>
            ))}

        </div>
    )
}

export default Categories
