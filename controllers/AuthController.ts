import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../util/prismaClient'; // ou o caminho correto para o seu cliente Prisma

export default class AuthController {

  static async login      (req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      // Log para ajudar no debug
      console.log('body recebido:', req.body);

      if (!email || !password) {
        return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
      }

      // Busca o usuário no banco de dados pelo username
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: 'Usuário ou senha inválidos' });
      }

      // Verifica se a senha fornecida é válida
      const senhaValida = await bcrypt.compare(password, user.password);
      if (!senhaValida) {
        return res.status(401).json({ error: 'Usuário ou senha inválidos' });
      }

      // Geração do token JWT
      const token = jwt.sign(
        { userId: user.id, companyId: user.companyId },
        process.env.JWT_SECRET || 'default-secret',
        { expiresIn: '1h' }
      );

      return res.json({ token });
    } catch (error) {
      console.error('Erro no login:', error);
      return res.status(500).json({ error: 'Erro interno ao fazer login' });
    }
  }
  static async register   (req: Request, res: Response): Promise<Response> {
    try {
      const {email, password, companyId } = req.body;

      if (!email || !password || !companyId) {
        return res.status(400).json({ error: 'Usuário, email, senha e companyId são obrigatórios' });
      }

      // Verifica se o usuário já existe
      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'Usuário já existe' });
      }

      // Criptografar a senha
      const hashedPassword = await bcrypt.hash(password, 10);

      // Criação do novo usuário
      const newUser = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
          companyId,
        },
      });

      return res.status(201).json({ message: 'Usuário cadastrado com sucesso', user: newUser });
    } catch (error) {
      return res.status(500).json({ error: 'Erro interno ao cadastrar o usuário' });
    }
  }

}
