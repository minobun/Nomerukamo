import prisma from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import { ShopCreateInputSchema } from '../../../prisma/generated/zod';

async function createShopHandler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, content, URL, type } = ShopCreateInputSchema.parse(req.body)

        await prisma.shop
            .create({
                data: {
                    name, content, URL, type
                }
            })
            .then(async (result) => {
                res.status(201).json(result)
            })
            .catch(async (e) => {
                console.error(e)
                res.status(500).json({ error: 'server error' })
            })
            .finally(async () => {
                await prisma.$disconnect();
            })
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: 'validation error' })
    }
}
async function findShopsHandler(req: NextApiRequest, res: NextApiResponse) {
    await prisma.shop
        .findMany()
        .then(async (shops) => {
            res.status(200).json(shops)
        })
        .catch(async (e) => {
            console.error(e)
            res.status(500).json({ error: 'server error' })
        })
        .finally(async () => {
            await prisma.$disconnect();
        })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case 'GET':
            return findShopsHandler(req, res)
        case 'POST':
            return createShopHandler(req, res)
        default:
            return res.status(405).json({ error: 'Required Method is not allowed.' })
    }
}