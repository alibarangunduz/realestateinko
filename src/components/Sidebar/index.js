import React, { useState, useEffect, useContext } from "react";
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
import { fire } from "../../firebase";
import { UserContext } from "../../UserContext";

const Sidebar = ({ isOpen, toggle }) => {
  const { user, setUser } = useContext(UserContext);
  const handleLogout = () => {
    fire.auth().signOut();
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
    console.log(user);
  }, []);

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
          {user ? (
            <SidebarRoute to="/" onClick={handleLogout}>
              Çıkış Yap
            </SidebarRoute>
          ) : (
            <SidebarRoute to="/signin">Giriş Yap</SidebarRoute>
          )}
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
