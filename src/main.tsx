import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "@radix-ui/themes/styles.css";
import './index.css'

import App from './App.tsx'

import { Theme, ThemePanel } from '@radix-ui/themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Theme accentColor="purple" grayColor="sand" panelBackground="solid" radius="small" scaling="95%">
      <App />
      <ThemePanel />
    </Theme>
  </StrictMode>,
)
