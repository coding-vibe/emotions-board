import { Formik } from 'formik';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import useStore from '@/hooks/useStore';
import { EmotionType, emotionTypeOptions } from '@/constants/emotionType';
import validationSchema, { AddEmotionSchemaType } from './validationSchema';

const initialValues = {
  type: EmotionType.HAPPY,
  comment: '',
};

interface Props {
  onSubmit: () => void;
}

export default function AddEmotion({ onSubmit }: Props) {
  const { addEmotion } = useStore();

  const handleAddEmotion = (values: AddEmotionSchemaType) => {
    addEmotion(values);
    onSubmit();
  };

  return (
    <Formik<AddEmotionSchemaType>
      initialValues={initialValues}
      onSubmit={handleAddEmotion}
      validationSchema={validationSchema}
    >
      {({ errors, handleChange, values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Your mood</Form.Label>
            <Form.Select
              aria-label="Emotion type"
              name="type"
              value={values.type}
              onChange={handleChange}
              isInvalid={!!errors.type}
            >
              {emotionTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Form.Select>
            {!!errors.comment && (
              <Form.Control.Feedback type="invalid">{errors.comment}</Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Add your comment</Form.Label>
            <Form.Control
              name="comment"
              as="textarea"
              rows={3}
              onChange={handleChange}
              value={values.comment}
              isInvalid={!!errors.comment}
            />
            {!!errors.comment && (
              <Form.Control.Feedback type="invalid">{errors.comment}</Form.Control.Feedback>
            )}
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button variant="primary" type="submit" className="w-100">
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
