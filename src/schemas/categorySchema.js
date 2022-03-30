import * as yup from 'yup';

const categorySchema = yup.object().shape({
    id: yup.number().moreThan(-1).required(),
    name: yup.string().required(),
    imageUrl: yup.string(),
})

export default categorySchema;