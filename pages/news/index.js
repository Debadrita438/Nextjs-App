// our-domain.com/news

import { Fragment } from 'react';
import Link from 'next/link';

const NewsPage = () => {
    return (
        <Fragment>
            <h1>The News Page</h1>
            <ul>
                <li>
                    <Link href='/news/next-js-is-a-great-framework'>NextJS is a Great Framework</Link>
                </li>
                <li>
                    <Link href='/news/something-else'>Somthing else</Link>
                </li>
            </ul>
        </Fragment>
    );
};

export default NewsPage;
