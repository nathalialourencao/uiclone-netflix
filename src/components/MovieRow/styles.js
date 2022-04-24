import styled from 'styled-components';

export const MovieRow = styled.div`
    margin-bottom: 30px;
`;

export const Title = styled.h1`
    margin: 0 0 0 30px;
`

export const MovieListWrapper = styled.div`
    overflow: hidden;
    padding-left: 30px;
`

export const MovieList = styled.div`
     transition: all ease 0.5s;
`

export const MovieListItem = styled.div`
    display: inline-block;
    width: 150px;
    cursor: pointer;

    img{
        width: 100%;
        transform: scale(0.9);
        transition: all ease 0.3s;

        &:hover{
            transform: scale(1);
        }
    }
`
export const MovieRowArrow = styled.div`
    position: absolute;
    width: 40px;
    height: 225px;
    background-color: rgba(0, 0, 0, .6);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
    opacity: 0;
    transition: all 400ms;

    &._is-left{
        left: 0;
    }

    &._is-right{
        right: 0;
    }

    ${MovieRow}:hover &{
        opacity: 1;
    }
`
