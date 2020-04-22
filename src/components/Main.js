import React from 'react'

import { ReactComponent as Playicon } from '../svg/play.svg'

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">Dummy text</div>
            <div className="mainContent">
                <h1>Uniquely yours</h1>
                <div className="cardsWrap">
                    <div className="card">
                        <div className="cardImage">
                            <img src="https://images.unsplash.com/photo-1499946981954-e7f4b234d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&
                            auto=format&fit=crop&w=1050&q=80" alt="Pic 1" />
                        </div>
                        <div className="cardContent">
                            <h3>Liked songs</h3>
                        </div>
                        <span className="playIcon">
                            <Playicon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
