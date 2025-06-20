import { Instance, types } from 'mobx-state-tree';
import Emotion from '@/models/Emotion';
import { EmotionType } from '@/constants/emotionType';

type EmotionEntry = Instance<typeof Emotion>;

const EmotionsBoard = types
  .model('EmotionsBoard', { emotions: types.optional(types.array(Emotion), []) })
  .actions((self) => ({
    addEmotion({ type, comment }: Pick<EmotionEntry, 'type' | 'comment'>) {
      self.emotions.push({ type, comment });
    },
    removeEmotion(id: string) {
      self.emotions.replace(self.emotions.filter((emotion) => emotion.id !== id));
    },
    overwriteBoard(emotions: EmotionEntry[]) {
      self.emotions.replace(emotions);
    },
    clearBoard() {
      self.emotions.clear();
    },
  }))
  .views((self) => ({
    getEmotionsFilteredByDate(minDate: Date | null) {
      if (!minDate) {
        return self.emotions;
      }

      return self.emotions.filter(({ createdAt }) => createdAt >= minDate);
    },
    get statistics() {
      const groupedEmotionsByType = self.emotions.reduce<Partial<Record<EmotionType, number>>>(
        (acc, emotion) => ({
          ...acc,
          [emotion.type]: emotion.type in acc ? acc[emotion.type]! + 1 : 1,
        }),
        {},
      );

      return Object.entries(groupedEmotionsByType).map(([type, count]) => ({
        type: type as EmotionType,
        count: count,
      }));
    },
  }));

export default EmotionsBoard;
