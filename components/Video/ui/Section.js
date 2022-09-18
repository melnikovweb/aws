import classnames from 'classnames'
import Image from 'next/image'
import styles from 'pages/video/Video.module.less'

const Section = ({
  className = '',
  id = '',
  title = '',
  description = '',
  imageLink = '',
  children,
}) => {
  return (
    <section
      {...(id ? { id: id } : {})}
      className={classnames(className, styles.section)}
    >
      <div className={styles.container}>
        {title ? (
          <div className={styles['section-header']}>
            <h2
              className={classnames(
                styles['section-title'],
                description ? styles['title--decor'] : '',
              )}
            >
              {title}
            </h2>
            {description ? (
              <p className={styles['section-description']}>{description}</p>
            ) : null}
          </div>
        ) : null}
        {imageLink ? (
          <div className={styles['section-photo']}>
            <Image
              src={imageLink}
              className={styles['section-photo-img']}
              layout="fill"
            />
            <div className={styles['section-photo-content']}>
              <div className={styles['section-content']}>{children}</div>
            </div>
          </div>
        ) : (
          <div className={styles['section-subContent']}>
            <div className={styles['section-content']}>{children}</div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Section
