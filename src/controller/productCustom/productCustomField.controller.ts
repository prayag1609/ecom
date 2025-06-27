import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "../../generated/prisma";
import { sendErrorResponse, sendSucessResponse } from "../../utils/helper/httpRes/httpres"; 

const prisma = new PrismaClient();

export const createProductCustomField = async (
    req: Request, 
    res: Response, 
    next: NextFunction):Promise<void> => {
    const user = req.user as { userId: string; role: string };

    // ✅ Check if user is logged in and a seller
    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized. Only sellers can create custom fields.");
        return;
    }
    const product_id = req.params.id;
    if(!product_id){
        sendErrorResponse(res, 400, "Product id is required");
        return
    }

    const product = await prisma.product.findFirst({where:{id:product_id}})
    if(!product){
        sendErrorResponse(res, 404, "Product not found");
        return
    }

    const {field_name, field_type, isRequired, options } = req.body;

    if (!field_name || !field_type) {
        return sendErrorResponse(res, 400, "Missing required fields");
    }

    let findField = await prisma.productCustomField.findFirst({where:{field_name:field_name}});
    if(field_name){
        sendSucessResponse(res,400,"Field name already exists");
        return
    }

    try {
        const field = await prisma.productCustomField.create({
            data: {
                seller_id: user.userId, 
                product_id,
                field_name,
                field_type,
                isRequired: isRequired ?? false,
                options: options ?? [],
            },
        });

        sendSucessResponse(res, 201, "Custom field created", field);
    } catch (error: any) {
        console.error(error);
        sendErrorResponse(res, 500, "Internal server error");
    }
};

export const getProductCustomFields = async (req: Request, res: Response) => {
    const user = req.user as { userId: string; role: string };

    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized. Seller access only.");
        return;
    }

    try {
        const fields = await prisma.productCustomField.findMany({
            where: { seller_id: user.userId },
        });

        sendSucessResponse(res, 200, "Fetched custom fields", fields);
    } catch (error: any) {
        console.error(error);
        sendErrorResponse(res, 500, "Internal server error");
    }
};

export const updateProductCustomField = async (req: Request, res: Response) => {
    const user = req.user as { userId: string; role: string };
    const { id } = req.params;

    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized. Seller access only.");
        return;
    }

    try {
        const existing = await prisma.productCustomField.findFirst({
            where: { id, seller_id: user.userId },
        });

        if (!existing) {
            sendErrorResponse(res, 404, "Custom field not found");
            return;
        }

        const updated = await prisma.productCustomField.update({
            where: { id },
            data: {
                field_name: req.body.field_name ?? existing.field_name,
                field_type: req.body.field_type ?? existing.field_type,
                isRequired: req.body.isRequired ?? existing.isRequired,
                options: req.body.options ?? existing.options,
                updateAt: new Date(),
            },
        });

        sendSucessResponse(res, 200, "Custom field updated", updated);
    } catch (error: any) {
        console.error(error);
        sendErrorResponse(res, 500, "Update failed");
    }
};

export const deleteProductCustomField = async (req: Request, res: Response) => {
    const user = req.user as { userId: string; role: string };
    const { id } = req.params;

    if (!user || user.role !== "seller") {
        sendErrorResponse(res, 401, "Unauthorized. Seller access only.");
        return;
    }

    try {
        const existing = await prisma.productCustomField.findFirst({
            where: { id, seller_id: user.userId },
        });

        if (!existing) {
            sendErrorResponse(res, 404, "Custom field not found");
            return;
        }

        await prisma.productCustomField.delete({ where: { id } });
        sendSucessResponse(res, 200, "Custom field deleted");
    } catch (error: any) {
        console.error(error);
        sendErrorResponse(res, 500, "Delete failed");
    }
};


