const fs = require('fs')

const changePath = {
  'process/[[...step]]': [
    'process/idea',
    'process/design',
    'process/management',
    'process/growth',
  ],
  portfolio: [],
  'portfolio/[name]': [],
  'other/managed': [],
  'other/services': [],
  'other/teams': [],
  'stack/[...term]': [
    /*   "stack/front-end",
    "stack/front-end/angular",
    "stack/front-end/java-script", */
  ],
  'stack/': [],
  'privacy-policy': [],
  'cookies-policy': [],
  'terms-and-conditions': [],
  'glossary/[word]': [],
  _app: [],
  404: [],
  'video/': [],
  'referral/[switcher]': [],
  'referral/': [],
  'design/': [],
  'video/works': [],
  'video/Video.module': [],
}

const getFilesObj = () => {
  const fileObj = {}

  const walkSync = dir => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir)
    files.forEach(file => {
      // Construct whole file-path & retrieve file's stats
      const filePath = `${dir}${file}`
      const fileStat = fs.statSync(filePath)
      if (fileStat.isDirectory()) {
        // Recurse one folder deeper
        walkSync(`${filePath}/`)
      } else {
        // Construct this file's pathname excluding the "pages" folder & its extension
        const cleanFileName = filePath
          .substr(0, filePath.lastIndexOf('.'))
          .replace('pages/', '')
          .replace('index', '')
          .replace('/index', '')

        // Add this file to `fileObj`

        changePath[cleanFileName]
          ? changePath[cleanFileName].forEach(path => {
              fileObj[`/${path}`] = {
                page: `/${path}`,
                lastModified: fileStat.mtime,
              }
            })
          : (fileObj[`/${cleanFileName}`] = {
              page: `/${cleanFileName}`,
              lastModified: fileStat.mtime,
            })
      }
    })
  }

  // Start recursion to fill `fileObj`
  walkSync('pages/')

  return fileObj
}

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear()

  if (month.length < 2) month = '0' + month
  if (day.length < 2) day = '0' + day

  return [year, month, day].join('-')
}

const generateSitemap = () => {
  const pathsObj = getFilesObj()
  const SitemapXMLParser = require('sitemap-xml-parser')

  const url = 'https://binerals.com/blog/post-sitemap.xml'
  const options = {
    delay: 3000,
    limit: 5,
  }

  const sitemapXMLParser = new SitemapXMLParser(url, options)

  sitemapXMLParser.fetch().then(result => {
    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"> 
      ${Object.keys(pathsObj).map(page => {
        return `<url>
        <loc>https://binerals.com${page}</loc>
        <lastmod>${formatDate(new Date(pathsObj[page].lastModified))}</lastmod>
      </url>`
      })}
      ${result.map(page => {
        let str = `<url>`
        str += `<loc>${page.loc}</loc>
        <lastmod>${page.lastmod}</lastmod>`
        if (page['image:image']) {
          page['image:image'].map(img => {
            str += `<image:image><image:loc>${img['image:loc']}</image:loc>`
            str += img['image:title']
              ? `<image:title><![CDATA[${img['image:title']}]]></image:title>`
              : ''
            str += `</image:image>`
          })
        }
        str += `</url>`
        return str
      })}
    </urlset>`

    fs.writeFileSync('public/sitemap.xml', sitemapXml)
  })
}

generateSitemap()
