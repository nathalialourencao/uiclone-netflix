/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import { MovieRow, Title, MovieListWrapper, MovieList, MovieListItem } from "./styles";

export default ({ title, items }) => {
    return (
        <MovieRow>
            <Title>{title}</Title>
            <MovieListWrapper>
                <MovieList>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <MovieListItem key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </MovieListItem>
                    ))}
                </MovieList>
            </MovieListWrapper>
        </MovieRow>
    )
}
