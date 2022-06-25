import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detalle } from '../actions/index';

export default function Detail(props) {


    const dispatch = useDispatch()

    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"

    let { id } = useParams();

    useEffect(() => {
        dispatch(detalle(id));
    }, [id])


    const movieId = useSelector((state) => state.detail)

    return (

        <div class='conteiner my-4 mx-5'>
            <div class='row titulo'>

                <div class="col-12 col-md-6 col-lg-4">
                    <div class="row">
                        <img class="img"
                            src={IMG_PATH + movieId.poster_path}
                            alt={movieId.title}
                            style={{ width: "90%" }} />
                    </div>
                </div>


                <div class="col-12 col-md-6 col-lg-8 mt-2">
                    <div class="row text-center">

                        <div class="col-12 m-3 text-center">
                            <h5 class="name display-6" style={{ backgroundColor: "#01b4e4", color: "#0d253f" }}>{movieId.title}</h5>
                        </div>

                        <div class="col-12 mt-3 text-center pt-auto desc">
                            <p class='texto mt-3'>{movieId.overview}</p><br />
                        </div>

                        <div class="col-6 mt-2 card-body">
                            <div class="row text-center">

                                <p class="card-text">
                                    <h6 class='subtitulo' style={{ backgroundColor: "#90cea1", color: "#0d253f" }}>Release Date</h6>
                                    <span>{movieId.release_date}</span></p>

                                <p class="card-text">
                                    <h6 className='subtitulo' style={{ backgroundColor: "#90cea1", color: "#0d253f" }}>Popularity</h6>
                                    <span>{movieId.popularity}</span></p>

                                <p class="card-text">
                                    <h6 className='subtitulo' style={{ backgroundColor: "#90cea1", color: "#0d253f" }}>Status</h6>
                                    <span>{movieId.status}</span></p>
                            </div>
                        </div>

                        <div class='col-6 mt-3 card-body3'>
                            <div class="row text-center">

                                <ul class="list-inline">
                                    <h6 class='subtitulo' style={{ backgroundColor: "#90cea1", color: "#0d253f" }}>Genres</h6>
                                    {
                                        movieId.genres &&
                                        movieId.genres?.map(gen => <li className='lista' key={gen.id} ><span className='viñ'>{gen.name}</span></li>)
                                    }
                                </ul>

                                <p class="card-text">
                                    <h6 className='subtitulo' style={{ backgroundColor: "#90cea1", color: "#0d253f" }}>Vote Average</h6>
                                    <span>{movieId.vote_average}</span></p>

                            </div>
                        </div>

                        <div class='col-12 mt-5 text-center'>
                            <Link to='/'>
                                <button class="btn btn-light" style={{ backgroundColor: "#01b4e4", color: "black" }}
                                    type="button">Back</button></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}