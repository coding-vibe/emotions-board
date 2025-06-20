import SelectOption from '@/types/SelectOption';

export enum EmotionType {
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
  EXCITED = 'EXCITED',
  CALM = 'CALM',
}

export const emotionTypeOptions: SelectOption<EmotionType>[] = [
  { label: '😊 Happy', value: EmotionType.HAPPY },
  { label: '😢 Sad', value: EmotionType.SAD },
  { label: '😠 Angry', value: EmotionType.ANGRY },
  { label: '🤩 Excited', value: EmotionType.EXCITED },
  { label: '😌 Calm', value: EmotionType.CALM },
];
