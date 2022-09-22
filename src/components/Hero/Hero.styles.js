import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const HeroContainer = styled.div`
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 74vh;

@media only screen and (max-width:1600px) {
    height: 85vh;
}
`;

export const HeroContent = styled.section
.attrs({
    className: 'HeroContent',
    })`
height: 100%;
width: 100%;
padding-bottom: 1rem;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
color: #212529;
background: #fff;

@media only screen and (max-width:375px) {
    text-align: start;
    height: 80%;
}
`;

export const HeroContentText = styled.div.attrs({
    className: 'HeroContentText',
})`
width: 75%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


@media only screen and (max-width:600px) {
    width: 80%;
}
@media only screen and (max-width:375px) {
    position: absolute;
    align-items: flex-start;
}
`;

export const HeroTitle = styled.h1`
font-size: 4rem;
font-weight: 500;

line-height: 1.3;
`;

export const HeroTitleText = styled.span`
display: block;
`;

export const HeroSubTitle = styled.h2`
font-size: 2rem;
font-weight: 300;

padding-top: 1rem;
`;

export const HeroText = styled.h3`
font-size: 1.5rem;
font-weight: 400;
padding: 2.5rem 2rem;

@media only screen and (max-width:375px) {
    padding: 1.5rem 0;
}
`;

export const HeroLink = styled(Link)`
text-decoration: none;
outline: none;
color: #30ba78;
font-size: 2rem;
&:hover {
    text-decoration: underline;
}
`;
export const ExternalLink = styled.a`
text-decoration: none;
outline: none;
color: #30ba78;
font-size: 2rem;
&:hover {
    text-decoration: underline;
}
`;

export const HeroLinkHandler = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`