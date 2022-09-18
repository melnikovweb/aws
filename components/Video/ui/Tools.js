import styles from 'pages/video/Video.module.less'

const Tools = ({ list }) => {
  return (
    <div className={styles.tools}>
      <div className={styles['tools-arrow-top']}></div>
      <ul className={styles['tools-list']}>
        {list.map(({ Icon, title }, index) => (
          <li
            className={[styles.button, styles['tools-list-item']].join(' ')}
            key={`tools-item-${index}`}
          >
            <Icon className={styles['tools-list-item-icon']} />
            <span className={styles['tools-list-item-title']}>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Tools
