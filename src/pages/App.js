
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);


  const handleSearchRepo = async () => {

    if(!currentRepo){
      alert('Informe um endereço de repositório')
      return;
    }
    try{
      const {data} = await api.get(`repos/${currentRepo}`)
      if(!data.id || data.id === 0){
        alert('Repositório não existe')
        return;
      } else {
        const isExist = repos.find(repo => repo.id === data.id);

        if(!isExist){
        setRepos(prev => [...prev, data]);
        setCurrentRepo('')
        return
        }
        alert('Repositório já foi adicionado')
    }
      }catch (error) {
        console.error('Erro na requisição:', error);
        alert('Erro ao buscar os dados. Tente novamente.');
    }}
  

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);
    const updatedRepos = repos.filter(repo => repo.id !== id)
    setRepos(updatedRepos)
  }


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
