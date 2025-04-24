import { Request, Response, NextFunction } from 'express';
import { ZodSchema, ZodError } from 'zod' ;

export const validade = (schema: ZodSchema<any>) => (req: Request, res: Response, next: NextFunction ) => {
    try {
        schema.parse(req.body);
        next();
    } catch (e) {
        if (e instanceof ZodError)
        return res.status(400).json({error: 'erro de validação', details: e.errors });
    }
    
}
