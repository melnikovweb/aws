import React from 'react'
import Link from 'next/link'
import PDFIcon from './Icons/Pdf'

const Expert = props => {
  const { position, keys, years_experience, projects, price, pdf } = {
    ...props.items,
  }

  return (
    <div className="expert">
      <div className="expert-content">
        <div className="expert-title">{position}</div>
        <div className="expert-keys">
          <div className="expert-keys-label">Key technologies:</div>
          <div className="expert-keys-list">{keys}</div>
        </div>
        <div className="expert-experience">
          <div className="expert-experience-years">
            <span>{years_experience}</span>
            <span>years experience</span>
          </div>
          <div className="expert-experience-projects">
            <span>{projects}</span>
            <span>finished projects</span>
          </div>
        </div>
        <div className="expert-footer">
          {price && <span className="expert-price">{price}</span>}
          {pdf && (
            <span className="expert-pdf">
              <PDFIcon width="31" height="31" fill="#0069FF" />
              <Link href={pdf}>
                <a className="expert-pdf-link">Resume</a>
              </Link>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Expert
