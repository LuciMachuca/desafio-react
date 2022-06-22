import React from 'react';


const Movie = ({ movie, selectMovie }) => {

    const IMG_PATH = "https://image.tmdb.org/t/p/w1280"
    const BASE_API = "https://api.themoviedb.org/3/"

    return (

        <div className="container" >
            <div onClick={() => selectMovie(movie)} className={"movie"}></div>

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-5" >
                < div class="col">

                    {movie.poster_path &&
                        
                            <img className='card-img-top h-100 p-2'
                                /* style={{ width: "120px", height:"80px" }} */
                                src={IMG_PATH + movie.poster_path}
                                alt={movie.title} />
                        
                    }

                </div>
            </div>

        </div>
    );
};


export default Movie;