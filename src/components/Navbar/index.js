import React from 'react'
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>INKO AS</NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">
                                Hakkında
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">
                                Kesfet
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">
                                Hizmetler
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">
                                Kayıt Ol
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Giriş Yap</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
