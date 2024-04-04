import CategoriesPage from "@/components/templates/CategoriesPage"


const Categories = ({ data }) => {
    return <CategoriesPage data={data} />
}

export default Categories





export async function getServerSideProps(context) {
    const { query: { difficulty, time } } = context
    const response = await fetch('http:localhost:4000/data');
    const data = await response.json();


    const filteredData = data.filter((item => {
        // check to match difficulty
        const difficultyResult = item.details.filter((detail) => detail.Difficulty && detail.Difficulty === difficulty);

        // check to match time
        const timeResult = item.details.filter((detail) => {
            // check to see if cooking time exist or not
            const cookingTime = detail['Cooking Time'] || '';
            // getting the number it self
            const [timeDetail] = cookingTime.split('');

            if (time === 'less' && timeDetail && +timeDetail <= 30) {
                return detail
            } else if (time === 'more' && timeDetail && +timeDetail > 30) {
                return detail
            }
        });


        // return the item base on time and difficulty filters
        if (time && difficulty && timeResult.length && difficultyResult.length) {
            return item
        } else if (!time && difficulty && difficultyResult.length) {
            return item
        } else if (!difficultyResult && time && timeDetail.length) {
            return item
        }
    }))


    return {
        props: {
            data: filteredData
        }
    }
}