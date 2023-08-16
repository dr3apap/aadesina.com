import React from 'react'

const rssComponents = {
  tweet({ node, account = 'Dr3_147', id, ...props }) {
    return (
      <blockquote>
        <p>
          <a href={`https://twitter.com/${account}/status/${id}`}>
            Check out the related tweet!
          </a>
        </p>
      </blockquote>
    )
  },
  demo({ node, ...props }) {
    return (
      <blockquote>
        <p>
          Check out <a href={props.src}>this demo</a> from <a href="https://aadesina.com">dr3apap</a>.
        </p>
      </blockquote>
    )
  },
  codepen({ node, ...props }) {
    return (
      <blockquote>
        <p>
          Check out the{' '}
          <a href={`https://codepen.io/dr3apap/${props.id}`}>demo pen</a> by dr3apap (
          <a href="https://codepen.io/dr3apap">@dr3apap</a>) over on{' '}
          <a href={`https://codepen.io/dr3apap/${props.id}`}>CodePen</a>.
        </p>
      </blockquote>
    )
  },
  p({ node, ...props }) {
    const interactive = node.children.find(
      (child) => child.tagName === 'tweet' || child.tagName === 'codepen'
    )
    const toc = node.children.find(
      (child) => child.tagName === 'tableofcontents'
    )
    if (toc) return null
    if (interactive) return <>{props.children}</>
    return <p>{props.children}</p>
  },
  img({ node, ...props }) {
    if (props.src.endsWith('.mp4')) {
      props.src = `https://aadesina.com${props.src}`
      return <video {...props} controls loop muted></video>
    }
    if (props.src.endsWith('.mp3')) {
      props.src = `https://aadesina.com${props.src}`
      return <audio {...props} controls></audio>
    }
    return <img {...props} />
  },
  a({ node, children, ...props }) {
    if (props.href.startsWith('/')) {
      props.href = `https://aadesina.com${props.href}`
    }
    return <a {...props}>{children}</a>
  },
}

export default rssComponents