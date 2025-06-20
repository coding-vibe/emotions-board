import { v4 as uuidv4 } from 'uuid';
import { types } from 'mobx-state-tree';
import { EmotionType } from '@/constants/emotionType';

const Emotion = types.model('Emotion', {
  id: types.optional(types.identifier, () => uuidv4()),
  createdAt: types.optional(types.Date, () => new Date()),
  type: types.enumeration<EmotionType>('EmotionType', Object.values(EmotionType)),
  comment: types.string,
});

export default Emotion;
