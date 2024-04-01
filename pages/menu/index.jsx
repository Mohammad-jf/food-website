import MenuPage from '@/components/templates/MenuPage';

const Menu = ({ foods }) => {
    return (
        <>
            <MenuPage data={foods} />
        </>
    )
}

export default Menu


export async function getStaticProps() {

    const response = await fetch('http:localhost:4000/data');
    const data = await response.json();


    return {
        props: {
            foods: data
        },
        revalidate: 10, //seconds
    }
}