import css from './notification.module.css'
export const Notification = ({ message }) => {
    return <p className={css.paragraph}>{message}</p>;
}