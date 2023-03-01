import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno.js';
import foto from './img/fotoCarol.png';
import email from './img/email.png'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardPequeno
        imagem= {foto}
        nome='Carol Marques' 
        descricao={'Oi! Eu sou Carol e estou estudando para ser desenvolvedora.'}
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardPequeno 
          imagem="https://www.feirapetnor.com.br/wp-content/uploads/2018/12/patrocinio-4.png" 
          nome="Empetur" 
          descricao="A Empresa de Turismo de Pernambuco é responsável pela execução de ações em prol do desenvolvimento do Turismo de Pernambuco. Como Diretora de Estruturação do Turismo, trabalhamos ações em estruturação, qualificação, cadastro e fiscalização de empresas e serviços, e projetos especiais ligados à acessibilidade junto aos municípios com potencial turístico do Estado." 
        />
        
        <CardPequeno
          imagem="http://meioambiente.recife.pe.gov.br/sites/default/files/editada_19.png" 
          nome="SETUR PCR" 
          descricao="Pela Secretaria de Turismo e Lazer da Prefeitura da Cidade do Recife atuei como Gestora de Qualificação, Gerente de Desenvolvimento Turístico e, por fim, Gerente Geral de Desenvolvimento Turístico e Recife Antigo, propondo e executando ações em prol do turismo da cidade do Recife, e desenvolvendo parcerias com empresários, governos e sociedade civil." 
        />

        <CardPequeno 
          imagem="https://www.uninassau.edu.br/sites/mauriciodenassau.edu.br/files/fields/imagemLateral/noticias/2018/03/esse_5.jpg" 
          nome="Centro Universitário Maurício de Nassau" 
          descricao="Lidar com pessoas e trabalhar com o aprendizado constante sempre foram instigantes para mim. Lecionei em cursos de graduação por 9 anos, tendo finalizado esta experiência incrível na UNINASSAU." 
        />
      </div>


      <div className="page-section-container">
        <h2>Contatos</h2>
        <CardPequeno 
          imagem={email}
          descricao="E-mail: carolinemcs@hotmail.com" 
        />
        
        <CardPequeno
          imagem="https://sedurb.es.gov.br/Media/Sedurb/Fotos/10-single-default.jpg" 
          descricao="Endereço: Ruas das Areais do Deserto, s/n, Tatooine"
        />

       </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem ="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

     
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Astrodev" 
          descricao="Oi, eu sou o Astrodev. Sou o chefe dos alunos da Labenu. Adoro pedir e-mails na sexta-feira e esperar os alunos responderem só para responder com uma bronca e dar mais trabalho para eles."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
