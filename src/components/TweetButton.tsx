import Script from 'next/script'

export default function TweetButton() {
  return (
    <>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        className="twitter-share-button"
        data-size="large"
        data-show-count="false"
      >
        Tweet
      </a>
      <Script
        strategy="afterInteractive"
        src="https://platform.twitter.com/widgets.js"
      ></Script>
    </>
  )
}
