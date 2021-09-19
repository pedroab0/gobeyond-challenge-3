import styled from "styled-components";

export const Cards = styled.div`
    width: 100%;
    max-width: 1280px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    margin: 20px 0 110px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 440px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const Card = styled.a`
    position: relative;
    height: 160px;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    display: flex;
    align-items: flex-end;
    padding: 15px;
    border-radius: 10px;
    text-decoration: none;
    transition: transform 0.2s ease-in-out;
    overflow: hidden;
    animation: fadeInUp 0.6s;

    &:after {
        content: linear-gradient(transparent, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.9));
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    &:hover {
        transform: translateY(-10px);
    }

    @media (min-width: 1024px) {
        height: 200px;
    }
`;

export const Title = styled.h3`
    color: #fff;
    z-index: 2;
    font-size: 16px;
    font-weight: 600;
`;

export const Tabs = styled.nav`
    border-radius: 10px;
    background: #e1e1e1;
    overflow: hidden;
    margin: 20px 0;
    overflow-x: auto;
    display: flex;
    max-width: 100%;
`;

export const Tab = styled.button`
    cursor: pointer;
    padding: 10px;
    font-size: 14px;
    font-weight: 600;
    transition: 0.3s ease-in-out;
    white-space: nowrap;
    border: 0;

    ${(props) =>
        props.active
            ? "background: #000; color: #fff; cursor: default; &:disabled:hover {background: #000;}"
            : "background: unset; color: #818181; &:hover {background: #c6c6c6;}"};
`;
