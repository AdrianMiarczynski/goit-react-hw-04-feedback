import css from './section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, Children }) => {
  return (
    <section className={css.section}>
      <h1 className={css['section-header']}>{title}</h1>
      {Children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  Children: PropTypes.object,
};
