import prisma from '@/lib/prisma';
import { Shop } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

async function createShopHandler(req: NextApiRequest, res: NextApiResponse) {
    const shop: Shop = req.body
    await prisma.shop
        .create({
            data: shop
        })
        .then(async () => {
            res.status(201).json(shop)
        })
        .catch(async (e) => {
            console.error(e)
            res.status(500).json({ error: 'server error' })
        })
        .finally(async () => {
            await prisma.$disconnect();
        })
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