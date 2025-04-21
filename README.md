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
- [ ] Autenticação com JWT
- [ ] Painel administrativo (futuro)


## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👤 Autor

Lucas Luiz Silva — [@lucasSilva2112](https://github.com/LucasSilva2112).

