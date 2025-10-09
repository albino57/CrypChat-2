import React, { useState } from 'react';
import { SunIcon, SunMoonIcon, MoonIcon } from './SunMoonIcon.jsx';
import { useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeManager.jsx';
import RegisterModalComponent from './RegisterModalComponent.jsx';

//↓-------------- ↓LOGIN PAGE↓ --------------↓
function LoginPage() {
  const navigate = useNavigate();
  const { theme, cycleTheme } = useTheme();
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false); //Cria um estado para controlar se o modal está aberto ou fechado

  const handleLogin = (event) => {
    event.preventDefault(); // Impede que a página recarregue
    console.log("Navegando para a página de chat...");
    navigate('/chat'); // Navega para a rota "/chat"
  };

  return (
    <div className="flex justify-center items-center min-h-dvh bg-background">
      <div className="relative bg-surface p-10 rounded-lg shadow-lg w-full max-w-sm text-center">

        {/*Div do tema*/}
        <div className="absolute top-4 right-4">
          <button onClick={cycleTheme} title="Mudar Tema" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors">
            {/*Renderiza um ícone diferente dependendo do tema atual */}
            {theme === 'light' && <SunIcon />}
            {theme === 'gray' && <SunMoonIcon />}
            {theme === 'dark' && <MoonIcon />}
          </button>
        </div>

        <div className="flex justify-center items-center gap-2 mb-2">
          <h1 className="text-primary text-4xl font-bold">CrypChat</h1>
          <img src="/logo.png" alt="CrypChat Logo" className="w-14 h-14 mb-2" /> {/*Imagem do logo*/}
        </div>



        <p className="text-text-secondary mb-8">Seu chat Anônimo</p>

        <form onSubmit={handleLogin}>
          <div className="text-left mb-4 font-bold">
            <input
              type="text"
              placeholder="👤Usuário"
              className="w-full p-2 border border-gray-300 rounded bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="text-left mb-6 font-bold">
            <input
              type="password"
              placeholder="🔑Senha"
              className="w-full p-2 border border-gray-300 rounded bg-gray-50 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-primary text-white font-bold rounded cursor-pointer hover:bg-primary-dark transition-colors"
          >
            Conectar
          </button>
        </form>

        <div className="mt-6"> {/*DIV do MODAL */}
          <a href="#"
          onClick={(e) => {
            e.preventDefault(); //Impede que a página "pule" para o topo
            setRegisterModalOpen(true); //Muda o estado para 'true', fazendo o modal aparecer
          }}
            className="text-sm text-text-secondary hover:underline">
            Solicitar Acesso
          </a>
        </div>
      </div>
      <RegisterModalComponent
        isOpen={isRegisterModalOpen}
        onClose={() => setRegisterModalOpen(false)}
      />
    </div>
  );
}
//↑-------------- ↑LOGIN PAGE↑ --------------↑

export default LoginPage;