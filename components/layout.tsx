import ModalContact from './ModalContact'
import Head from 'next/head'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <Head>
        <title>99PersenAyuAutoDetail | Salon Mobil Pekanbaru</title>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta key="description" name='description' property="description" content='Jasa salon mobil 99persenayu melayani salon dan nano coating dengan harga terjangkau' />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="salon, mobil, jasa, salon mobil, jasa salon mobil, jasa salon mobil murah, jasa salon mobil murah pekanbaru, salon mobil murah, indonesia, pekanbaru, medan, padang, jakarta, jawa, sumatera, sumatera utara, sumatera barat, jambi, riau" />
        <meta property="og:type" content="services" />
        <meta property="og:site_name" content="99persenayuautodetailnanotech"></meta>
        <meta property="og:url" content="https://99persenayuautodetailnanotech.id" />
        <meta property="og:image" content="/logo.webp" />
        <meta name="google-site-verification" content="1aT5UGs0MB_Nj67nBZ0IQUL8UTipmIW-sca8789lPZM" />
      </Head>
      {children}
      <ModalContact />
    </div>
  )
}
