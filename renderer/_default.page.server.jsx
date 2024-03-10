export { render }
// See https://vike.dev/data-fetching
export const passToClient = ['pageProps', 'urlPathname']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'
import logoUrl from './favicon.ico'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  // This render() hook only supports SSR, see https://vike.dev/render-modes for how to modify render() to support SPA
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports
  const title = (documentProps && documentProps.title) || 'Ankit Kumar Jha | Full-Stack Developer | Portfolio';
  const desc = (documentProps && documentProps.description) || 'Explore the portfolio of Ankit Kumar Jha, a Full-Stack Developer with expertise in modern web technologies. Discover projects, skills, and professional journey.';

  const keywords = (documentProps && documentProps.keywords) || 'Ankit Kumar Jha, Full-Stack Developer, Web Developer Portfolio, Oditek Solutions, Software Engineer Bhubaneswar, MEAN Stack Developer, Professional Portfolio, Tech Projects, Programming Skills, Developer Journey, coding tutorials, Software Development, Web Development,';

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name='keywords' content='${keywords}'>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${title}</title>
        <meta name="description" content="${desc}" />
        <meta name='subject' content="Ankit Kumar Jha: Full-Stack Developer Portfolio">
        <meta name='copyright' content='Ankit Kumar Jha'>
        <meta name='language' content='EN'>
        <meta name='revised' content='Sunday, July 18th, 2010, 5:15 pm' />
        <meta name='abstract' content='Portfolio of Ankit Kumar Jha, Full-Stack Developer showcasing skills, projects, and professional journey.'>
        <meta name='topic' content='Web Development and Programming'>
        <meta name='summary' content='Portfolio showcasing projects, skills, and professional journey of Ankit Kumar Jha, a Full-Stack Developer.'>
        <meta name='Classification' content='Business'>
        <meta name='author' content='Ankit Kumar Jha, ankitkumarcse91@gmail.com'>
        <meta name='designer' content='Ankit Kumar Jha'>
        <meta name='reply-to' content='ankitkumarcse91@gmail.com'>
        <meta name='owner' content='Ankit Kumar Jha'>
        <meta name='url' content='https://ankitkumarjha.dev'>
        <meta name='identifier-URL' content='https://ankitkumarjha.dev'>
        <meta name='directory' content='submission'>
        <meta name='pagename' content='Ankit Kumar Jha | Full-Stack Developer | Portfolio'>
        <meta name='category' content='Web Development, Programming, Software Engineering'>
        <meta name='coverage' content='Worldwide'>
        <meta name='distribution' content='Global'>
        <meta name='rating' content='General'>
        <meta name='revisit-after' content='7 days'>
        <meta name='subtitle' content='Explore the professional journey of Ankit Kumar Jha'>
        <meta name='target' content='all'>
        <link rel="canonical" href="https://ankitkumarjha.dev/#contact" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${desc}" />
        <meta property="og:url" content="https://ankitkumarjha.dev" />
        <meta property="og:site_name" content="Ankit Kumar Jha | Full-Stack Developer | Oditek Solutions, Bhubaneswar, Odisha" />
        <meta property="og:image" content="https://ankitkumarjha.dev/static/media/profile_photo.329936159d751b3845fd.jpg" />
        <meta property="og:image:width" content="728" />
        <meta property="og:image:height" content="485" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="https://ankitkumarjha.dev/static/media/profile_photo.329936159d751b3845fd.jpg" />
        <meta name="twitter:creator" content="@ankitkumarcse1" />
        <meta name="twitter:title" content="Ankit Kumar Jha | Full-Stack Developer | Portfolio" />
        <meta name="twitter:description" content="Explore the portfolio of Ankit Kumar Jha, a Full-Stack Developer with expertise in modern web technologies. Discover projects, skills, and professional journey." />
        <meta name="twitter:image" content="https://ankitkumarjha.dev/static/media/profile_photo.329936159d751b3845fd.jpg" />
        <meta name="theme-color" content="#2a7668" />
        <link rel="icon" href="${logoUrl}" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap" rel="stylesheet" />
        <meta name="author" content="Ankit Kumar Jha" />
      </head>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    }
  }
}
