import Layout from '@/components/layout'
import Board from '@/components/board'
import Header from '@/components/header'

export default function Home() {
  return (
    <>
      <Layout>
        <Header />
        <Board />
      </Layout>
      <div id="modal-root"></div>
    </>
  )
}
