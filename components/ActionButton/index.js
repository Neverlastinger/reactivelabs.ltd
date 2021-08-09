import cn from 'classnames';
import styles from './index.module.scss';

export default function ActionButton({ children, isLarge, isWhite, ...props }) {
  return (
    <button
      type="button"
      className={cn(styles.actionButton, { [styles.large]: isLarge, [styles.white]: isWhite })}
      {...props}
    >
      {children}
    </button>
  );
}
