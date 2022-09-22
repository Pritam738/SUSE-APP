import styled from 'styled-components';
import {Container} from '../../Globalstyles';
import { Link } from 'react-router-dom';

export const TableContent = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 3rem;
background: #f0f0f0;
`;
export const TableContainer = styled(Container)`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 5rem 8rem;
color: #333333;

${Container};
`;

export const TableTitle = styled.h2`
font-size: 2.4rem;
font-weight: bold;
color: #212529
`;

export const TableSubTitle = styled.h3`
font-size: 1.5rem;
font-weight: 500;
color: #212529;
font-style: italic;
`;
export const TableCardContent = styled.div`
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

export const TableLink = styled(Link)`
color: #30ba78;
cursor: pointer;
margin-right: 58%;
display: float;
text-decoration: none;
font-size: 1.5rem;
font-weight: 800;
`;

export const TableReopBody = styled.div`
    border: 1px solid;
    width: 100%;
    padding-bottom: 1rem;
`