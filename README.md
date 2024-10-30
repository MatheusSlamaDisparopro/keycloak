**Resumo Keycloak**

Keycloak é um serviço de gerenciamento de autenticação e controle de acessos open-source. Ele é compatível com protocolos como OpenID Connect, OAuth 2.0 e SAML 2.0. Além do SSO, o Keycloak suporta autenticação multifatorial, gerenciamento de usuários e integração com provedores externos como Google, Facebook e Apple.

**Funcionalidades do Keycloak**

**Gerenciamento de usuários**  
O gerenciamento de usuários no Keycloak permite que administradores configurem e controlem o acesso de usuários a diversos sistemas e aplicativos de forma centralizada. Esse gerenciamento envolve tarefas como a criação de usuários, definição de permissões, personalização de perfis e aplicação de políticas de segurança, tudo dentro do realm no Keycloak.

**Principais funcionalidades de gerenciamento de usuários no Keycloak:**

- **Realms**: Realms são divisões que permitem organizar e gerenciar autenticação e autorização de maneira isolada. Funcionam também como ambientes separados, com seu próprio conjunto de usuários, funções, clientes (aplicativos) e configurações de segurança.
- **Criação e configuração de usuários**: Os administradores podem adicionar usuários manualmente ou configurar integrações para sincronizar com bancos de dados externos, como LDAP ou Active Directory. Cada usuário pode ter atributos personalizados, grupos, papéis específicos e credenciais, como senha ou métodos de autenticação multifatorial.
- **Atribuição de papéis e grupos**: O Keycloak permite a criação de roles e groups, que ajudam a gerenciar permissões e acessos de forma mais organizada.
- **Gerenciamento de sessões**: O Keycloak oferece controle centralizado de sessões, permitindo que administradores monitorem e encerrem sessões ativas dos usuários quando necessário.
- **Autenticação e autorização avançada**: Além do login tradicional, o Keycloak suporta autenticação multifatorial (MFA), políticas de força de senha e autenticação social (ex.: Google, Facebook).
- **Recuperação de senha e gerenciamento de conta**: O Keycloak permite a configuração de fluxos para recuperação de senha, registro de novos usuários e confirmação de e-mail, garantindo que o usuário tenha acesso controlado e seguro à conta.
- **Admin Console**: Todas essas funcionalidades são acessíveis por uma interface administrativa chamada Admin Console, onde administradores gerenciam configurações de usuários, acessos e políticas de segurança.

**2FA**  
A autenticação de dois fatores (2FA) é uma medida de segurança que requer que os usuários forneçam formas de verificação para acessar uma conta ou sistema. O 2FA aumenta a segurança das contas de usuário, exigindo uma combinação de login e senha do usuário e um código gerado por um aplicativo de autenticação ou enviado por SMS. Os usuários podem ser obrigados a ativar a 2FA ao se registrarem ou ao fazerem login pela primeira vez, dependendo das políticas de segurança da organização configuradas no Keycloak. Quando a 2FA está habilitada, após inserir a senha corretamente, o usuário é solicitado a fornecer o segundo fator de autenticação, como um código gerado pelo aplicativo de autenticação ou pelo e-mail. Somente após a validação desse código, o acesso é concedido.

**Métodos de autenticação**: O Keycloak permite a configuração de vários métodos de autenticação para a 2FA, incluindo:
- **Aplicativos de autenticação**: Como Google Authenticator, que geram códigos temporários baseados em tempo (TOTP).
- **Mensagens SMS**: Envio de códigos de verificação por SMS para o número de telefone do usuário.
- **E-mail**: Envio de códigos de verificação para o endereço de e-mail registrado.

**Token**  
O Keycloak utiliza o token no padrão JWT (JSON Web Token), que é um formato de token amplamente utilizado em sistemas de autenticação e autorização. Ele permite a troca de informações seguras entre servidor e cliente. Um token JWT é composto por três partes:
- **Header**: Contém o tipo do token (JWT) e o algoritmo de assinatura, como HMAC SHA256 ou RSA.
- **Payload**: Carrega as informações ou "claims", que são dados do usuário ou da sessão.
- **Signature**: Garante que o token não foi alterado. Ela é gerada combinando o header e o payload, e aplicando o algoritmo de assinatura com uma secret key ou uma private key.

**Protocolos do Keycloak**

**SSO**  
O SSO (Single Sign-On) é um recurso que permite que os usuários façam login em diferentes aplicativos conectados usando uma única autenticação. Isso significa que, após fazer login em um sistema, o usuário não precisa se autenticar novamente ao acessar outros sistemas que compartilham o mesmo realm no Keycloak.

