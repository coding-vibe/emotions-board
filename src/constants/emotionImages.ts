import { EmotionType } from './emotionType';

const emotionStyles = {
  [EmotionType.HAPPY]: {
    color: '#A8E6CF',
    image: './happy.png',
  },
  [EmotionType.SAD]: {
    color: '#D3D3D3',
    image: './sad.png',
  },
  [EmotionType.ANGRY]: {
    color: '#FFB3B3',
    image: './angry.png',
  },
  [EmotionType.EXCITED]: {
    color: '#FFD59E',
    image: './excited.png',
  },
  [EmotionType.CALM]: {
    color: '#D7C5F2',
    image: './calm.png',
  },
} as const;

export type EmotionImageType = (typeof emotionStyles)[keyof typeof emotionStyles];

export default emotionStyles;
