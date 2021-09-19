import styled from "styled-components";

export const Container = styled.section`
    /* display: grid;
    justify-items: center; */
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0;
    width: 100%;
    max-width: 1280px;

    h2 {
        font-size: 20px;
        margin: 0;
    }

    h3 {
        font-size: 16px;
        font-weight: 400;
        margin: 0;
    }
`;

export const ProfilePicture = styled.img`
    height: 90px;
    width: 90px;

    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 50%;
    border: solid 5px #fff;
    margin-top: -50px;
`;

export const BackgroundImage = styled.img`
    height: 220px;
    width: 100%;

    border-radius: 10px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
`;
