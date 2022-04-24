/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { MovieRow, Title, MovieListWrapper, MovieList, MovieListItem, MovieRowArrow } from "./styles";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () => { 
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0){
            x = 0;
        }
        setScrollX(x);
    }

    const handleRightArrow = () => { 
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 80;
        }
        setScrollX(x);
    }

    return (
        <MovieRow>
            <Title>{title}</Title>

            <MovieRowArrow className="_is-left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </MovieRowArrow>

            <MovieRowArrow className="_is-right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </MovieRowArrow>


            <MovieListWrapper>
                <MovieList style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
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
