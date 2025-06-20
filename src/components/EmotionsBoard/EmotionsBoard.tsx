import { useEffect, useState } from "react";
import clsx from "clsx";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { toJS } from "mobx";
import { Instance } from "mobx-state-tree";
import { observer } from "mobx-react";
import { ReactSortable } from "react-sortablejs";
import Button from "react-bootstrap/Button";
import { startOfDay, sub } from "date-fns";

import LOCAL_STORAGE_KEY from "@/constants/localStorageKey";
import useStore from "@/hooks/useStore";
import Emotion from "@/models/Emotion";
import EmotionCard from "@/components/EmotionCard";
import FadeIn from "@/components/FadeIn";
import AddEmotion from "@/components/AddEmotion";
import EmotionsFilter from "@/components/EmotionsFilter";
import { EmotionFilter } from "@/components/EmotionsFilter/selectOptions";
import styles from "./styles.module.scss";

function EmotionsBoard() {
  const {
    overwriteBoard,
    getEmotionsFilteredByDate,
    removeEmotion,
    clearBoard,
  } = useStore();
  const [showAddModal, setAddModal] = useState<boolean>(false);
  const [filterValue, onChangeFilter] = useState<null | EmotionFilter>(null);

  useEffect(() => {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (data) {
      const initialState = JSON.parse(data);

      if (initialState) {
        overwriteBoard(initialState.emotions);
      }
    }
  }, [overwriteBoard]);

  const getMinDate = (): Date | null => {
    switch (filterValue) {
      case EmotionFilter.TODAY:
        return startOfDay(new Date());
      case EmotionFilter.WEEK:
        return sub(new Date(), { weeks: 1 });
      case EmotionFilter.MONTH:
        return sub(new Date(), { months: 1 });
      default:
        return null;
    }
  };

  const emotionsList: Instance<typeof Emotion>[] = toJS(
    getEmotionsFilteredByDate(getMinDate())
  );

  return (
    <>
      <div className="p-4">
        <h1 className="fw-bold text-center text-primary text-uppercase mb-5">
          Emotions board
        </h1>
        <div className={clsx("mb-3", styles.boardButtons)}>
          <Button onClick={() => setAddModal(true)}>How do you feel?</Button>
          <Button variant="danger" onClick={clearBoard}>
            Clear Board
          </Button>
        </div>

        <Container className="mb-3">
          <EmotionsFilter onChange={onChangeFilter} value={filterValue} />
        </Container>

        <Container className={styles.emotionsListDesktop}>
          <Row className="g-4">
            {emotionsList.map((emotion) => (
              <Col key={emotion.id} sm={6} md={4}>
                <FadeIn>
                  <EmotionCard
                    emotion={emotion}
                    onRemove={() => removeEmotion(emotion.id)}
                  />
                </FadeIn>
              </Col>
            ))}
          </Row>
        </Container>

        <Container className={styles.emotionsListMobile}>
          <ReactSortable list={emotionsList} setList={overwriteBoard}>
            {emotionsList.map((emotion) => (
              <EmotionCard
                className="mb-3"
                key={emotion.id}
                emotion={emotion}
                onRemove={() => removeEmotion(emotion.id)}
                isMobile
              />
            ))}
          </ReactSortable>
        </Container>
      </div>

      <Modal
        className="border border-light"
        show={showAddModal}
        onHide={() => setAddModal(false)}
        centered
        contentClassName="border border-secondary"
      >
        <Modal.Header closeButton className={styles.addEmotionModalHeader}>
          <Modal.Title className="w-100 fw-bold text-center text-primary">
            How are you feeling today?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.addEmotionModalBody}>
          <AddEmotion onSubmit={() => setAddModal(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default observer(EmotionsBoard);
