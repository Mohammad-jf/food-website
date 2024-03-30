import Attributes from '../modules/Attributes'
import Banner from '../modules/Banner'
import Companies from '../modules/Companies'
import Definition from '../modules/Definition'
import Styles from '../templates/homePage.module.css'


const HomePage = () => {
    return (
        <div className={Styles.container}>
            <Banner />
            <Attributes />
            <Definition />
            <Companies />
        </div>
    )
}

export default HomePage