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
                <input type="text" placeholder='Стан (пустка, заселений)'/>
                <input type="text" placeholder='Право власності' />
                Адреса
                <input type="text" placeholder='Населений пункт'/>
                <input type="text" placeholder='Вулиця'/>
                <input type="text" placeholder='Будинок' />
                Члени домогосподарства
                <input type="text" placeholder="Ім'я"/>
                <input type="text" placeholder='Прізвище'/>
                <input type="text" placeholder='По батькові'/>
                <input type="text" placeholder='Дата народження дд-мм-рррр' pattern="\d{2}-\d{2}-\d{4}"  />
                <input type="text" placeholder='Дата приписки'pattern="\d{2}-\d{2}-\d{4}" />
                <input type="text" placeholder='Дата виписки' pattern="\d{2}-\d{2}-\d{4}" />
                Земля
                <input type="text" placeholder='ОЖБ'/>
                <input type="text" placeholder='ОСГ'/>
                <input type="text" placeholder='Пай рілля'/>
                <input type="text" placeholder='Пай сінокіс'/>
                <input type="text" placeholder='Оренда рілля'/>
                <input type="text" placeholder='Оредна сінокіс'/>
                <input type="text" placeholder='Користування рілля'/>
                <input type="text" placeholder='Користування сінокіс'/>
                <button type="submit">Додати</button>

            </form>
        </main>
    )
}
export default addHouseBlock;