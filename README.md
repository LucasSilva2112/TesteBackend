		# Plataforma de Gestao de Produtos e Integração com E-Catalogos.

	Este projeto é uma API backend desenvolvida com Node.js, Express e Prisma, com o objetivo de gerenciar produtos,
 variantes, SKUs e preços, além de integrar dados com o sistema E-Catálogos.
	#tecnologias Utilizadas.

## 🚀 Tecnologias

- Node.js
- Express
- TypeScript
- Prisma
- MySQL
- Dotenv

## 💻 Instalação e Uso

```bash
# Clone o repositório
--git clone https://github.com/seu-usuario/seu-projeto.git

# Acesse a pasta
--cd seu-projeto

# Instale as dependências
--npm install

# Configure o banco de dados no arquivo .env

# Rode as migrations
--npx prisma migrate dev

# Inicie o servidor
--npm run dev

### 5. **Configuração do Ambiente**

	Crie um arquivo `.env` com as seguintes variáveis:

DATABASE_URL="mysql://user:password@localhost:3306/seu_banco" PORT=3000

##  Exemplo para cadastro de usuario

{
  "email": "usuario@example.com",
  "password": "senhaSegura123",
  "companyId": 1
}

### Apos o cadastro ###

- No momento do cadastro do usuario sera disponibilizado o token de acesso que faz o afunilamento 
dos Produtos, Categorias e suas variações de acordo com a "companyId" Registrado na hora do cadastro
do usuario.

### Todos os produstos cadastrados ficam vinculado a company na qual foi registrado

### ( exemplo se eu estiver logado na compani 3 todos os produtos que eu cadastrar ficara vinculado a minha
compani independente do valor que eu colocar no campo na hora de cadastrar o produto ).

### O usuario so tem acesso ao Produto que estiver vinculado a compani que ele registrou no momento do login.



📁 Estrutura do Projeto

-- Controllers/
-- Routes/
-- Models/
-- Middlewares/
-- Prisma/
-- .env
-- App.ts


## ✅ Funcionalidades

- [x] Cadastro de produtos
- [x] Cadastro de variantes e SKUs
- [x] Cadastro de tabelas de preço
- [x] Integração com E-Catálogos
- [x] Autenticação com JWT
- [ ] Painel administrativo (futuro)


##  Exemplo para cadastro de usuario usando o JSON ##

{
  "email": "usuario@example.com",
  "password": "senhaSegura123",
  "companyId": 1
}

##  Exemplo para cadastro de Produto usando o JSON ##
{
  "name": "teste compani",
  "reference": "REF1",
  "type": "IMPORTADO",
  "gender": "MASCULINO",
  "prompt_delivery": true,
  "companyId": 3,
  "brand_id": 1,
  "category_id": 1,
  "subcategory_id": 1,
  "variants": [
    {
      "name": "azul",
      "hex_code": "#0000FF",
      "skus": [
        {
          "size": "M",
          "stock": 100,
          "price": 59.99,
          "code": "SKU0012",
          "min_quantity": 1,
          "multiple_quantity": 1,
          "erpId": "ERP2", 	<------------ INSERIR UM NOVO CADA VEZ QUE FOR CADASTRAR UM PRODUTO NOVO.( nao pode ser igual ao de baixo ).
          "cest": "1234567890",			
          "height": 30,
          "length": 20,
          "ncm": "12345678",
          "weight": 0.5,
          "width": 15,
          "price_tables_skus": [
            {
              "price": 59.99,
              "price_table_id": 1
            },
            {
              "price": 55.99,
              "price_table_id": 2
            }
          ]
        },
        {
          "size": "G",
          "stock": 200,
          "price": 69.99,
          "code": "SKU002",
          "min_quantity": 1,
          "multiple_quantity": 2,
          "erpId": "ERP1",     <------------ INSERIR UM NOVO CADA VEZ QUE FOR CADASTRAR UM PRODUTO NOVO.
          "cest": "1234567891",
          "height": 35,
          "length": 25,
          "ncm": "12345679",
          "weight": 0.6,
          "width": 17,
          "price_tables_skus": [
            {
              "price": 69.99,
              "price_table_id": 1
            },
            {
              "price": 65.99,
              "price_table_id": 2
            }
          ]
        }
      ]
    }
  ]
}





## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👤 Autor

Lucas Luiz Silva — [linkedin.com/in/lucas-luiz-](https://www.linkedin.com/in/lucas-luiz-/).







