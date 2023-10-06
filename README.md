<h1>Node SOLID, feito e documentado por mim</h1>

<nav>
    <a href="#structure_folder">Estrutura de pastas</a>
    <a href="#solid_explanation">Explicação sobre SOLID</a>
</nav>

<section id="structure_folder">
<h3>🚀 Estrutura escalável de um projeto Node, utilizando SOLID.</h3>
<div>
  <img src="https://i.ytimg.com/vi/h6_gg7KchPw/maxresdefault.jpg" alt="Imagem" width="280px" height="180px">

<h3>Pastas iniciais</h3>    
<pre>
    src
        ├─ commands 📁
        │        ├─ user.command.ts
        │        └─ ...
        ├─ http 📁
        │    ├─ controllers 📁
        │    │        ├─ user.controller.ts
        │    │        └─ ...
        │    ├─ routes 📁
        │    │    ├─ user.router.ts
        │    │    └─ ...
        │    └─ ...
        ├─ repositories 📁
        ├─ app.ts
        ├─ server.ts
        └─ ...
</pre>
    
<h3>Outras pastas...</h3>    
<pre>
    ├─ controllers/ 📁
    │       └─ User 📁
    │       │  ├─ user.controller.ts
    │       │  └─ ...
    │       └─ ...
    ├─ repositories/ 📁
    │       ├─ UserRepository.ts
    │       └─ ...
    ├─ services/ 📁
    │       ├─ user.service.ts
    │       └─ ...
    ├─ models/ 📁
    │       ├─ UserModel.ts
    │       └─ ...
    ├─ middlewares/ 📁
    │       ├─ TokenVerify.ts
    │       └─ ...
    ├─ routes/ 📁
    │       └─ User 📁
    │       │   ├─ user.route.ts
    │       │   └─ ...
    │       └─ ...
    ├─ utils/ 📁
    │       ├─ PWDHash.ts
    │       └─ ...
    ├─ app.ts
    └─ server.ts
</pre>

<p>Pastas 📁 em geral: routes, api, middlewares, utils ou helpers, tests ou __tests__, controllers, services, public, static, models ou entities, repositories ou data-access, config, src, dto, interfaces, types ou @types, commands ou tasks, providers, database, logs ou log, migrations, locales ou i18n, assets, scripts. </p>

<h4 style="color: red;">É importante lembrar que a estrutura de pastas pode variar de acordo com as preferências da equipe e as especificidades do projeto.</h4>
</div>

<h2>Explicação sobre cada pasta: <small>Obs: Explicações geradas pelo ChatGPT</small></h2>

<div>
<p>
    <strong>1. routes</strong>: Essa pasta contém os arquivos de definição de rotas do aplicativo. Ela é responsável por mapear as URLs para as ações correspondentes do controlador.
</p>

<p>
    <strong>2. api</strong>: Essa pasta pode ser usada dentro de routes para agrupar as rotas relacionadas à API do aplicativo. Isso ajuda a manter a estrutura organizada, especialmente em projetos maiores com várias partes da aplicação.
</p>

<p>
    <strong>3. middlewares</strong>: Essa pasta contém os middlewares do aplicativo. Middlewares são funções que são executadas antes ou depois do processamento das rotas e permitem executar lógica adicional, como autenticação, validação de dados ou manipulação de cabeçalhos.
</p>

<p>
    <strong>4. utils ou helpers</strong>: Essa pasta contém funções utilitárias ou auxiliares que podem ser reutilizadas em diferentes partes do aplicativo. Elas ajudam a simplificar o código e realizar tarefas comuns, como formatação de datas, manipulação de strings, cálculos matemáticos, entre outros.
</p>

<p>
    <strong>5. tests ou __tests__</strong>: Essa pasta contém os arquivos de teste do aplicativo. É onde você pode escrever testes automatizados para garantir que as funcionalidades do aplicativo estejam funcionando corretamente.
</p>

<p>
    <strong>6. controllers</strong>: Essa pasta contém os controladores do aplicativo. Os controladores são responsáveis por receber as requisições do cliente, lidar com a lógica de negócios e retornar as respostas adequadas.
</p>

<p>
    <strong>7. services</strong>: Essa pasta contém a lógica de negócios do aplicativo. Os serviços encapsulam a funcionalidade do aplicativo e são responsáveis por realizar operações complexas, como interações com o banco de dados, chamadas de API externas e regras de negócios.
</p>

<p>
    <strong>8. public ou static</strong>: Essa pasta é usada para armazenar arquivos estáticos, como arquivos CSS, imagens, arquivos JavaScript, que serão servidos pelo aplicativo.
</p>

<p>
    <strong>9. models ou entities</strong>: Essa pasta contém as definições de modelos de dados ou entidades do aplicativo. Os modelos representam a estrutura dos dados utilizados pelo aplicativo e podem ser usados para mapear objetos para o banco de dados ou validar e manipular os dados recebidos.
</p>

<p>
    <strong>10. repositories ou data-access</strong>: Essa pasta contém as implementações de acesso aos dados. Os repositórios são responsáveis por interagir com a camada de armazenamento de dados, como bancos de dados ou serviços de API externos.
</p>

<p>
    <strong>11. config</strong>: Essa pasta contém os arquivos de configuração do aplicativo, como configurações de banco de dados, variáveis de ambiente, chaves de API, entre outros.
</p>

