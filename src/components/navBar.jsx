import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getHome, searchMovie } from '../actions/index';
import { Link } from 'react-router-dom';
//import './navBar.css';

export default function NavBar() {

    const dispatch = useDispatch()
    const [movie, setMovie] = useState('')

    // -------- PARA EL SEARCH BAR -------

    function handleInputChange(e) {
        e.preventDefault()
        setMovie(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchMovie(movie));
        setMovie('');
    }

    // ------- PARA VOLVER A CARGAR TODOS LOS JUEGOS

    useEffect(() => {
        dispatch(getHome())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(getHome());
    }

    return (


        <nav class="navbar navbar-expand-md navbar-light" style={{ backgroundColor: "#FFFF00" }} >
            <div className="container">

                <button type="button"
                    class="navbar-toggler"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Desplegar menú de Navegación">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search your Movie" aria-label="Search"
                        value={movie} onChange={e => handleInputChange(e)} />
                            <button class="btn btn-outline-success" type="submit" onClick={e => handleSubmit(e)}>Go!</button>
                    </form>

                    <a href="#" class="nav-link mx-5" onClick={e => handleClick(e)}>Refrescar</a>

                </div>
            </div>
        </nav>

    )

}