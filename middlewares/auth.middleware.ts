import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    res.status(401).json({ error: 'acesso negado, Token nao correspondente' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload & {
      id: number;
      email: string;
      companyId: number;
    };

    console.log('Token Decodificado:', decoded);

    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'token NEGADO' });
  }
};
