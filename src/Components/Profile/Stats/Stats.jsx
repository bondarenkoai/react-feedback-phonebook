import css from './Stats.module.css';

export const Stats = ({ stats }) => {
    return (
        <div className={css.stats}>
            <ul className={css.statsList}>
                {Object.entries(stats).map(([key, value]) => (
                    <li className={css.statsItem} key={key}>
                        <span className={css.label}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </span>
                        <span className={css.quantity}>{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
