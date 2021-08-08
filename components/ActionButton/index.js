import styles from './index.module.scss';

export default function ActionButton({ children, ...props }) {
  return (
    <button type="button" className={styles.actionButton} {...props}>
      {children}
    </button>
  );
}
