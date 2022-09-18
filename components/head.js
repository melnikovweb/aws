import NextHead from 'next/head'
import { useEffect } from 'react'

import TagManager from 'react-gtm-module'

const Head = ({
  metaTitle,
  metaDescription,
  metaKeywords,
  metaImage,
  locale,
  noindex = false,
  brandInfo = {},
  externalTracks = {},
}) => {
  useEffect(() => {
    if (externalTracks.gtm && externalTracks.gtm) {
      TagManager.initialize({ gtmId: externalTracks.gtm.value })
    }
  }, [])

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{metaTitle || brandInfo.title || 'Binerals'}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={metaDescription || ''} />
      <meta name="keywords" content={metaKeywords || ''} />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicon-16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicon-32x32.png"
      />
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/apple-touch-icon.png"
      />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#000000" />

      <meta property="og:title" content={metaTitle || ''} />
      <meta property="og:description" content={metaDescription || ''} />
      <meta property="og:image" content={metaImage || ''} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
    </NextHead>
  )
}

export default Head
