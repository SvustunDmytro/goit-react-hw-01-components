import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ stats, title }) => {
  return (
    <div className={styles.StatsWrapper}>
      <section className={styles.stats_section}>
        <h2 className={styles.title}>{title}</h2>

        <ul className={styles.stat_list}>
          {stats.map(el => (
            <li className={styles.item} key={el.id}>
              <span className={styles.label}>{el.label}</span>
              <span className={styles.percentage}>{el.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  title: PropTypes.string,
};

Stats.defaultProps = {
  title: '',
};

export default Stats;
