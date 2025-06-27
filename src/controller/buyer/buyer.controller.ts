import { PrismaClient } from "../../generated/prisma";
import { Request, Response, NextFunction } from "express";
import { sendErrorResponse, sendSucessResponse } from "../../utils/helper/httpRes/httpres";


const prisma = new PrismaClient();

export const listProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    console.log("________seller______")
    console.log(user);
    if (!user || user.role !== "buyer") {
        return next(sendErrorResponse(res, 401, "Unauthorized to fatch product"));
    }

    const products = await prisma.product.findMany({});
    if (!products) {
        return next(sendErrorResponse(res, 404, "No products found"));
    }

    let page = Math.max(parseInt(req.query.page as string, 10) || 1, 1);
    let limit = Math.min(Math.max(parseInt(req.query.limit as string, 10) || 10, 1), 100);
    let skip = (page - 1) * limit;

    let search = (req.query.search as string)?.trim().toLocaleLowerCase();

    let searchFilter = search ? {
        OR: [
            {
                name: {
                    contains: search
                }
            }
        ]
    } : {};

    let [total, product] = await Promise.all([
        prisma.product.count({ where: searchFilter }),
        prisma.product.findMany({ where: searchFilter, skip, take: limit })
    ])

    sendSucessResponse(res, 200, "Products fached sucess-fully...", {
        products: product,
        total: total,
        page: page,
        limit,
        skip
    })


}

export const addProduct = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    console.log(user);
    if (!user || user.role !== "buyer"
    ) {
        return next(sendErrorResponse(res, 401, "Unauthorized to fatch product"));
    }

    const { id, quantity } = req.params;
    const qty: number = quantity ? Number(quantity) : 1;

    try {
        const product = await prisma.product.findUnique({ where: { id: id } });
        if (!product) {
            return next(sendErrorResponse(res, 404, "Product not found"));
        }
        const findKart = await prisma.kart.findFirst({ where: { userId: user.userId } });
        if (!findKart) {
            const addProduct = await prisma.kart.create({
                data: {
                    quantity: qty,
                    user: {
                        connect: { id: user.userId }
                    },
                    product: {
                        connect: { id: id }
                    }
                }
            });
        }
        else {
            const updateKart = await prisma.kart.update({
                where: { id: findKart.id },
                data: {
                    quantity: findKart.quantity + qty
                }
            });
        }

        // const addProduct = await prisma.kart.create({
        //     data: {
        //         quantity: qty,
        //         user: {
        //             connect: { id: user.userId }
        //         },
        //         product: {
        //             connect: { id: id }
        //         }
        //     }
        // });

        if (!addProduct) {
            return next(sendErrorResponse(res, 404, "Product not found"));
        }
        sendSucessResponse(res, 200, "Product added sucess-fully...", addProduct);

    } catch (error) {
        console.log(error);
        return next(sendErrorResponse(res, 500, "Error adding product to cart"));
    }

}

export const viewKart = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
  const user = req.user as Express.User;    console.log(user);
    if (!user || user.role !== "buyer") {
        return next(sendErrorResponse(res, 401, "Unauthorized to fatch product"));
    }

    const kartData = await prisma.kart.findMany({
        where: {
            userId: user.userId
        },
        include: {
            product: true
        }
    });
    const kartIn = kartData.map((kart) => ({
        prodtctName: kart.product.name,
        image: kart.product.image,
        description: kart.product.description,
        price: kart.product.price,
        quantity: kart.quantity,
        subTotal: kart.product.price * kart.quantity,
    }))

    const total = kartData.reduce((acc, kartItem) => {
        return acc + (kartItem.product.price * kartItem.quantity);
    }, 0);

    sendSucessResponse(res, 200, 'Kart facthed sucess-fully...', { KartInfo: kartIn, KartTotal: total })
}