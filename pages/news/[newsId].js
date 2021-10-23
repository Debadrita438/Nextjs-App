// our-domain.com/news/(something-important) <--- dynamic Parameter

import { useRouter } from 'next/router';

const DetailsPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;
    // send request to the backend to fetch data

    return <h1>The Details Page</h1>;
};

export default DetailsPage;
