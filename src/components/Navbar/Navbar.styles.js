import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Container} from '../../Globalstyles';

export const Nav = styled.nav` 
font-size: 18px;
position: sticky;
top: 0;
z-index: 999;
height: 4rem;
background-color: #0c322c;
/* box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5); */
box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: center;
align-items: center;
`;

export const NavIcon = styled.img`
width: 10%;
`;

NavIcon.defaultProps = {
    src: 'https://www.suse.com/assets/img/suse-birthday/balloon_logo.png',
};

export const NavbarContainer = styled(Container)`
display: flex;
justify-content: space-between;
align-items: center;
height: 80px;
${Container};
`;

export const NavLogo = styled(Link)`
color: #fff;
cursor: pointer;
display: flex;
align-items: center;
text-decoration: none;
font-size: 2.5rem;
font-weight: 800;
transition: all .5s ease;
&:hover{
    transform: scale(1.08);
}
`;


export const MenuIcon = styled.div`
display: none;

@media (max-width: 1000px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 20%);
    font-size: 4rem;
    cursor: pointer;
}
`;