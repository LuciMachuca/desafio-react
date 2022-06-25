import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { populares, filtrado, fetchPelis } from '../actions/index';
import NavBar from './navBar.jsx'
import Icon from '../iconW.svg';
import './home.css';


export default function Home() {

    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(populares())
    }, []);

    useEffect(() => {
        let pages = [9, 21, 30, 42, 51, 64, 72, 81, 100];
        pages.map(page => dispatch(fetchPelis(page)))
    }, [dispatch]);

    const listHome = useSelector((state) => state.homeList) // las más populares

    // Para quitar el encabezado de "Most Popular" cuando se ejecute el filtro
    const [vista, setVista] = useState('visible')

    const handleFilter = (e) => {
        if (e) {
            e.preventDefault();
            console.log(e.target.value)
            dispatch(filtrado(e.target.value))
            setVista('invisible')
        }
    }


    return (

        <div>
            <NavBar />
            <div>

                <form className='estrellas'>
                    <p class="clasificacion"><h4 className='mt-5'>Filter by Classification</h4>
                        <input id="radio1" type="radio" name="5" value="5" onChange={(e) => handleFilter(e)} />
                        <label className='label' for="radio1" value="5">★</label>
                        <input id="radio2" type="radio" name="4" value="4" onChange={(e) => handleFilter(e)} />
                        <label className='label' for="radio2" value="4" >★</label>
                        <input id="radio3" type="radio" name="3" value="3" onChange={(e) => handleFilter(e)} />
                        <label className='label' for="radio3" value="3">★</label>
                        <input id="radio4" type="radio" name="2" value="2" onChange={(e) => handleFilter(e)} />
                        <label className='label' for="radio4" value="2">★</label>
                        <input id="radio5" type="radio" name="1" value="1" onChange={(e) => handleFilter(e)} />
                        <label className='label' for="radio5" value="1">★</label>
                    </p>
                </form>
            </div><br /><br /><br />

            <div className='card container'>
                <div className={vista} style={{ backgroundColor: "#90cea1", color: "white" }}>
                    <h4 className='card-header mostPop'>Most Popular <img src={Icon} alt="Icon" style={{ width: "3.2%" }} /></h4>
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