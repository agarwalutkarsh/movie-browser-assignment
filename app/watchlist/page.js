import Watchlist from '@/components/Watchlist'
import React, { Suspense } from 'react'

const WatchlistPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Watchlist />
        </Suspense>
    )
}

export default WatchlistPage