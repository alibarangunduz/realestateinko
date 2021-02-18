import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/ilanver" onClick={toggle}>
            Hakkında
          </SidebarLink>
          <SidebarLink to="/ilanlarim" onClick={toggle}>
            Kesfet
          </SidebarLink>
          <SidebarLink to="/gelenkutusu" onClick={toggle}>
            Hizmetler
          </SidebarLink>
          <SidebarLink to="/analiz" onClick={toggle}>
            Kayıt
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/inkoadmin">Çıkış Yap</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
