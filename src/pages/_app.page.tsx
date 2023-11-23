import type { AppProps } from 'next/app'
import { globasStyles } from '../styles/global'

globasStyles()

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
