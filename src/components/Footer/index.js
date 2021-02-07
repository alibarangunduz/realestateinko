import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterlinkItems, FooterLinkTitle, FooterLink} from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterlinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterlinkItems>
                        <FooterlinkItems>
                            <FooterLinkTitle>Kesfet </FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterlinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterlinkItems>
                            <FooterLinkTitle>Hizmetler</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterlinkItems>
                        <FooterlinkItems>
                            <FooterLinkTitle>takipciler</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investors</FooterLink>
                                <FooterLink to='/signin'>Terms of Services</FooterLink>
                        </FooterlinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            İNKO AŞ
                        </SocialLogo>
                        <WebsiteRights>
                        İNKO AŞ © {new Date().getFullYear()} Tüm Hakları Saklıdır.
                            <SocialIcons>
                                <SocialIconLink href='/' target='_blank' arial-label='Facebook'></SocialIconLink>
                            </SocialIcons>
                        </WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
