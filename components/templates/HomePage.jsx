import Attributes from '../modules/Attributes'
import Banner from '../modules/Banner'
import Definition from '../modules/Definition'
import Styles from '../templates/homePage.module.css'


const HomePage = () => {
    return (
        <div className={Styles.container}>
            <Banner />
            <Attributes />
            <Definition />
        </div>
    )
}

export default HomePage