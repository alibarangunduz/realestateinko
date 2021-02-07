import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'



const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                            Hakkında
                    </SidebarLink>
                    <SidebarLink to="discover" onClick={toggle}>
                            Kesfet
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                            Hizmetler
                    </SidebarLink>
                    <SidebarLink to="signup" onClick={toggle}>
                            Kayıt 
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Giriş Yap</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
