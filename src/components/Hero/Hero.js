import Navbar from '../Navbar/Navbar';
import {Button} from '../../Globalstyles';
import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroSubTitle,
    HeroText,
    HeroLink,
    ExternalLink,
    HeroLinkHandler
} from './Hero.styles';

const Hero = () =>{
    return(
        <div>
           <HeroContainer>
               <Navbar/>
               <HeroContent>
                   <HeroContentText>
                        <ExternalLink href="https://documentation.suse.com/sles/15-SP2/html/SLES-all/book-rmt.html" target="_blank">RMT Guide</ExternalLink>
                        <HeroTitle>
                            <HeroTitleText>SUSE Repository Mirroring Tool</HeroTitleText>
                        </HeroTitle>
                        <HeroSubTitle>This tool allows you to mirror RPM repositories in your own private network.</HeroSubTitle>
                        <HeroText>
                        The Repository Mirroring Tool (RMT) for SUSE Linux Enterprise 15 SP2 allows enterprise customers to optimize the management of SUSE Linux Enterprise software updates and subscription entitlements. It establishes a proxy system for SUSE® Customer Center with repositories and registration targets. This helps you to centrally manage software updates within a firewall on a per-system basis, while maintaining your corporate security policies and regulatory compliance.
                        </HeroText>
                        <HeroLinkHandler>
                            <HeroLink to="/show-product">
                            <Button primary big bigFont bigRadius>Check Out Our available products</Button>
                            </HeroLink>
                            <ExternalLink href="https://documentation.suse.com/sles/15-SP2/html/SLES-all/cha-rmt-client.html" target="_blank">
                            <Button primary big bigFont bigRadius>Check How To Configure Proxy</Button>
                            </ExternalLink>
                        </HeroLinkHandler>
                   </HeroContentText>
               </HeroContent>
           </HeroContainer>
        </div>
    )
}

export default Hero;