**Como o SSO funciona no Keycloak**:
- **Realms como ambientes de login**: No Keycloak, um realm é uma divisão de configuração isolada, onde usuários, aplicativos e configurações de autenticação são definidos. O SSO funciona dentro do contexto de um realm, então todos os aplicativos dentro de um realm compartilham a mesma sessão de login.
- **Tokens e sessão de usuário**: Quando um usuário faz login em um aplicativo, o Keycloak emite tokens que contêm as informações de autenticação. Esses tokens podem ser usados por outros aplicativos conectados para verificar a identidade do usuário, eliminando a necessidade de repetir o login.
- **Fluxos de autenticação e protocolo**: O Keycloak usa protocolos como OpenID Connect e SAML para gerenciar o SSO.
- **Logout centralizado**: No Keycloak, ao sair de um dos aplicativos conectados, a sessão do usuário é encerrada para todos os aplicativos associados ao realm. Isso garante que, ao sair de uma conta, o usuário esteja desconectado em toda a rede de aplicativos.

**OAuth 2.0**  
O OAuth 2.0 é um protocolo de autorização que permite que aplicativos acessem recursos em nome de um usuário, sem que precisem saber a senha desse usuário. Por meio dos tokens de acesso, você concede permissão por meio de uma janela de login do Google ou outro provedor externo.
- **Token de acesso**: Após a permissão, o Google gera um token de acesso específico para o aplicativo. Esse token funciona como uma chave que permite o acesso limitado aos seus dados, mas sem dar ao aplicativo sua senha ou informações sigilosas.
- **Acesso aos dados**: O aplicativo usa esse token para acessar suas fotos no Google, mas só pode fazer o que você permitiu (por exemplo, ver fotos, mas não deletá-las).
- **Expiração do token**: Os tokens de acesso têm validade limitada. Quando expiram, o aplicativo precisa pedir um novo token, mantendo o controle do acesso seguro.

**OpenID Connect**  
OpenID Connect é um protocolo de autenticação que permite que usuários façam login em várias plataformas usando uma única conta. Diferente do OAuth 2.0, que é focado na autorização, o OpenID é voltado para autenticação, garantindo que o usuário é realmente quem diz ser.

- **Escolha de provedor de identidade**: Primeiro, o usuário escolhe um provedor de identidade confiável (como Google, Facebook ou outros que suportam OpenID).
- **Redirecionamento e login**: Quando o usuário tenta acessar um serviço que usa OpenID, ele é redirecionado para o site do provedor de identidade para se autenticar.
- **Token de autenticação**: Após o login, o provedor de identidade envia um token de autenticação ao serviço requisitado. Esse token confirma a identidade do usuário, permitindo que ele acesse o serviço sem criar uma nova conta ou senha.

**SAML 2.0**  
O SAML 2.0 (Security Assertion Markup Language) é um padrão aberto usado para autenticação e troca de informações de identidade entre partes. Ele permite que usuários façam login em múltiplos aplicativos com uma única credencial, simplificando o processo de autenticação em ambientes corporativos e de serviços online.

- **Provedor de identidade (IdP)**: É a entidade que autentica o usuário e emite as assertions SAML. Ele verifica as credenciais do usuário e gera um token que contém informações sobre a autenticação.
- **Provedor de serviço (SP)**: É a entidade que recebe e processa as assertions SAML do IdP. O SP confia nas informações do IdP para permitir o acesso ao usuário.
- **Assertions**: São declarações feitas pelo IdP sobre a identidade do usuário, incluindo informações como a autenticação realizada, atributos do usuário (como e-mail, nome, etc.) e informações sobre a validade da sessão.
- **Bindings e profiles**: O SAML define diferentes maneiras de transportar as assertions (bindings) e perfis de uso, que especificam como o SAML deve ser usado em contextos específicos.

**Como funciona o SAML 2.0**:
- **Login**: Quando um usuário tenta acessar um SP, ele é redirecionado para o IdP para autenticação.
- **Autenticação**: O usuário insere suas credenciais no IdP.
- **Geração de assertion**: Após uma autenticação bem-sucedida, o IdP gera uma assertion SAML e a envia de volta ao SP, geralmente via um navegador.
- **Validação**: O SP valida a assertion e permite o acesso ao usuário, com base nas informações contidas na assertion.

**Hybrid Flow**  
O Hybrid Flow é um modo de autenticação do protocolo OpenID Connect que combina características de dois outros fluxos de autenticação: o Authorization Code Flow e o Implicit Flow. Ele permite que aplicações obtenham o token de acesso e o token de identificação (ID token) de forma flexível e segura.
