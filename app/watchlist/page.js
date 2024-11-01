import Watchlist from '@/components/Watchlist'
import Head from 'next/head'
import React, { Suspense } from 'react'

const WatchlistPage = () => {
    return (
        <>
            <Head>
                <title>Watchlist for the Movie Browser </title>
                <meta name="robots" content="index, follow" />
                <meta name="description" content="Watchlist - watchlater and liked movies." />
            </Head>
            <Suspense fallback={<div>Loading...</div>}>
                <Watchlist />
            </Suspense>
        </>
    )
}

export default WatchlistPage