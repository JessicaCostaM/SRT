import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tecnica',
  templateUrl: './tecnica.component.html',
  styleUrls: ['./tecnica.component.css']
})
export class TecnicaComponent implements OnInit {

  Tecnicas = [
    {
      nome: "SeGUE",
      descricao:"O trabalho apresenta uma metodologia projetada para facilitar o teste de usabilidade para jogos sérios. A metodologia foi aplicada em um estudo de caso de um jogo educacional medico, chamado MasterMed -que tem como objetivo melhorar o conhecimento sobre medicamentos dos pacientes. A equipe de desenvolvimento da metodologia concentrou-se em criar um processo de analise baseado em observação, no qual os usuários interagem com protótipos iniciais e pesquisadores coletam dados com o objetivo de identificar e resolver problemas de design e interface do usuário que afetam a usabilidade dos jogos.",
      metodo:"A metodologia é organizada em estágios distintos, desde a execução dos testes até a preparação final de uma lista de alterações necessárias. Estabelece as etapas: 1. Design of the Play Session,  2. Selection of the Testers, 3. Performance and Recording of the Play Sessions, 4. Application of the Instrument and Annotation of the Results, 5. Reconciliation of the Results, 6. Preparation of a Task List of ChangesOs designers devem preparar um script detalhado indicando quais tarefas o testador deve executar. O script deve ser orientado por objetivos de aprendizado específicos, além de incluir todos os elementos relevantes de jogabilidade e interface do usuário de design. Os testadores convidados devem representar de perto os usuários finais e imitar o contexto para o qual o jogo sério foi criado. Os testadores são instruídos a falar em voz alta enquanto brincam, expressando seus pensamentos. Durante a sessão de jogo, o avaliador não fornece nenhuma instrução, a menos que o usuário esteja fatalmente preso ou incapaz de continuar. Na quarta etapa, os avaliadores revisam as sessões de jogo identificando e anotando todos os eventos significativos. Um evento é um momento significativo no jogo em que o usuário encontrou um problema ou reagiu visivelmente ao jogo. Cada evento é marcado de acordo com as duas dimensões propostas no instrumento de anotação SeGUE. Na quinta etapa, como existem várias possibilidades resultantes de avaliações discrepantes iniciais dos eventos: (1) um evento observado pode ser igualmente reconhecido por vários revisores com marcação idêntica; (2) um único evento pode ser interpretado e marcado de forma diferente por pelo menos um revisor; ou (3) um evento pode ser reconhecido e marcado por um observador e ignorado por outro. Finalmente, o produto final desse processo de avaliação deve ser uma lista de possíveis melhorias para o jogo, com uma indicação de sua importância em termos de quantas vezes o problema apareceu e com que gravidade afetou o usuário ou interferiu na missão educacional do jogo.",
      avaliacao:"Funcionalidade, Layout / interface do usuário, Gameflow, Conteúdo, Erro técnico",
      referencia:"https://www.hindawi.com/journals/ahci/2012/369637/",
    },
    {
      nome: "Procci, Katelyn",
      descricao:"O trabalho propõe uma abordagem para aplicar de maneira eficiente e eficaz o teste de usabilidade no processo de desenvolvimento de jogos sérios, tal abordagem é baseada em três camadas em que são fornecidos procedimentos passo a passo e medidas de avaliação associadas para avaliar a usabilidade, a jogabilidade e os resultados de aprendizagem simultaneamente com o desenvolvimento do jogo. O procedimento é diferente de outras abordagens de usabilidade porque aborda as necessidades do desenvolvedor, fornecendo dados quantitativos para o especialista em usabilidade. A proposta é uma abordagem em três níveis a ser aplicada em todo o processo de desenvolvimento para maximizar a eficácia de jogos sérios nos quais a usabilidade clássica, a jogabilidade e o mérito educacional são analisados em vários intervalos para garantir que essas peças importantes não sejam sacrificadas em nenhum estágio do desenvolvimento. Essa abordagem foi projetada com pequenos desenvolvedores em mente e foi otimizada para maximizar o retorno do investimento (ROI). Fornecem recursos e diretrizes abrangentes que podem ser usados para melhorar seus próprios modelos de desenvolvimento interno para garantir o desenvolvimento de produtos finais funcionais, agradáveis e eficazes.",
      metodo:"A metodologia inicia com uma fase de  pré-desenvolvimento em que são analisadas e investigadas as características do público-alvo do jogo sério -especialistas podem ser úteis para compilar o perfi do usuário. Idade, sexo e informações demográficas básicas devem ser coletadas, bem como qualquer informação adicional que possa influenciar a interação com o software. Ainda nesta fase inicial, uma análise cognitiva da tarefa deve ser realizada para determinar as demandas da tarefa e os projetos devem ser implementados para reduzir o esforço exercido em tarefas secundárias, como controles e navegação no menu. O próximo passo é Story Boarding and Paper Prototyping e pesquisadores durante essa fase de desenvolvimento devem criar um protótipo em papel do jogo à medida que os desenvolvedores o projetam,  este protótipo deve seguir os storyboards e deve progredir da mesma forma que o jogo de tela para tela. Durante a prototipagem em papel, as perguntas devem se concentrar nos recursos do jogo, na usabilidade geral e na facilidade de entendimento. Os recursos do jogo incluem estilo de arte e jogabilidade, além de narrativa e enredo. Depois de atualizar os storyboards com o feedback dos grupos focais, os programadores criam uma primeira versão alfa do jogo. Esta versão do jogo carece de qualquer tipo de arte final ou design de som e serve como uma extensão do protótipo de papel, deve estar completo apenas em função. Depois testa-se (Usability for Alpha 1) junto com a equipe a versão 1 do jogo; esse procedimento permite que a equipe de desenvolvimentodetecte vários problemas em potencial que podem ser perdidos durante o teste de reprodução devido ao tempo limitado e à exploração às vezes inibida que pode ocorrer com um comportamento observado de perto. Também pode fornecer informações adicionais sobre os problemas que os testadores podem encontrar, permitindo uma compreensão mais profunda das respostas dos testadores durante as avaliações dos usuários.  Os erros e bugs encontrados devem ser registrados em um rastreador de erros, e os problemas que são determinados como violações de fatores humanos e princípios de usabilidade, como controles difíceis. Uma segunda rodada de testes (Usability for Alpha 2) de usabilidade será realizada mais uma vez em pequenos grupos de cerca de cinco indivíduos, mas desta vez os indivíduos serão retirados do público-alvo. Isso é para garantir que quaisquer problemas de usabilidade específicos da população sejam abordados. Nesta fase, os objetivos de aprendizado também serão reavaliados para garantir que o jogo seja não apenas utilizável, mas eficaz. E por fim, após a correção de todos os principais problemas do relatório, o desenvolvimento entra no estágio de desenvolvimento Beta (Usability for Beta). Durante esta fase, a maioria do intenso desenvolvimento ocorre. Por exemplo, toda a arte é concluída e colocada no jogo, todos os menus são finalizados e todos os elementos de toda a experiência do jogo são incluídos e completos.",
      avaliacao:"Usabilidade, Jogabilidade, Eficácia didática",
      referencia:"https://link.springer.com/chapter/10.1007/978-3-642-21708-1_70",
    },
    {
      nome: "PLAY",
      descricao:"Este estudo de acompanhamento concentrou-se na lista refinada, Heuristics of Playability (PLAY), que pode ser aplicada anteriormente no desenvolvimento de jogos, além de auxiliar os desenvolvedores entre pesquisas formais sobre usabilidade / jogabilidade durante o ciclo de desenvolvimento. O PLAY, uma ampla lista de heurísticas, foi desenvolvido para ser usado como uma base generalizada que poderia ser modificada para cada jogo específico. Os princípios PLAY foram criados usando pesquisas atuais e passadas sobre heurística de usabilidade de jogos e princípios de design, bem como as informações mais atualizadas sobre design de jogos superiores de designers de jogos de nível superior da LucasArts, Sega, Microsoft Game Studios, THQ e Disney. Ao contrário do HEP, o PLAY reconhece que o design de jogos é uma arte e uma ciência. A utilização de informações e princípios pessoais da comunidade atual de design de jogos ajuda em uma lista válida de Princípios de Jogos (PLAY). A intenção do PLAY é desenvolver um conjunto completo de princípios e validar esses princípios empiricamente.",
      metodo:"O trabalho apresenta checklist bem definido que pode ser utilizado na fase de avaliação do produto de software, em um processo convencional. Os princípios gerais foram agrupados em várias categorias: jogo, desenvolvimento de habilidades, tutorial, estratégia e desafio, imersão em jogo / história, frescor, usabilidade / mecânica de jogo e controlador / teclado. Este estudo testou a validade desses princípios em relação aos jogos existentes.",
      avaliacao:"Jogo (Jogo duradouro, Desafio, Estratégia e Ritmo, Consistência no mundo dos jogos, Objetivos,  variedade de jogadores e estilos de jogo, percepção do controle dos jogadores), Frieza / Entretenimento / Humor / Emocional Imersão (Conexão Emocional, Frieza / Entretenimento, Humor,  imersão),  Usabilidade e Mecânica dos Jogos (Documentação / Tutorial, status e pontuação, o jogo fornece feedback, Terminologia, Carga no Jogador, Layout da tela, Navegação, Prevenção de Erros, imersão na história do jogo )",
      referencia:"https://www.researchgate.net/publication/221099657_Game_Usability_Heuristics_PLAY_for_Evaluating_and_Designing_Better_Games_The_Next_Iteration",
    },
    {
      nome: "SG-LOM",
      descricao:"O artigo propõe uma contribuição ao conjunto de metadados SG-LOM e avalia aspectos pedagógicos, especificações técnicas e divertidas dos jogos.",
      metodo:"A grade é dividida em quatro seções, cada seção é composta por elementos 'subseções' e cada um desses elementos é associado a um conjunto de 4 critérios para identificar os diferentes aspectos que constituem um jogo sério e descreve cada um separadamente em seu próprio contexto: aspecto educacional, técnico e lúdico. A seção I consiste na identificação de Jogo Sério. O objetivo desta seção é auxiliar na identificação do jogo sério; oferece uma visão global do jogo. Nesta seção são abordos os recursos gerais do jogo, como o nome com o qual o jogo é conhecido e o desenvolvimento de qualquer equipe ou empresa, além do tipo (trata-se do conteúdo do jogo: Drama, Terror, fantasia, mistério , ficção científica ...) e gênero (especifica como o jogo é jogado: estratégia, ação, aventura ...) do jogo. Já na seção II derifica-se especificações pedagógicas e três elementos principais formam esta seção: Conteúdo, Estratégias e Método de Avaliação. A seção III é a de Especificações Divertidas e discute a dimensão lúdica do jogo, formada por dois elementos principais: Aspectos de atratividade (diversão) e jogabilidade. Seção IV: Especificações Técnicas ",
      avaliacao:"Especificações Pedagógicas (Conteúdo, Estratégias, Método de avaliação), Especificações divertidas (Atratividade (Diversão), Jogabilidade), Especificações técnicas (Eficiência técnica, Exigências) ",
      referencia:"https://online-journals.org/index.php/i-jet/article/view/4150/3308",
    },
    {
      nome: "Wangenheim, C. G. ",
      descricao:"O trabalho apresenta o desenvolvimento de um modelo de avaliação da qualidade de jogos educacionais voltados para o ensino de engenharia de software, e avaliação de sua aplicabilidade, utilidade, validade e confiabilidade. A avaliação ocorreu por meio de uma série de estudos de caso, aplicando jogos educacionais de tabuleiro em disciplinas de engenharia de software. Os primeiros resultados indicaram que o modelo pode ser utilizado para avaliar aspectos de motivação, experiência do usuário e aprendizagem em jogos. Dentro da realidade do desenvolvimento de jogos educacionais para o ensino da ES, foram estabelecidos os seguintes requisitos para o modelo: (i) focar em jogos utilizados como material educacional no ensino e aprendizagem de conteúdos curriculares e que tenham objetivos educacionais bem definidos; (ii) ter capacidade de avaliar os efeitos dos jogos na motivação, aprendizagem e experiência de uso dos alunos; (iii) permitir a avaliação formativa para direcionar a melhoria iterativa dos jogos; (iv) permitir a avaliação somativa com o objetivo de comparar jogos e/ou versões de jogos; (v) ser aplicável a jogos de tabuleiro, cartas, digitais e dinâmicas em sala de aula; (vi) ser de rápida aplicação, evitando consumir muito tempo das aulas e minimizando a interrupção da unidade instrucional; (vii) ser de fácil aplicação e não demandar dos seus utilizadores conhecimentos avançados da área de educação, medição ou estatística; (viii) ser acoplável aos modelos de design instrucional. ",
      metodo:"Definição do objetivo de avaliação. Nesta fase tem-se inicio com a definição do objetivo da avaliação. A partir do objetivo de avaliação, são derivadas as medidas referentes aos dados a serem coletados durante o estudo para que se atinja o objetivo da avaliação. Depois vem a fase de Definição da hipótese de pesquisa. A hipótese básica é que o jogo educacional contribui positivamente ao ensino da unidade instrucional, atinge os seus objetivos de aprendizagem, motiva o aluno e promove uma boa experiência do usuário. O terceiro passo é a Seleção da estratégia de pesquisa. A estratégia de pesquisa é selecionada com base no objetivo da avaliação, que neste caso é avaliar a qualidade de jogos educacionais em termos de motivação, experiência do usuário e aprendizagem. Logo após vem o Design de pesquisa. O design de pesquisa delineado foi não experimental com pós-teste ( X O ) usando um único grupo. O jogo educacional é aplicado em um contexto específico, dentro de uma unidade instrucional. Por exemplo, jogos para a fixação de conceitos são tipicamente aplicados após uma série de aulas teóricas. Por fim, Instrumentação. Para avaliar os jogos a partir da percepção dos alunos é desenvolvido um instrumento de medição com base no método proposto.",
      avaliacao:"Atenção, Relevância, Confiança, Satisfação, Interação social, Desafio, Divertimento, Competência",
      referencia:"https://www.researchgate.net/publication/221252125_A_Model_for_the_Evaluation_of_Educational_Games_for_Teaching_Software_Engineering",
    },
    {
      nome: "MEEGA+",
      descricao:[0],
      metodo:[0,1,2,3],
      avaliacao:[0],
      referencia:[0],
    },
    {
      nome: "EGameFlow",
      descricao:[0],
      metodo:[0,1,2,3],
      avaliacao:[0],
      referencia:[0],
    },
    {
      nome: "mGBL",
      descricao:[0],
      metodo:[0,1,2,3],
      avaliacao:[0],
      referencia:[0],
    },
    {
      nome: "PHEG",
      descricao:[0],
      metodo:[0,1,2,3],
      avaliacao:[0],
      referencia:[0],
    },
    {
      nome: "UsaECG",
      descricao:[0],
      metodo:[0,1,2,3],
      avaliacao:[0],
      referencia:[0],
    },
  ]
  constructor(public route:ActivatedRoute) { }
  tecnica:any;
  resultado:any;

  ngOnInit() {
    this.tecnica = this.route.snapshot.paramMap.get("tecnica");
    this.resultado = this.Tecnicas.find(x => x.nome == this.tecnica);
  }
  buscarTecnica(){

  }

}
