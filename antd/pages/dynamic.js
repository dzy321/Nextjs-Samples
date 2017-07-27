import Head from 'next/head'
import dynamic from 'next/dynamic'
const Rate = dynamic(import('antd/lib/rate'))
const Slider = dynamic(import('antd/lib/slider'))

export default () => {
  return <div>
    <Head>
      <title>antd samples</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/2.12.2/antd.css" />
    </Head>
    <Rate />
     <Slider /> 
  </div>
}