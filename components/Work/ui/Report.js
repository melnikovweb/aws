import Link from 'next/link'

import People from 'components/Icons/People'
import Mouse from 'components/Icons/Mouse'

const Report = props => {
  const { title, team, date, tasks, dev, bugfix, linkPDF } = { ...props.items }

  return (
    <div className="report">
      <div className="report-row report-row-1">
        <div className="report-row-box">
          <div className="report-title">{title}</div>
          <div className="report-date">{date}</div>
        </div>
        <div className="report-row-box">
          <div className="report-label">Time spent</div>
          <div className="report-time-line">
            <div className="report-time-line-blue" style={{ width: dev }}></div>
          </div>
        </div>
      </div>
      <div className="report-row report-row-2">
        <div className="report-row-box">
          <div className="report-value">
            <span>
              <People width={28} height={28} />
            </span>
            {team}
          </div>
          <div className="report-label">Team</div>
        </div>
        <div className="report-row-box">
          <div className="report-value">
            <span>
              <Mouse />
            </span>
            {tasks}
          </div>
          <div className="report-label">Tasks completed</div>
        </div>
        <div className="report-row-box">
          <div className="report-value">
            <span className="point"></span>
            {dev}
          </div>
          <div className="report-label">Design</div>
        </div>
        <div className="report-row-box">
          <div className="report-value">
            <span className="point orange"></span>
            {bugfix}
          </div>
          <div className="report-label">PM/BA</div>
        </div>
        <div className="report-row-box report-pdf">
          <Link href={linkPDF}>
            <a className="button button--big">Pdf</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Report
