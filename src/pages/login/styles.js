import styled from 'styled-components'

import bgLogin from '../../assets/bg-login.jpg'

export const MainLogin = styled.main`
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100%;
`

export const BoxLogin = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 50%;

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const BoxBg = styled.section`
  background-image: url(${bgLogin});
  background-position: center top;
  background-size: cover;
  height: 100%;
  width: 50%;

  @media (max-width: 767px) {
    display: none;
  }
`

export const BoxFormLogin = styled.div`
  padding: 2.5rem;
  width: 100%;

  @media (min-width: 767px) {
    width: 35rem;
  }

  h1 {
    color: var(--preto);
    font-weight: var(--bold);
  }

  h2 {
    color: var(--cinza);
  }
`
