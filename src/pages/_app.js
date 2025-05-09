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
                <title>DBM Legal Services</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="author" content="Lloyd Mandell" />
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
