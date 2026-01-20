import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Apresentation from './components/sections/Apresentation/Apresentation.tsx'
import './styles/colors.css';
import AboutMe from './components/sections/AboutMe/AboutMe.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Apresentation />
    <AboutMe />
  </StrictMode>,
)
