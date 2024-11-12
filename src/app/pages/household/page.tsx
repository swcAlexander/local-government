import styles from './page.module.scss'
const Household = () => {
    return (
        <main className={styles.mainpage}>
            <h2 className="hidden">Погосподарська книга</h2>
            <a href="./household/addHouseBlock" className={styles.blockButton}> Додати господарство</a>
            
        </main>
    )

}
export default Household;