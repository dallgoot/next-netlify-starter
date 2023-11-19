import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>❤️</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Merci ! de ta curiosité 😊" />
        <p className="description">
          ..mais je n'ai pas le physique pour un Onlyfans 😘
        </p>
      </main>

      <Footer />
    </div>
  )
}
