/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { styled } from '@linaria/react';
import { themes } from '../../styles/theme';
import { Sidebar } from '../Sidebar';

const MainStyled = styled.main`
  flex: 1;
  height: 100%;
  background-color: var(--background-color-1);
`;

const ContainerStyled = styled.div`
  width: 100vw;
  height: 100vh;
  color: var(--text-color-1);
  display: flex;
`;

const Layout = () => {
  const [theme, setTheme] = useState<'white' | 'black'>('white');
  return (
    <ContainerStyled className={`${themes[theme]}`}>
      <div>
        <div
          onClick={() => {
            setTheme(theme === 'white' ? 'black' : 'white');
          }}
        >
          换主题
        </div>
        <Sidebar />
      </div>
      <MainStyled>
        <Outlet />
      </MainStyled>
    </ContainerStyled>
  );
};

export default Layout;
