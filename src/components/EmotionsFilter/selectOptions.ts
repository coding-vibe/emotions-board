import SelectOption from '@/types/SelectOption';

export enum EmotionFilter {
  TODAY = 'today',
  WEEK = 'week',
  MONTH = 'month',
}

export const selectOptions: SelectOption<EmotionFilter>[] = [
  { label: 'Today', value: EmotionFilter.TODAY },
  { label: 'This Week', value: EmotionFilter.WEEK },
  { label: 'This Month', value: EmotionFilter.MONTH },
];
