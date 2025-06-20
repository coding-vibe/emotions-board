import * as Yup from 'yup';
import { EmotionType } from '@/constants/emotionType';

const validationSchema = Yup.object().shape({
  type: Yup.string().oneOf(Object.values(EmotionType)).required(),
  comment: Yup.string().required(),
});

export type AddEmotionSchemaType = Yup.InferType<typeof validationSchema>;

export default validationSchema;
