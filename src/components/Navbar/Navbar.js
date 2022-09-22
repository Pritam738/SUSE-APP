import 
{
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon
} from './Navbar.styles';

const Navbar = () => {    
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon /> 
                    </NavLogo>
                </NavbarContainer>
            </Nav>
        </div>
    )
}

export default Navbar;