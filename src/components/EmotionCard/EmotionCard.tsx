import { Instance } from "mobx-state-tree";
import { useSwipeable } from "react-swipeable";
import { format } from "date-fns/format";
import clsx from "clsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Emotion from "@/models/Emotion";
import emotionStyles from "@/constants/emotionImages";
import DragHandleIcon from "@/icons/dragHandle";
import styles from "./styles.module.scss";

interface Props {
  className?: string;
  emotion: Instance<typeof Emotion>;
  onRemove: () => void;
  isMobile?: boolean;
}

const DATE_FORMAT = "MM/dd/yyyy";

export default function EmotionCard({
  className,
  emotion,
  onRemove,
  isMobile = false,
}: Props) {
  const { type, comment, createdAt } = emotion;
  const { image, color } = emotionStyles[type];

  const handlers = useSwipeable({ onSwipedLeft: onRemove });

  return (
    <Card
      className={clsx("border-3", className, styles.emotionCard)}
      style={{ borderColor: color }}
      {...(isMobile ? handlers : {})}
    >
      <Card.Body>
        {isMobile && <DragHandleIcon className={styles.emotionCardIcon} />}
        <Card.Title className="fw-bold text-center text-uppercase fs-5">
          I feel
        </Card.Title>
        <Card.Img variant="top" src={image} />
        <Card.Text
          className="fw-bold text-center text-uppercase fs-5"
          style={{ color }}
        >
          {type}
        </Card.Text>
        <Card.Text className="text-center text-info">{comment}</Card.Text>
        <Card.Text className="text-center text-secondary">
          Created on {format(createdAt, DATE_FORMAT)}
        </Card.Text>
        {!isMobile && (
          <div className="d-flex justify-content-end">
            <Button variant="danger" onClick={onRemove}>
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
