import React from 'react'
import Detail from '../../sections/blog/Detail'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

function Id() {
    const router = useRouter()
    const { id } = router.query

    return (
        <React.Fragment>
            <NextSeo title="My-Blog | Home" />
            <Detail />
        </React.Fragment>
    )
}

export default Id