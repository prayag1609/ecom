import { Response } from "express";

export const sendSucessResponse = async (
    res: Response,
    status: number,
    message: string,
    data?: any
): Promise<void> => {

    res.status(status).json({
        status,
        sucess: true,
        message,
        data,
    });
}

export const sendErrorResponse = async (
    res: Response,
    status: number,
    message: string,
    data?: any
): Promise<void> => {

    res.status(status).json({
        status,
        sucess: false,
        message,
        data,
    });
}