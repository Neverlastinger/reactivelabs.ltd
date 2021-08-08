import cn from 'classnames';
import styles from './index.module.scss';

export default function ActionButton({ children, isLarge, ...props }) {
  return (
    <button type="button" className={cn(styles.actionButton, { [styles.large]: isLarge })} {...props}>
      {children}
    </button>
  );
}
