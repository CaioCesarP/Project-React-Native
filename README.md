# Project React Native

Função do projeto entender sobre o react native e como fazer aplicações, além disso aprender como funciona o typescript para criação de componentes reutilizáveis.

## Documentação

Documentação dos componentes.

### Text

Aqui temos todos os componentes de texto.

- Props

> textStyles
> Optativa, nele é colocado os style formato `textStyles={{ estilos }}`

> children
> Necessária, é o filho que fica dentro do componente.

#### BigText

- Costumização

Textos com um tamano de `37px` e de peso `bold`.

#### RegularText

- Costumização

Textos com um tamano de `15px` e de peso `regular`.

#### SmallText

- Costumização

Textos com um tamano de `13px` e de peso `regular`.

### Button

Aqui temos todos os componentes de texto.

- Props

> textStyles
> Optativa, nele é colocado os style formato `textStyles={{ estilos }}`

> children
> Necessária, é o filho que fica dentro do componente.

#### RegularButton

- Costumização

Utilizado o [RegularText](#regulartext) na parte do texto.

Padding de `20px`, radius de `20px` e um width de `100%`.

#### SmallButton

- Costumização

Utilizado o [SmallText](#smalltext) na parte do texto.

Padding de `10px`, radius de `20px` e um width de `100%`.

### Card

Card do cartão do cliente, exibido saldo, final do cartão e logo do cartão.

- Props

\* CardProps \*

> id
> Necessária, id que do card.

> accountNo
> Necessária, número da conta.

> balance
> Necessária, valor de balanço total da conta.

> alias
> Optativa, apelido do cartão.

> logo
> Necessária, logo do cartão, como Visa e MasterCard.

\* CardSectionProps \*

> data
> Necessária, array de objetos contendo todas as informações do cartão do cliente.

#### CardSection

Recebe a DATA da home, onde é extraido as informações dos cards.

#### CardItem

- Costumização

Utilizado o [RegularText](#regulartext) na parte do texto.

Utilizado o [SmallText](#smalltext) na parte do texto.

Exibição de data.

### Transaction

Extrato de compra, Exibido em que foi gasto, valor, data e icon refetente.

- Props

\* TransactionProps \*

> id
> Necessária, id que do card.

> title
> Necessária, titulo da compra.

> subtitle
> Necessária, subtitulo da compra.

> amount
> Necessária, valor da compra.

> date
> Necessária, data da compra.

> art
> Necessária, objeto que recebe icon, nome do icon para ser colocado, e background, cor de fundo do icon.

\* TransactionSectionProps \*

> data
> Necessária, array de objetos contendo todas as informações do cartão do cliente.

\* TransactionAviProps \*

> icon
> Necessária, nome do icon para ser colocado.

> background
> Necessária, cor de fundo do icon.

#### TransactionAvi

Icon do extrato.

#### TransacationItem

Item do extrato

- Costumização

Utilizado o [RegularText](#regulartext) na parte do texto.

Utilizado o [SmallText](#smalltext) na parte do texto.

#### TransactionSection

Junção de todos os itens do extrato

- Costumização

Utilizado o [TransactionAvi](#transactionavi).

Utilizado o [TransactionItem](#transacationitem).

### SendMoney

Envio de dinheiro, exibe opção para adicionar novo recebedor, card de pessoa com nome, valor para enviar e imagem do recebedor.

- Props

\* SendMoneyProps \*

> id
> Necessária, id que do card.

> name
> Necessária, nome do usuário que vai receber o valor.

> amount
> Necessária, valor que o usuário vai receber.

> background
> Necessária, cor de fundo do card.

> img
> Necessária, foto do usuário.

\* SendMoneySectionProps \*

> data
> Necessária, array de objetos contendo todas as informações do cartão do cliente.

#### SendMoneySection

Junção de todos os usuários para enviar.

- Costumização

Utilizado o [RegularText](#regulartext) na parte do texto.

Utilizado o [SmallText](#smalltext) na parte do texto.

#### SendMoneyItem

Usuário para envio.

- Costumização

Utilizado o [RegularText](#regulartext) na parte do texto.

Utilizado o [SmallText](#smalltext) na parte do texto.

## Rodando projeto

> Instalando dependências:

`npm install`

> Iniciando projeto:

`npm start`

> Abrir aplicativo:

Baixar aplicativo Expo Go para testar aplicativo.
