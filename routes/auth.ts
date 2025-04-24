import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import prisma from '../util/prismaClient'; // Certifique-se de que o caminho está correto

dotenv.config(); // Carrega variáveis de ambiente

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'default-secret';


// Rota para cadastro de usuário
router.post('/register', async (req: Request, res: Response): Promise<void> => {
  const { email, password, companyId } = req.body;

  if (!email || !password || !companyId) {
    res.status(400).json({ error: 'Email, senha e companyId são obrigatórios' });
    return;
  }
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    res.status(400).json({ error: 'Email já cadastrado' });
    return;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      companyId,
    },
  });

  // Retornar a resposta com o novo usuário criado
  res.status(201).json({
    message: 'Usuário criado com sucesso',
    user: {
      id: newUser.id,
      email: newUser.email,
      companyId: newUser.companyId,
    },
  });
});
// Rota de login
router.post('/login', async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  // Verifica se o email e a senha foram fornecidos
  if (!email || !password) {
    res.status(400).json({ error: 'Email e senha são obrigatórios' });
    return;  // Retorno explícito de void
  }

  // Busca o usuário no banco de dados (supondo que você tenha um banco de dados)
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    res.status(401).json({ error: 'Usuário ou senha inválidos' });
    return;  // Retorno explícito de void
  }

  // Verifica se a senha fornecida é válida
  const senhaValida = await bcrypt.compare(password, user.password);
  if (!senhaValida) {
    res.status(401).json({ error: 'Usuário ou senha inválidos' });
    return;  // Retorno explícito de void
  }

  // Geração do token JWT
  const token = jwt.sign(
    { userId: user.id, companyId: user.companyId },
    JWT_SECRET,
  );

  // Retorna o token
  res.json({ token });
});

export default router;
