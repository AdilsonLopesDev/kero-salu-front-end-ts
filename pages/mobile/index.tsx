import React from 'react'
import MobileHome from '@client/views/mobile/views/layout'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import Home from '@client/views/mobile/views/home'

const Mobile: React.FC = () => {
  return (
    <MobileHome title="Home">
      <Home />
    </MobileHome>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { ['nextauth.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/sign-in-mobile',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default Mobile
