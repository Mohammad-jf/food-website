
import { useRouter } from 'next/router'
import styles from './categoriesPage.module.css'
import { useState } from 'react'
import Card from '../modules/Card';


const CategoriesPage = ({ data }) => {
    const router = useRouter();
    const [query, setQuery] = useState({ difficulty: '', time: '' });

    const selectHandler = (e) => {
        setQuery({
            ...query,
            [e.target.name]: e.target.value
        });
    }


    const searchHandler = () => {
        router.push({ pathname: '/categories', query });
    }

    return (
        <div className={styles.container}>
            <h2>Categories</h2>

            <div className={styles.subContainer}>

                <div className={styles.select}>
                    <select value={query.difficulty} name='difficulty' onChange={selectHandler}>
                        <option value='' >Difficulty</option>
                        <option value='Easy'>Easy</option>
                        <option value='Medium'>Medium</option>
                        <option value='Hard'>Hard</option>
                    </select>

                    <select value={query.time} name='time' onChange={selectHandler}>
                        <option value='' >Cooking Time</option>
                        <option value='more'>More than 30 min</option>
                        <option value='less'>Less than 30 min</option>
                    </select>

                    <button onClick={searchHandler}>Search</button>
                </div>


                {/* card section */}
                <div className={styles.cards}>
                    {data.map((item) => <Card key={item.id} {...item} />)}
                </div>

            </div>

        </div>
    )
}


export default CategoriesPage