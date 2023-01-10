import Layout from '../components/Layout';
import { Analytics } from '@vercel/analytics/react';
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </div>
  )
};

export default MyApp;
