import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx'; // 确保引入的是 App
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App /> {/* 渲染 App */}
    </StrictMode>
);
