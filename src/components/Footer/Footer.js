import {
    FooterSection,
    FooterContainer,
    FooterNewsletter,
    FooterCopyRight,
    FooterLineHr,
    FooterIcon
} from './Footer.styles';
function Footer() {
    return (
        <div>
            <FooterSection>
                <FooterContainer>
                    <FooterLineHr/>
                    <FooterNewsletter>
                        <FooterIcon  alt="SUSE Logo"/>
                        © 2022 SUSE, All Rights Reserved
                    </FooterNewsletter>
                    <FooterCopyRight to='https://www.suse.com/company/policies/privacy/'>Privacy and Cookie Policy</FooterCopyRight>
                    <FooterCopyRight to='https://www.suse.com/licensing/eula/#bci'>SUSE EULA</FooterCopyRight>
                </FooterContainer>
            </FooterSection>
            
        </div>
    )
}

export default Footer;



