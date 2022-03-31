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
     width: 99999px;
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
