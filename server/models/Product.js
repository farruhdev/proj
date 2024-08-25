import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            required: true,
            default: [],
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        reviews: {
            type: Array,  // 리뷰를 문자열 대신 배열로 처리
            required: true,
            default: [],
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
        },
        numberOfReviews: {  // 필드 이름 수정: 'numberofReviews' -> 'numberOfReviews'
            type: Number,
            required: true,
            default: 0,  // 기본값을 0으로 설정
        },
        price: {
            type: Number,
            required: true,
        },
        stock: {
            type: Number,
            required: true,
            default: 0,  // 기본값을 0으로 설정
        },
        productIsNew: {
            type: Boolean,
            required: true,
            default: false,  // 기본값을 false로 설정
        },
        stripeId: {
            type: String,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