<p>
    <strong>12. src</strong>: Essa pasta representa a raiz do código-fonte do aplicativo, onde estão localizados todos os arquivos relevantes.
</p>

<p>
    <strong>13. dto</strong>: Essa pasta contém os objetos de transferência de dados (DTOs). Os DTOs são utilizados para transferir dados entre diferentes partes do aplicativo, geralmente entre controladores e serviços.
</p>

<p>
    <strong>14. interfaces</strong>: Essa pasta contém as interfaces do aplicativo, que definem a estrutura de um objeto ou classe e podem ser usadas para garantir a consistência do código e facilitar a manutenção.
</p>

<p>
    <strong>15. types ou @types</strong>: Essa pasta contém arquivos de definição de tipos TypeScript. Eles são usados para fornecer informações de tipo para bibliotecas externas ou para criar tipos personalizados em seu projeto.
</p>

<p>
    <strong>16. commands ou tasks</strong>: Essa pasta pode conter classes ou arquivos relacionados a comandos ou tarefas específicas que podem ser executadas no aplicativo. Esses comandos podem realizar ações específicas, como importar dados, executar tarefas agendadas ou executar scripts personalizados.
</p>

<p>
    <strong>17. providers</strong>: Essa pasta contém classes ou objetos que fornecem serviços para diferentes partes do aplicativo. Os provedores podem ser injetados em outros componentes para fornecer funcionalidades específicas.
</p>

<p>
    <strong>18: database</strong>: Essa pasta pode conter arquivos relacionados à configuração e gerenciamento do banco de dados, como scripts de migração, arquivos de configuração ou utilitários para interagir com o banco de dados.
</p>

<p>
    <strong>19: logs ou log</strong>: Essa pasta é usada para armazenar arquivos de log gerados pelo aplicativo. Os logs podem registrar informações, erros e eventos relevantes durante a execução do aplicativo.
</p>

<p>
    <strong>20. migrations</strong>: Essa pasta é usada em sistemas que utilizam bancos de dados relacionais. Ela contém os arquivos de migração, que são usados para gerenciar alterações no esquema do banco de dados ao longo do tempo.
</p>

<p>
    <strong>21. locales ou i18n</strong>: Essa pasta é usada para armazenar arquivos relacionados à internacionalização (i18n) do aplicativo. Eles contêm as traduções e configurações relacionadas aos diferentes idiomas e localizações suportados pelo aplicativo.
</p>

<p>
    <strong>22. assets</strong>: Essa pasta é usada para armazenar recursos estáticos adicionais do aplicativo, como arquivos de configuração, documentos, imagens, vídeos, entre outros.
</p>

<p>
    <strong>23. scripts</strong>: Essa pasta contém scripts personalizados ou utilitários relacionados ao desenvolvimento, implantação ou execução do aplicativo. Esses scripts podem automatizar tarefas comuns, como a configuração do ambiente de desenvolvimento, a execução de tarefas de construção ou a implantação do aplicativo em diferentes ambientes.
</p>
</div>
</section>
<section id="solid_explanation">
<h1>Explicação sobre SOLID</h1>

<div>
    <h2 style="font-size: 24px;">S - Single Responsibility Principle (Princípio da Responsabilidade Única):</h2>
    <h3>Resumo: Uma classe deve ter apenas uma razão para mudar.</h3>
    <p><strong>Explicação</strong>: Cada classe deve ter apenas uma responsabilidade, ou seja, realizar apenas uma tarefa específica. Isso torna o código mais coeso e mais fácil de entender e manter.</p>
</div>
<div>
    <h2 style="font-size: 24px;">O - Open/Closed Principle (Princípio do Aberto/Fechado):</h2>
    <h3>Resumo: Uma classe deve estar aberta para extensão, mas fechada para modificação.</h3>
    <p><strong>Explicação</strong>: Você pode adicionar novos comportamentos à classe sem alterar seu código existente. Isso é alcançado através da herança, interfaces e polimorfismo.</p>
</div>
<div>
    <h2 style="font-size: 24px;">L - Liskov Substitution Principle (Princípio da Substituição de Liskov):</h2>
    <h3>Resumo: Subtipos devem ser substituíveis por seus tipos base sem alterar o comportamento do programa.</h3>
    <p><strong>Explicação</strong>: Se uma classe é um subtipo de outra, ela deve poder ser usada no lugar da classe base sem que o programa produza resultados inesperados. Isso é fundamental para a herança e a polimorfismo.</p>
</div>
<div>
    <h2 style="font-size: 24px;">I - Interface Segregation Principle (Princípio da Segregação de Interfaces):</h2>
    <h3>Resumo: Uma classe não deve ser forçada a implementar interfaces que ela não usa.</h3>
    <p><strong>Explicação</strong>: Evite interfaces "gordas" que contenham métodos não relevantes para a classe que a implementa. Em vez disso, use várias interfaces menores e específicas.</p>
</div>
<div>
    <h2 style="font-size: 24px;">D - Dependency Inversion Principle (Princípio da Inversão de Dependência):</h2>
    <h3>Resumo: Dependa de abstrações, não de implementações concretas.</h3>
    <p><strong>Explicação</strong>: Módulos de alto nível não devem depender de módulos de baixo nível, ambos devem depender de abstrações. Além disso, abstrações não devem depender de detalhes, detalhes devem depender de abstrações. Isso promove a flexibilidade e a facilidade de manutenção.</p>
</div>
</section>
