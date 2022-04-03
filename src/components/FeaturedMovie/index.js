/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { MovieStar, Title, Overlay, MovieStarContent } from './styles';


export default ({ item }) => {
    return (
        <MovieStar style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <Overlay>
                <MovieStarContent>
                    <Title>{item.original_name}</Title>
                </MovieStarContent>
            </Overlay>
        </MovieStar>
    )
}