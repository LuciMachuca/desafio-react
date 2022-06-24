import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'; 
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { populares, filtrado, todasFiltro } from '../actions/index';
import NavBar from './navBar.jsx'
import Icon from '../iconW.svg';
import Detail from './detail.jsx'
import './home.css';


export default function Home() {

    const API_KEY = "1e40352e4ee54a4b38c2efc103a08b2b"
    const BASE_API = "https://api.themoviedb.org/3/"
    const SEARCH_API = BASE_API + "search/movie"
    const DISCOVER_API = BASE_API + "discover/movie"
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

    const dispatch = useDispatch();
    let navigate = useNavigate();

    useEffect(() => {
        dispatch(populares())
    }, []);

    useEffect(() => {
        dispatch(todasFiltro())
    }, []);

    const listHome = useSelector((state) => state.homeList) // las más populares
    const allMovies = useSelector((state) => state.allMovies) // 100 películas para filtrar x calificación
    console.log(allMovies)

    const [filter, setFilter] = useState(0)  // e.target.value

    function handleChange(e) { // onSubmit
        console.log(e.target.value)
        setFilter(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(filtrado(filter))
    }

    return (

        <div>
            <NavBar />
            <div>

                <form className='estrellas' onSubmit={e => handleSubmit(e)}>
                    <p class="clasificacion"><h4 className='mt-5'>Filter by Classification</h4>
                        <input id="radio1" type="radio" name="5" value="5" onChange={e => handleChange(e)} />
                        <label className='label' for="radio1" value="5">★</label>
                        <input id="radio2" type="radio" name="4" value="4" onChange={e => handleChange(e)} />
                        <label className='label' for="radio2" value="4" >★</label>
                        <input id="radio3" type="radio" name="3" value="3" onChange={e => handleChange(e)} />
                        <label className='label' for="radio3" value="3">★</label>
                        <input id="radio4" type="radio" name="2" value="2" onChange={e => handleChange(e)} />
                        <label className='label' for="radio4" value="2">★</label>
                        <input id="radio5" type="radio" name="1" value="1" onChange={e => handleChange(e)} />
                        <label className='label' for="radio5" value="1">★</label>
                    </p>
                </form>
            </div><br/><br/><br/>

            <div className='card container'>
                <div class="card-header mostPop" style={{ backgroundColor: "#90cea1", color: "white" }}>
                    Most Popular <img src={Icon} alt="Icon" style={{ width: "3.2%" }} />
                </div>


                <div className='container img-gallery'>

                    {
                        listHome?.map(movie => {

                            return (
                                <div class="xx" >
                                    <Link to={"/detail/" + movie.id} >
                                        <img className='ll mt-2'
                                            src={IMG_PATH + movie.poster_path}
                                            alt={movie.title}
                                            id={movie.id} />
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>

    )

}