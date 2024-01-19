import { NextFunction, Request, Response, RequestHandler } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { config } from '../../config/config';

interface AuthenticatedRequest extends Request {
    user: JwtPayload;
}

export const verifyJWT= (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.sendStatus(401);
    try {
        const token = authHeader.split(' ')[1];
        jwt.verify(
            token,
            config.secretToken,
            (err, decoded) => {
                if (err) {
                    console.error('JWT Verification Error:', err.message);
                    return res.sendStatus(403); // invalid token
                }
                (req as AuthenticatedRequest).user = (decoded as jwt.JwtPayload).id;
                next();
            }
        );
    } catch (err) {
        console.error(err);
        return res.status(403).json({ message: 'User is unauthorized' });
    }
};