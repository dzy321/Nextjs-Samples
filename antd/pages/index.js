import Head from 'next/head'
import { Rate, Slider } from 'antd'

export default () => (
  <div>
    <Head>
      <title>antd samples</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.12.2/antd.css" />
    </Head>
    <Rate />
    <Slider />
  </div>
)