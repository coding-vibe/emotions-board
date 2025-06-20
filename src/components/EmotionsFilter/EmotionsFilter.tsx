import Form from 'react-bootstrap/Form';

import { selectOptions, EmotionFilter } from '@/components/EmotionsFilter/selectOptions';

interface Props {
  className?: string;
  onChange: (value: EmotionFilter | null) => void;
  value: EmotionFilter | null;
}

export default function EmotionsFilter({ className, onChange, value }: Props) {
  return (
    <Form.Select
      aria-label="Date filter"
      name="date-filter"
      className={className}
      value={value ?? ''}
      onChange={(event) => onChange(event.target.value as EmotionFilter)}
    >
      {selectOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Form.Select>
  );
}
