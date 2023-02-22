import React from 'react'
import Today from '@/components/home/blog/right/today'
import Latest from '@/components/home/blog/right/latest'
import Banner from '@/components/home/blog/right/banner'

export default function index() {
  return (
    <div className='lg:mr-4 mr-0'>
      <Today />
        <Latest />
        <Banner />
    </div>
  )
}
