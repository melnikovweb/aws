import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import HomeIcon from 'components/Icons/Home'
import BreadcrumbList from 'datastore/Breadcrumbs'

const convertBreadcrumb = (route, pathTitle) => {
  pathTitle = pathTitle.split('?')[0]

  return BreadcrumbList[route]
    ? BreadcrumbList[route]
    : pathTitle
        .replace(/-/g, ' ')
        .replace(/oe/g, 'ö')
        .replace(/ae/g, 'ä')
        .replace(/ue/g, 'ü')
}

const Breadcrumbs = () => {
  const router = useRouter()
  const [breadcrumbs, setBreadcrumbs] = useState(null)

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/')
      linkPath.shift()

      const pathArray = linkPath.map((path, i) => {
        return {
          breadcrumb: convertBreadcrumb(
            '/' + linkPath.slice(0, i + 1).join('/'),
            path,
          ),
          href: '/' + linkPath.slice(0, i + 1).join('/'),
        }
      })

      pathArray.unshift({
        breadcrumb: convertBreadcrumb('/', 'home'),
        href: '/',
      })
      delete pathArray[pathArray.length - 1].href

      setBreadcrumbs(pathArray)
    }
  }, [router])

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav aria-label="breadcrumbs">
      <ul
        className="breadcrumb"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbs.map((breadcrumb, i) => {
          return (
            <li
              key={i}
              className="breadcrumb__item"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {breadcrumb.href ? (
                <Link href={breadcrumb.href}>
                  <a
                    itemProp="item"
                    title={breadcrumb.breadcrumb}
                    className="breadcrumb__link"
                  >
                    <span itemProp="name">
                      {breadcrumb.breadcrumb}
                      {/*i === 0 ? <HomeIcon width={20} height={20} /> : null*/}
                    </span>
                    <meta itemProp="position" content={i} />
                  </a>
                </Link>
              ) : (
                <>
                  <span itemProp="name">{breadcrumb.breadcrumb}</span>
                  <meta itemProp="position" content={i} />
                </>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumbs
