import React from 'react'
import { SidebarContainer, CloseIcon, Icon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'



const Sidebar = () => {
    return (
        <SidebarContainer>
            <Icon>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about'>
                            Hakkında
                    </SidebarLink>
                    <SidebarLink to='discover'>
                            Kesfet
                    </SidebarLink>
                    <SidebarLink to='services'>
                            Hizmetler
                    </SidebarLink>
                    <SidebarLink to='signup'>
                            Kayıt Ol
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Giriş Yap</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
