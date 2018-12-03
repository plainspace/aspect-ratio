import React from 'react'
import NextHead from 'next/head'
import { string } from 'prop-types'

const defaultTitle = 'Aspect'
const defaultDescription = 'A simple aspect ratio calculator.'
const defaultOGURL = ''
const defaultOGImage = '/static/icon.png'

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || defaultTitle}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/static/icon.png" type="image/png" />
    <meta property="og:title" content={props.title || defaultTitle} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
}

export default Head
