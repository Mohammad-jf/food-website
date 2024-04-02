
const FoodDetail = ({ data }) => {
    return (
        <div>{data.id}</div>
    )
}

export default FoodDetail







export async function getStaticPaths() {
    const response = await fetch('http:localhost:4000/data');
    const data = await response.json();
    let paths = data.slice(0, 10).map((item) => ({ params: { foodId: item.id } }));

    return {
        paths,
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const { params: { foodId } } = context;
    const response = await fetch(`http:localhost:4000/data/${foodId}`);
    const data = await response.json();

    if (!data.id) {
        return {
            notFound: true,
        }

    }

    return {
        props: {
            data
        },
        revalidate: 60,
    }
}