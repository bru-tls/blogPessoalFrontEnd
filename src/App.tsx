import './App.css';
import Navbar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './components/temas/listatemas/listaTemas';
import FormularioTema from './components/temas/formulariotemas/FormularioTema';
import DeletarTema from './components/temas/deletartema/DeletarTema';
import ListaPostagens from './components/postagens/listapostagens/ListaPostagens';
import FormularioPostagem from './components/postagens/formulariopostagem/FormularioPostagem';
import Perfil from './pages/perfil/Perfil';
import { ToastContainer } from 'react-toastify';
import DeletarPostagem from './components/postagens/deletarpostagem/DeletarPostagem';

function App() {
  return (
    <>
    <AuthProvider>
    <ToastContainer />
    <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
            <Route path="/" element={<Login />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/cadastro" element={<Cadastro />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/temas" element={<ListaTemas />} />
                            <Route path="/cadastrartema" element={<FormularioTema />} />
                            <Route path="/editartema/:id" element={<FormularioTema />} />
                            <Route path="/deletartema/:id" element={<DeletarTema />} />
                            <Route path="/postagens" element={<ListaPostagens />} />
                            <Route path="/cadastrarpostagem" element={<FormularioPostagem />} />
                            <Route path="/editarpostagem/:id" element={<FormularioPostagem />} />
                            <Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
                            <Route path="/perfil" element={<Perfil />} />
              </Routes>
          </div>
          <Footer />
        </BrowserRouter>
        </AuthProvider>
    </>
  );
}
export default App;