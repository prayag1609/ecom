import { Request, Response, NextFunction } from "express";
import { sendErrorResponse } from "../../utils/helper/httpRes/httpres";
import jwt from "jsonwebtoken";
import { send } from "node:process";


interface JwtPayload {
  userId: string;
  role: string;
}

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const token = req.cookies.token;
    // console.log(token);
    if (!token) return sendErrorResponse(res, 400, "Unauthorized");

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            // console.error("JWT_SECRET is not set in environment variables");
            return sendErrorResponse(res, 500, "Server configuration error");
        }

        const decode = jwt.verify(token, secret) as JwtPayload;
        req.user = { userId: decode.userId, role: decode.role };
        next();
    } catch (error) {
        return sendErrorResponse(res, 400, "Unauthorized or invalid token");
    }
};


export const generateToken = (userId: string, role: string): string => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }

  return jwt.sign({ userId, role }, secret, { expiresIn: "1h" });
};




