# n2Jonatas
Atividade de Autenticação e
Autorização
Criar um sistema de cadastro de novos
usuários e configurar permissões de acesso conforme o papel de cada
usuário. O Administrador (ADM) poderá desabilitar usuários, enquanto o
Gerente poderá visualizar a lista de usuários cadastrados. Quando um usuário
comum fizer login, ele será automaticamente redirecionado para a sua página
de perfil.

Tecnologias a serem usadas
Back-End:
Java 17
Spring Boot
Spring Security
Front-End:
Angular 17
PrimeNG

Especificações da Atividade
1. Componentes a Serem Implementados:
Formulário de Cadastro de Usuários: Disponível para que todos os
usuários (ADM, Gerente ou comum) possam preencher e cadastrar seus
dados.
Tela de Perfil: Exibe as informações do usuário logado. Após o login, todos
os usuários devem ser redirecionados automaticamente para esta tela.
Lista de Usuários: Exibida apenas para o Administrador e o Gerente. O
Administrador terá permissão para habilitar/desabilitar usuários, enquanto o

Atividade de Autenticação e Autorização 2

Gerente poderá apenas visualizar a lista, sem permissões de edição.
2. Funcionalidades de Gerenciamento de Usuários:
Administrador (ADM): Pode visualizar todos os usuários cadastrados e
habilitá-los ou desabilitá-los conforme necessário. Implemente um botão
de “Habilitar/Desabilitar” ao lado de cada usuário na lista, visível apenas
para o Administrador.
Gerente: Tem acesso de leitura à lista de usuários, podendo visualizá-la,
mas sem permissões para realizar alterações.
3. Configuração de Autenticação e Autorização:
AuthService (Angular): Implemente a lógica de autenticação (login) e
verificação dos papéis dos usuários. O serviço deve definir quem pode
acessar cada página.
Guards para Rotas (Angular): Proteja as rotas da aplicação com guards que
controlam o acesso conforme as permissões abaixo:
AuthGuard: Permite o acesso apenas a usuários autenticados.
AdmAuthGuard: Permite o acesso apenas ao Administrador para editar
a lista de usuários.
GerenteAuthGuard: Permite o acesso ao Gerente para a visualização
da lista de usuários, sem edição.
4. Regras de Acesso:
Página de Login: Deve ser a tela inicial da aplicação. Após o login, todos os
usuários devem ser redirecionados automaticamente para a página de
Perfil.
Permissões para Acessar Componentes:
Administrador (ADM): Tem acesso total a todas as páginas e
funcionalidades, incluindo habilitar/desabilitar usuários na lista.
Gerente: Pode acessar todas as páginas, exceto a página de
administração, e tem permissão apenas de visualização na lista de
usuários.
Usuário Comum: Acesso apenas à própria página de perfil e à página
Home, sem acesso à lista de usuários.

Atividade de Autenticação e Autorização 3

Aplicação das Regras: As regras de controle de acesso devem ser
configuradas na camada de segurança no Spring Security e replicadas
com guards no AuthService do Angular.

Entrega
1. Código: Suba o projeto em um repositório (GitHub ou GitLab).
2. Link do Repositório: Compartilhe o link no portal de entrega.
Referências e Materiais de Apoio
Exemplo de projeto desenvolvido em sala: webSecurity
Exemplo de Spring Security: engSecurity
Exemplo de autenticação com JWT: jwt
