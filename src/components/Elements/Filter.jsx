import styles from "../Style.module.css"

export const Filter = ({ onChange, value }) => {
    return (
        <label className={styles.Filter}>
            Find contacts by name
            <input onChange={evt => onChange(evt)} type="text" name="filter" value={value} />
        </label>
    )
}