import express from 'express';
import Product from  '../models/Product.js';

const productRoutes = express.Router();

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({}); // 모든 제품을 찾고 products 변수에 저장합니다.

        res.json({
            products, // 올바르게 정의된 products 변수를 사용합니다.
            pagination: {}, // 필요시 페이지네이션 관련 로직 추가 가능
        });
    } catch (error) {
        res.status(500).json({ message: error.message }); // 에러 처리 추가
    }
};

productRoutes.route('/').get(getProducts);

export default productRoutes;
