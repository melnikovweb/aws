const InitialDataLoader = async () => {
  const url = new URL('/api/v1/app/getInitialData', process.env.HOST_NAME)
  url.search = `siteId=${process.env.SITE_ID}`
  const response = await fetch(url)
  if (!response.ok) {
    return { metaData: {}, brandInfo: {} }
  }

  const json = await response.json()
  return json.data
}

export default InitialDataLoader
