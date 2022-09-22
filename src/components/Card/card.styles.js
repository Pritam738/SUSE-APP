import styled from 'styled-components';
import {Container} from '../../Globalstyles';
import { Link } from 'react-router-dom';

export const WorksContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
background: #0c322c;
`;
export const WorksContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5rem 8rem;
color: #333333;

${Container};
`;

export const WorksTitle = styled.h2`
font-size: 2.4rem;
font-weight: bold;
color: #90ebcd
`;

export const WorksSubTitle = styled.h3`
font-size: 1.5rem;
color: #fff
`;
export const WorksCardContent = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 5rem;
flex-wrap: wrap;
width: 90%;
align-content: space-around;

@media only screen and (max-width:900px){
    flex-direction: column;
}
`;

export const WorksCard = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
width: 30rem;
height: 30rem;
background-color: #fff;
box-shadow: 0px 5px 40px rgba(0, 0, 0, 0.19);
border-radius: 20px;
transition: all .2s ease;

@media only screen and (min-width: 1300px){
    margin: 4rem;
}

@media only screen and (max-width: 1500px){
    margin: 3rem;
}
@media only screen and (max-width:900px){
    margin-bottom: 10rem;
    margin: 4rem;
}
@media only screen and (max-width: 800px){
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
}


@media only screen and (max-width:900px){
        width: 50rem;
}
@media only screen and (max-width:500px){
        width: 30rem;
}
@media only screen and (min-width:1890px){
        width: 40rem;
}
&:hover {
    box-shadow:  0px 10px 80px rgba(0, 0, 0, 0.21);
    transform: scale(1.05);
    color: #0c322c;
    
}
`;

export const WorksCardTitle = styled.h3`
font-size: 2.6rem;
font-weight: bold;
padding-top: 1rem;
`;

export const WorksCardText = styled.p`
font-size: 1.6rem;
padding: 1rem 2rem;
height: 11rem;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
overflow: hidden;
border-top: 1px solid;
margin: 0.8rem;
`;

export const WorksCardLink = styled(Link)`
color: #30ba78;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 1.5rem;
font-weight: 800;
`;