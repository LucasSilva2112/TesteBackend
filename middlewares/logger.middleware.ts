import { Request, Response, NextFunction } from 'express';

export const LoggerMiddleware = (req:Request, res: Response, next: NextFunction) => {
    console.log('[${New Date().toISOString()}] ${req.method} ${req.originalUrl}');
    next();
};