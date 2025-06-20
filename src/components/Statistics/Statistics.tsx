import { observer } from "mobx-react";
import Container from "react-bootstrap/Container";
import clsx from "clsx";
import useStore from "@/hooks/useStore";
import { EmotionType, emotionTypeOptions } from "@/constants/emotionType";
import emotionStyles from "@/constants/emotionImages";
import styles from "./styles.module.scss";

function Statistics() {
  const { statistics } = useStore();

  const getLabel = (type: EmotionType) => {
    const option = emotionTypeOptions.find((option) => option.value === type);

    return option?.label;
  };

  return (
    <Container>
      <h1 className="fw-bold text-center text-primary text-uppercase mb-5">
        Statistics
      </h1>
      {statistics.length ? (
        <div className={clsx("mx-auto my-0", styles.statisticsWrapper)}>
          {statistics.map(({ type, count }) => (
            <div
              key={type}
              className={clsx("mb-3 p-2", styles.statisticsCard)}
              style={{ borderColor: emotionStyles[type].color }}
            >
              <strong>{getLabel(type)}</strong>: {count}
            </div>
          ))}
        </div>
      ) : (
        <p className="fw-bold text-primary">No statistics available</p>
      )}
    </Container>
  );
}
export default observer(Statistics);
