import styled from 'styled-components';

export const Header = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 60px;
    background: transparent;
    transition: all 400ms;

    &.is-black{
        background-color: #141414;
    }

    .header-logotipo{
        height: 30px;

        img{
            height: 100%;
        }
    }

    .header-user{
        height: 40px;

        img{
            height: 100%;
            border-radius: 5px;
        }
    }
`;
