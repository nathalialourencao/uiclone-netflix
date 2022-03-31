/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { MovieStar, Title, Overlay } from './styles';


export default ({ item }) => {
    return (
        <MovieStar style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <Title>{item.original_title}</Title>
            <Overlay />
        </MovieStar>
    )
}