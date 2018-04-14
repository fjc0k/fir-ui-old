export const inBrowser = typeof window !== 'undefined'

export function ensureBrowser(resolve, reject) {
  if (inBrowser) {
    resolve(window)
  } else {
    reject && reject()
  }
}
