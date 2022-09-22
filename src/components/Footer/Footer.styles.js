import styled from 'styled-components';
import {Container} from '../../Globalstyles';
import {Link} from 'react-router-dom';

export const FooterSection = styled.section`
display: flex;
align-items: center;
color: #30ba78;
background-color: #fff;
`;

export const FooterContainer = styled(Container)`
display: flex;
flex-direction: column;
align-items: center;
padding: 5rem 10rem;

${Container}
`;

export const FooterNewsletter = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
color: rgb(33,37,41)
`;

export const FooterCopyRight = styled(Link)`
text-decoration: none;
outline: none;
color: #30ba78;
&:hover {
    text-decoration: underline;
}
`;

export const FooterLineHr = styled.hr`
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 100%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
`
export const FooterIcon = styled.img`
    width: 10rem;
`;

FooterIcon.defaultProps = {
    src: 'https://registry.suse.com/static/SUSE_Logo-hor_S_Green-pos_sRGB.svg',
};