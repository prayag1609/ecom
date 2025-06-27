import { PrismaClient } from "../../generated/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { sendErrorResponse, sendSucessResponse } from "../../utils/helper/httpRes/httpres";
import { generateToken } from "../../middleware/jwt/jwt";
import { setAuthCookie } from "../../middleware/cookie/cookie";

const prisma = new PrismaClient();

export const userRegi = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const { email, password, name, role } = req.body

        const userRole: string[] = ["seller", "buyer"]

        if (!email || !password || !name || !role || !userRole.includes(role)) {
            res.status(400).json({ message: "Missing required fields or invalid role(seller,buyer)" })
            return
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            res.status(409).json({ message: "Email already registered" })
            return
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                role,
            },
        })

        res.status(201).json({ message: "User registered successfully", userId: user.id })
    } catch (error) {
        console.error(error)
        next(error)
    }
}
export const userLogin = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ message: "Missing required fields" })
    }
    try {
        const userData = await prisma.user.findFirst({ where: { email: email } });
        if (!userData) {
            sendErrorResponse(res, 404, "email is not found");
            return
        }
        const isValidPassword = await bcrypt.compare(password, userData.password!);
        if (!isValidPassword) {
            sendErrorResponse(res, 401, "Invalid password");
            return
        }

        // const token = jwt.sign(
        //     {
        //         userId: userData.id,
        //         role: userData.role,
        //     },
        //     "SDJFILUWNE8I3RNX34R46587678R68X3B8458",
        //     { expiresIn: "1h" }
        // );
        const token = generateToken(userData.id, userData.role);

        if (!token) {
            sendErrorResponse(res, 500, "Failed to generate token");
        }

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 3600000,
            sameSite: "lax",
            secure: false,
        });
        // setAuthCookie(res,token);


        sendSucessResponse(res, 200, `User logged in sucess-fully as a ${userData.role}...`, token)

    }
    catch (error) {
        console.error(error)
        sendErrorResponse(res, 500, "Server error")
    }

}
export const profile = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    console.log(user);

    if (!user) {
        return next(sendErrorResponse(res, 401, "Unauthorized"));
    }

    const userData = await prisma.user.findFirst({ where: { id: user.userId } });
    if (!userData) {
        sendErrorResponse(res, 404, "User not found");
        return; // ✅ Prevent further execution
    }

    sendSucessResponse(res, 200, "Profile", userData);
    return;
};
