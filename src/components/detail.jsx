import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../actions/index';
//import './Detail.css';

export default function Detail(props) {


    const dispatch = useDispatch()

    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

    let { id } = useParams();

    useEffect(() => {
        dispatch(getDetail(id));
    }, [id])


    const movieId = useSelector((state) => state.detail)
    console.log(movieId);

    return (
        <div className="container ancho">

            <div class='conteiner m-4'>
                <div class='row titulo'>

                    <div class="col-12 m-2 text-center">
                        <h5 class="name display-6">{movieId.title}</h5>
                    </div>

                    <div class="col-12 descripcion">
                        <div class="row">
                            <div class="col-12 col-md-4 text-center img">
                                <img src={IMG_PATH + movieId.poster_path}
                                        alt={movieId.title} class="card-img-top h-100" />
                            </div>

                            <div class="col-12 col-md-8 text-center pt-auto desc">
                                <p class='texto mt-3' lang="es">{movieId.overview}</p>
                            </div>

                        </div>
                    </div>


                    <div class="col-12 mt-4">
                        <div class="row text-center">

                            <div class="col-12 col-md-4 card-body">

                                <p class="card-text">
                                    <h6 class='subtitulo'>Release Date</h6>
                                    <span>{movieId.release_date}</span></p>
                                {/* <span>{movieId.release_date?.slice(0, 10)}</span></p> */}

                                <p class="card-text">
                                    <h6 className='subtitulo'>Popularity</h6>
                                    <span>{movieId.popularity}</span></p>

                                <p class="card-text">
                                    <h6 className='subtitulo'>Status</h6>
                                    <span>{movieId.status}</span></p>
                            </div>


                            <div class='col-12 col-md-4 card-body3'>
                                <ul class="list-inline">
                                    <h6 class='subtitulo'>Genres</h6>
                                    {
                                        movieId.genres &&
                                        movieId.genres?.map(gen => <li className='lista' key={gen.id} ><span className='viñ'>{gen.name}</span></li>)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class='col-12 mt-4 text-center'>
                        <Link to='/'>
                            <button class="btn btn-light" type="button">Back</button></Link>
                    </div>



                </div>
            </div >
        </div>

    )
}