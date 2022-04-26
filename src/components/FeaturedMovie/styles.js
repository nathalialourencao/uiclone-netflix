import styled from "styled-components";
import * as palette from '../../styles/Variables';

export const MovieStar = styled.section`
    height: 100vh;
    background-size: cover;
    background-position: center;
`

export const Title = styled.h1`
    font-size: 60px;
    font-weight: bold;
`

export const Overlay = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`

export const MovieStarContent = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111 30%, transparent 70%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
    padding-bottom: 200px;

    @media(max-width: 760px){
        padding-left: 20px;
    }
`

export const MovieStarInfos = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;

    p{
        display: inline-block;
        margin-right: 15px;

        &.points{
            color: ${palette.colorGreen};
        }
    }

    @media(max-width: 760px){
        font-size: 16px;
    }
`

export const MovieStarDescription = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    line-height: 30px;
    max-width: 45%;

    @media(max-width: 760px){
        max-width: 90%;
        font-size: 14px;
        line-height: 23px;
    }
`

export const MovieStarButtons = styled.div`
    margin-top: 20px;
    display: block;
`

export const Button = styled.a`
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    padding: 15px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    opacity: 1;
    transition: all 400ms;

    &._primary{
        background: #fff;
        color: #000;
    }

    &._secundary{
        background: #333;
        color: #fff;
    }

    &:hover{
        opacity: 0.7;
    }
`

export const MovieStarGenres = styled.div`
    margin-top: 20px;
    font-size: 18px;
    color: #999;

    @media(max-width: 760px){
        font-size: 16px;
    }
`
