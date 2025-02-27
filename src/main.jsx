import { StrictMode } from 'react' //ajuda a identificar possiveis problemas na aplicacao
import { createRoot } from 'react-dom/client' //cria a raiz de um componente react dentro de um elemento html
import App from './App.jsx' //importa o componente principal que e o ponto de entrada da aplicacao
import { AuthProvider } from './app/context/authContext.jsx' //responsavel por gerenciar o estado de autenticacao da aplicacao
import { BrowserRouter } from 'react-router-dom' //habilita o roteamento e permite a navegacao entre diferentes paginas da aplicacao
//cria uma raiz react dentro do elemento html com o id 'root'
createRoot(document.getElementById('root'))
//renderiza o componente dentro da raiz
.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

/*
<StrictMode>: Envolve toda a aplicacao para ativar o modo estrito
<BrowserRouter>: Envolve a aplicacao para habilitar o roteamento
<AuthProvider>: Envolve o componente App para fornecer o contexto de autenticacao para todos os componentes filhos
<App />: Renderiza o componente principal da aplicacao, que contem toda a logica e estrutura da sua interface do usuario
*/