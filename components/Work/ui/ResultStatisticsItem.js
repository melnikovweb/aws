const ResultStatisticsItem = props => {
  //const orangeProgress = '36%';   //for test

  const { title, total, progress } = { ...props.items }

  const orangeProgress = progress[1].value
  const styleProgress = {
    backgroundImage:
      'conic-gradient(#ff4d00 ' +
      orangeProgress +
      ',#0069ff ' +
      orangeProgress +
      ')',
  }

  return (
    <div className="result-statistics-item">
      <div className="result-statistics-circle" style={styleProgress}>
        <div className="result-statistics-circle-label">
          <span>{total}</span>Total
        </div>
      </div>
      <div className="result-statistics-data">
        <div className="result-statistics-data-title">{title}</div>
        <div className="result-statistics-data-items">
          <div className="result-statistics-data-item">
            <span className="point"></span>
            <span className="result-statistics-data-value">
              {progress[0].value}
            </span>
            <span className="result-statistics-data-label">
              {progress[0].title}
            </span>
          </div>
          <div className="result-statistics-data-item">
            <span className="point orange"></span>
            <span className="result-statistics-data-value">
              {progress[1].value}
            </span>
            <span className="result-statistics-data-label">
              {progress[1].title}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultStatisticsItem
