import React from 'react'
import {Switch, Route} from 'react-router-dom'


import Categories from './Categories'
import PlaylistPage from './pages/Playlist'

const Main = () => {
    return (
        <div className="main">
            <div className="upperNav">Dummy text</div>
            <div className="mainContent">
                <Switch>
                    <Route path="/" exact component={Categories}></Route>
                    <Route path="/search">Search</Route>
                    <Route path="/library">Library</Route>
                    <Route path="/playlist/:id" component={PlaylistPage}></Route>
                </Switch> 
            </div>
        </div>
    )
}

export default Main
