import React from 'react'
import { ReactComponent as Playicon } from '../svg/play.svg'
import { Link } from 'react-router-dom';

const Playlists = (props) => {
    const dataPlaylists = [
        {
            id: 101,
            category_id: 3,
            name: 'Home Playlist 1',
            img: 'https://images.unsplash.com/photo-1547700784-b849e5a332ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 102,
            category_id: 3,
            name: 'Home Playlist 2',
            img: 'https://images.unsplash.com/photo-1492390195956-15fd4c9d0133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Home Playlist 3',
            img: 'https://images.unsplash.com/photo-1507807700760-c8b26e28f09e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus Playlist 1',
            img: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 105,
            category_id: 4,
            name: 'Sunday Playlist',
            img: 'https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 106,
            category_id: 2,
            name: 'Mood Playlist',
            img: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Lorem ipsum'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Mood Playlist',
            img: 'https://images.unsplash.com/photo-1536526213067-4fd00012627c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=510&q=80',
            des: 'Lorem ipsum'
        },
    ]

    const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id)

    return (
        <div className="cardsWraperInner">
            {matchedPlaylists.map((playlist, id) => (
                <Link to={'/playlist/' + playlist.id}>
                    <div className="card" key={id}>
                        <div className="cardImage">
                            <img src={playlist.img} alt="Pic 1" />
                        </div>
                        <div className="cardContent">
                            <h3>{playlist.name}</h3>
                            <span>{playlist.des}</span>
                        </div>
                        <span className="playIcon">
                            <Playicon />
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Playlists
