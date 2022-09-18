import classnames from 'classnames'
import Create_Expert from './Create_Expert'
import RangeDuration from './RangeDuration'

import TechnologyList from 'datastore/Teams_TechnologyList'

const TeamsForm = ({ className }) => {
  return (
    <form className="from">
      <div className={classnames(className, 'teams-form')}>
        <div className="teams-form-create-expert cover-section-box">
          <h2 className="page-box__sub-title">Your Team</h2>
          <div className="questions">
            <Create_Expert
              id="input-expert-1"
              className="question"
              title="Project Manager"
              expert_num={3}
            />
            <Create_Expert
              id="input-expert-2"
              className="question"
              title="Business Analyst"
            />
            <Create_Expert
              id="input-expert-3"
              className="question"
              title="QA Engineers"
            />
            <Create_Expert
              id="input-expert-4"
              className="question"
              title="Developers"
              expert_num={5}
            />
          </div>
        </div>
        <div className="teams-form-technology cover-section-box">
          <h2 className="page-box__sub-title">Technology</h2>
          <div className="questions">
            {TechnologyList.map((item, index) => (
              <div className="question-block" key={'teams-tech-item-' + index}>
                <h3 className="teams-sub-title">{item.title}</h3>
                <div className="teams-checkbox-lists">
                  {item.chexboxes.map((column_list, i) => (
                    <ul
                      className="teams-checkbox-list"
                      key={'teams-checkbox-list-' + i}
                    >
                      {column_list.map((checkbox_title, j) => (
                        <li
                          className="teams-checkbox-list-item"
                          key={'teams-checkbox-' + index + '-' + j + '-' + i}
                        >
                          <input
                            className="styled-checkbox"
                            id={'styled-checkbox-' + index + '-' + i + '-' + j}
                            type="checkbox"
                          />
                          <label
                            htmlFor={
                              'styled-checkbox-' + index + '-' + i + '-' + j
                            }
                          >
                            {checkbox_title}
                          </label>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="teams-form-duration">
          <h2 className="page-box__sub-title">Project Duration</h2>
          <div className="questions">
            <RangeDuration className="range" />
          </div>
        </div>
      </div>
    </form>
  )
}

export default TeamsForm
