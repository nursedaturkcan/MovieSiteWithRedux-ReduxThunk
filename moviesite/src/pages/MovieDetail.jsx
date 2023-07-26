import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import options, { baseImgUrl } from "../constants/constants";
import '@splidejs/react-splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const MovieDetail = () => {
  const { movie_id } = useParams();
  const [detail, setDetail] = useState(null);
  const [oyuncular, setOyuncular] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}`, options)
      .then((res) => setDetail(res.data))
      .catch((err) => console.log("MoıvieDetail sayfasında istek hatası", err));

    axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/credits`, options)
      .then((res) => setOyuncular(res.data.cast))
      .catch((err) => console.log("MoıvieDetail sayfasında oyuncular istek hatası", err));
  }, [movie_id]);

  const sum = detail?.revenue - detail?.budget;

  if (!detail || !oyuncular) return "Loading....";

  return (
    <div className='row my-5 movie-detail p-4 '>
      <div className='col-md-6 d-flex align-items-center '>
        <div className='position-relative '>
          <img className='img-fluid rounded shadow img-detail' src={baseImgUrl.concat(detail.poster_path)} alt={detail.title} />
          <span className='position-absolute bg-warning rounded p-1 shadow top-0 end-0 me-3'>IMBD: {detail.vote_average}</span>
        </div>
      </div>
      <div className='col-md-6 d-flex flex-column justify-content-center '>
        <h1>{detail.title}</h1>
        <p>{detail.overview}</p>
        <div className='row'>
          <div className='col-6 col-md-12'>
            <p className='text-warning'>Maliyet: {detail.budget} $</p>
            <p className='text-success'>Hasılat: {detail.revenue} $</p>
            <p className='text-info'>{sum >= 0 ? "Kar:" : "Zarar:"} {sum}$</p>
          </div>
          <div className='col-6 col-md-12'>
            <div className='d-flex gap-3 '>
              Kategoriler:
              {detail.spoken_languages.map((lang) => (
                <p className='badge bg-danger' key={lang.name}>{lang.name}</p>
              ))}
            </div>
            <div className='d-flex gap-3 '>
              Diller:
              {detail.genres.map((genre) => (
                <p className='badge bg-success' key={genre.name}>{genre.name}</p>
              ))}
            </div>
            <div className='d-flex gap-3 '>
              Yapımcı Şirketler:
              {detail.production_companies.map((comp) => (
                <p className='badge bg-warning' key={comp.name}>{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='p-4 me-5'>
            <h1 className='oyuncu-name text-warning'>Oyuncular </h1>
            <Splide options={{ autoWidth: true, gap: "10px", pagination: false }}>
              {oyuncular.map((oyuncu) => (
                <SplideSlide key={oyuncu.id}>
                  {oyuncu.profile_path && (
                   <>
                    <img
                      src={baseImgUrl.concat(oyuncu.profile_path)}

                      className=" oyuncu-img img-fluid rounded-circle actor-image"
                    />
                    <p className='oyuncu-name'>{oyuncu.name}</p>

                   </>
                  )}

                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
