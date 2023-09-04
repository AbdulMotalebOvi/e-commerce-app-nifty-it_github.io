import React from 'react';
import CommonSection from '../CommonSection/CommonSection';
import DetailLandingPage from './DetailLandingPage';
import { useParams } from 'react-router-dom';
import jsonData from '../fakeData/data.json'
import Loader from '../Loader/Loader';
import useTitle from '../Hooks/useTitle';

const Details = () => {
    useTitle('Product Details')
    const header = 'Product Details';
    const title = 'Product Details';
    const linkUp = 'Details'
    const sectionMarkup = CommonSection(header, title, linkUp);

    const { id } = useParams();
    const product = jsonData?.find((item) => item.id === parseInt(id));

    if (!product) {
        return <Loader />;
    }
    return (
        <section>
            {sectionMarkup}
            <div className="my-0 max-w-screen-xl mx-auto">
                <DetailLandingPage data={product} />
                {/* <Filtering data={data} /> */}
            </div>
        </section>
    );
};

export default Details;