import { FC } from 'react';
import {default as NextHead} from 'next/head';

export const Head: FC = () => {
  return (
    <NextHead>
        <title>Tom Maguire Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </NextHead>
  )
}