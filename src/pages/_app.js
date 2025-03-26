import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { GoogleAnalytics } from '@next/third-parties/google'; //GA
import DbmAppBar from '../components/DbmAppBar';

import Page from '../components/core/Page';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
    return (
        <React.Fragment>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Lloyd Mandell" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dbmlegalservices.com/" />
                <meta property="og:title" content="DBM Legal Services" />
                <meta property="og:description" content="DBM Legal Services, LLC is a full-service law firm that provides legal services to individuals and businesses in the areas of business law, estate planning, and real estate." />
                <meta property="og:image" content="https://res.cloudinary.com/dtxp5tzr5/image/upload/v1731195463/philly_rlt0hl.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                <link rel="icon" href="/images/favicon.ico" />
                <link rel="shortcut icon" href="/images/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="apple-icon" sizes="180x180" href="/apple-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

                <meta
                    name="description"
                    content="DBM Legal Services, LLC is a full-service law firm that provides legal services to individuals and businesses in the areas of business law, estate planning, and real estate."
                />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

                <title>DBM Legal Services</title>
            </Head>
            <Page>
                <Component {...pageProps} />
                <GoogleAnalytics gaId="G-W53S0BXD8Y" />
            </Page>
        </React.Fragment>
    );
}

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired
};
