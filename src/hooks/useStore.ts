import { useContext } from 'react';
import { EmotionsBoardContext } from '@/components/EmotionsProvider/EmotionsProvider';

function useStore() {
  const store = useContext(EmotionsBoardContext);

  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }

  return store;
}

export default useStore;
