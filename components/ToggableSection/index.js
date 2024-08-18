/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import cn from "classnames";
import styles from "./index.module.scss";

export default function ToggableSection({ head, body }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.section}>
      <div
        className={styles.collapseToggle}
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        {head}
      </div>

      <ul
        className={cn(styles.collapsible, {
          [styles.collapsed]: collapsed,
        })}
      >
        {body}
      </ul>
    </div>
  );
}
