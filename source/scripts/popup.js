import 'emoji-log'
import browser from 'webextension-polyfill'

function openWebPage(url) {
  return browser.tabs.create({ url })
}

document.addEventListener('DOMContentLoaded', async () => {
  const tabs = await browser.tabs.query({
    active: true,
    lastFocusedWindow: true
  })

  const url = tabs.length && tabs[0].url

  const response = await browser.runtime.sendMessage({
    msg: 'hello',
    url
  })

  // eslint-disable-next-line no-console
  console.emoji('🦄', response)

  document.getElementById('github__button').addEventListener('click', () => {
    return openWebPage('https://github.com/lirantal/twiks')
  })

  document.getElementById('donate__button').addEventListener('click', () => {
    return openWebPage('https://twitter.com/liran_tal')
  })

  document.getElementById('options__button').addEventListener('click', () => {
    return openWebPage('options.html')
  })
})
