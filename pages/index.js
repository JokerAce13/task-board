import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import Board from '@/components/board'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', })

export default function Home() {
  return (
    <>
      {/* <Layout className={`${inter.variable} font-sans`}> */}
      <Layout>
        <Header />
        <Board />
      </Layout>
      <div id="modal-root"></div>
    </>
  )
}
