/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import useResize from "hooks/useResize";
import cn from "classnames";
import styles from "./index.module.scss";

export default function ToggableSection({ head, body }) {
  const collapsibleRef = useRef();
  const [collapsed, setCollapsed] = useState(false);
  const [height, setHeight] = useState();

  useLayoutEffect(() => {
    setHeight(collapsibleRef.current.offsetHeight);
  }, []);

  useResize(() => {
    collapsibleRef.current.style.maxHeight = "";
    setCollapsed(false);
    setHeight(collapsibleRef.current.offsetHeight);
  });

  useEffect(() => {
    if (!collapsed) {
      collapsibleRef.current.style.maxHeight = `${height}px`;
    } else {
      collapsibleRef.current.style.maxHeight = "0px";
    }
  }, [collapsed, height]);

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
        ref={collapsibleRef}
      >
        {body}
      </ul>
    </div>
  );
}
