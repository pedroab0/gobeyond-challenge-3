import styled from "styled-components";

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Contact = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 400px;

    @media (max-width: 400px) {
        width: 340px;
    }
    @media (max-width: 320px) {
        width: 290px;
    }

    @media (max-width: 600px) {
        z-index: 10;
        position: fixed;
        bottom: 0px;
        width: 100%;
        height: 75px;
        display: flex;
        justify-content: center;
        background: #fff;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 60px);
        padding: 10px;
    }

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 65px;
    }

    img {
        width: 30px;
    }

    span {
        color: #000;
        font-weight: 600;
        font-size: 12px;
    }
`;
