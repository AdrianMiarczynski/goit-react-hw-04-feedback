import css from './statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercontage,
}) => {
  return (
    <div className={css.statistics}>
      <h2 className={css['statistics__header']}>Statistics</h2>
      <div className={css['statistics__wrapper']}>
        <ul className={css['statistics__list']}>
          <li className={css['statistics__list-item']}>Good: {good}</li>
          <li className={css['statistics__list-item']}>Neutral: {neutral}</li>
          <li className={css['statistics__list-item']}>Bad: {bad}</li>
          <li className={css['statistics__list-item']}>Total: {total}</li>
          <li className={css['statistics__list-item']}>
            Positive feedback: {positivePercontage}%
          </li>
        </ul>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercontage: PropTypes.number.isRequired,
};
