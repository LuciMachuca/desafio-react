import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react'; //useEffect llena el estado cuando se monta el componente
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHome, searchMovie, getDetail, filtered } from '../actions/index';
import NavBar from './navBar.jsx'
import './home.css';


export default function Home() {

    const API_KEY = "1e40352e4ee54a4b38c2efc103a08b2b"
    const BASE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = BASE_API + "search/movie"
    const DISCOVER_API = BASE_API + "discover/movie"
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHome())
    }, []);

    const listHome = useSelector((state) => state.homeList)

    const [movies, setMovies] = useState([])



    function handleFilter(e) {
        e.preventDefault();
        dispatch(filtered(e.target.value))
    };

    return (

        <div className='luci'>

            <NavBar />

            <div>

                <form className='estrellas'>
                    <p class="clasificacion"><h4 className='mt-5'>Clasificación</h4>
                        <input id="radio1" type="radio" name="estrellas" value="5" />
                        <label className='label' for="radio1">★</label>
                        <input id="radio2" type="radio" name="estrellas" value="4" />
                        <label className='label' for="radio2">★</label>
                        <input id="radio3" type="radio" name="estrellas" value="3" />
                        <label className='label' for="radio3">★</label>
                        <input id="radio4" type="radio" name="estrellas" value="2" />
                        <label className='label' for="radio4">★</label>
                        <input id="radio5" type="radio" name="estrellas" value="1" />
                        <label className='label' for="radio5">★</label>
                    </p>
                </form>
            </div>

            <div className='container img-gallery'>

                {
                    listHome?.map(movie => {
                        return (
                            <div class="xx" >
                                <Link to={'/detail/' + movie.id} >
                                    <img className='ll'
                                        src={IMG_PATH + movie.poster_path}
                                        alt={movie.title} />
                                </Link>
                            </div>

                        )
                    })
                }
            </div>
        </div>



    )

}