import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { populares, busqueda } from '../actions/index';
import Logo from '../../src/logoTMDB.svg';


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
        dispatch(busqueda(movie));
        setMovie('');
    }

    // ------- Refrescar -> Volver a cargar las Populares

    useEffect(() => {
        dispatch(populares())
    }, [dispatch])

    function handleClick(e) {
        e.preventDefault();
        dispatch(populares());
    }

    return (


        <nav class="navbar navbar-expand-md navbar-light" style={{ backgroundColor: " #0d253f" }} >
            <div className="container">

                <div>
                    <img src={Logo} alt="Logo" style={{ width: "40%" }} />
                </div>

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

                    <form class="d-flex mt-3 mt-md-0">
                        <input class="form-control me-2" type="search" placeholder="Search your Movie" aria-label="Search"
                            value={movie} onChange={e => handleInputChange(e)} />
                        <button class="btn btn-outline-success" type="submit"
                            onClick={e => handleSubmit(e)} style={{ backgroundColor: "#01b4e4", color: "black" }}>
                            Go!</button>
                    </form>

                    <div className='text-center m-2 text-md-end m-md-0'>
                        <a href="#" class="nav-link mx-5" style={{ color: "#01b4e4" }} onClick={e => handleClick(e)}>Refrescar</a>
                    </div>

                </div>
            </div>
        </nav >

    )

}