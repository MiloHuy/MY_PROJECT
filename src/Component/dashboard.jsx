import React from 'react'
import TestPage from './sidebar'
import Main from './main'
import News from './news'

function Dashboard() {
    return (
        <div className='grid grid-cols-5 gap-5 w-screen'>
            <TestPage />
            <div className='col-span-3'>
                <Main />
            </div>
            <News />
        </div>
    )
}

export default Dashboard