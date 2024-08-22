/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState } from "react";
import cn from "classnames";
import styles from "./index.module.scss";

export default function ToggableSection({ head, body }) {
  const collapsibleRef = useRef();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={cn(styles.section, {
        [styles.collapsed]: collapsed,
      })}
    >
      <div
        className={styles.collapseToggle}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        {head}
      </div>

      <ul className={styles.collapsible} ref={collapsibleRef}>
        {body}
      </ul>
    </div>
  );
}
