import React from 'react'
import { useParams } from 'react-router-dom'

const PlaylistPage = () => {
    let { id } = useParams()

    return (
        <div className="playlistPage">
            <div className="mainInner">
                <div className="playlistPageInfo">
                    <div className="playlistPageImage">
                        <img src="https://images.unsplash.com/photo-1547700784-b849e5a332ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="pic" />
                    </div>
                    <h1>Title</h1>
                    <span>Spotify</span>
                    <button>Play</button>
                    <div className="icons">
                        <div className="iconsHeart">

                        </div>
                        <div className="iconsDots">

                        </div>
                    </div>
                    <p>Minimalism, electronica and modern classical to concentrate to</p>
                </div>
                <div className="playlistPageSongs">
                    <ul>
                        <li>Song One</li>
                        <li>Song Two</li>
                        <li>Song three</li>
                        <li>Song Four</li>
                        <li>Song five</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PlaylistPage
