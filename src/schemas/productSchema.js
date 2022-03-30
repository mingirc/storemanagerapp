import * as yup from 'yup';

const productSchema = yup.object().shape({
    id: yup.number().moreThan(-1).required(),
    categoryId: yup.number().moreThan(-1).required(),
    sku: yup.string().required().min(7).max(7),
    name: yup.string().required(),
    price: yup.number().moreThan(-1).required(),
    imageUrl: yup.string(),
    stock: yup.number().integer().moreThan(-1).required()
})

export default productSchema;