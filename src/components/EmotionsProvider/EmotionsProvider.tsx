import { createContext } from 'react';
import { Instance, onSnapshot } from 'mobx-state-tree';
import LOCAL_STORAGE_KEY from '@/constants/localStorageKey';
import EmotionsBoard from '@/models/EmotionsBoard';

export const rootStore = EmotionsBoard.create({
  emotions: [],
});

onSnapshot(rootStore, (snapshot) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Snapshot: ', snapshot);
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(snapshot));
});

type EmotionsBoardType = Instance<typeof EmotionsBoard>;

export const EmotionsBoardContext = createContext<null | EmotionsBoardType>(null);

const EmotionsBoardProvider = EmotionsBoardContext.Provider;

export default EmotionsBoardProvider;
