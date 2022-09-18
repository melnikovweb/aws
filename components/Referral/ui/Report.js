import People from 'components/Icons/People'

const Report = ({ team, expertLevel, middleLevel, juniorLevel }) => {
  return (
    <>
      <div className="report-row">
        <div className="report-row-box">
          <div className="report-label">Time spent</div>
          <div className="report-time-line">
            <div
              className="report-time-line-blue"
              style={{ width: expertLevel }}
            ></div>
          </div>
        </div>
      </div>
      <div className="report-row">
        <div className="report-row-box">
          <div className="report-value">
            <span>
              <People width="27" height="20" />
            </span>
            {team}
          </div>
          <div className="report-label">Team</div>
        </div>
        <div className="report-row-box">
          <div className="report-value">
            <span className="point"></span>
            {expertLevel}
          </div>
          <div className="report-label">Expert Level</div>
        </div>
        <div className="report-row-box">
          <div className="report-value">
            <span className="point orange"></span>
            {middleLevel}
          </div>
          <div className="report-label">Middle Level</div>
        </div>
        <div className="report-row-box">
          <div className="report-value gray">
            <span className="point gray"></span>
            {juniorLevel}
          </div>
          <div className="report-label">Junior Level</div>
        </div>
      </div>
    </>
  )
}

export default Report
