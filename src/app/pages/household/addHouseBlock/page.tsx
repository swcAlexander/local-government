// 'use client'
import styles from './styles.module.scss'


const addHouseBlock = () => {
    return (
        <main>
            <form action="" className={styles.addForm}>
                <input type="text" placeholder="№ об'єкта"/>
                <input type="text" placeholder='Рік побудови'/>
                <input type="text" placeholder='Загальна площа'/>
                <input type="text" placeholder='Житлова площа'/>
                <input type="text" placeholder='Кількість кімнат'/>
                <input type="text" placeholder='Стан (пустка, '/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <input type="text" placeholder=''/>
                <button type="submit">Додати</button>

            </form>
        </main>
    )
}
export default addHouseBlock;