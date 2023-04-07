import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Main from '../components/Main'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<div id='app-wrapper' className={styles.container}>
			<Head>
				<title>Nadir Bakhsh | Portfolio</title>
				<meta name='description' content='Generated by create next app' />
				<link
					rel='stylesheet'
					href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css'
					integrity='sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=='
					crossorigin='anonymous'
					referrerpolicy='no-referrer'></link>
			</Head>

			<Header />

			<Main />
			<Footer />
		</div>
	)
}