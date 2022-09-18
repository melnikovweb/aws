import Tags from 'components/Tags'
import People from 'components/Icons/People'

const CalculateResultForm = props => {
  const { teams, projects_info, you_get } = { ...props.data }

  const team_total = teams.reduce((acc, team) => {
    return acc + team.total
  }, 0)

  return (
    <form className="calculate-result-form">
      <div className="estimation-data">
        <div className="form-section">
          <div className="form-section-cost">
            <div className="form-section-title">Approximate cost:</div>
            <div className="form-section-cost-value">$ 5 600</div>
          </div>
        </div>
        <div className="form-section">
          <div className="form-section-team">
            <div className="form-section-title">Your Team:</div>
            <div className="form-section-team-value">
              <People width={30} height={22} />
              {team_total}
            </div>
          </div>
          <ul className="form-section-team-list">
            {teams.map((item, i) => (
              <li
                key={`team-expert-` + i}
                className="form-section-team-list-item"
              >
                {item.expert}
                <span>{item.total}</span>
              </li>
            ))}
          </ul>
        </div>
        {projects_info ? (
          <div className="form-section">
            <div className="form-section-title">Your Project:</div>
            <Tags list={projects_info} />
          </div>
        ) : null}
        {you_get ? (
          <div className="form-section">
            <div className="form-section-title">What You get:</div>
            <Tags list={you_get} />
          </div>
        ) : null}
      </div>

      <div className="estimation-form">
        <div className="form-box">
          <input
            type="name"
            className="field"
            name="name"
            placeholder="Your name"
          />
        </div>
        <div className="form-box">
          <input
            type="email"
            className="field"
            name="email"
            placeholder="Your Phone or Corporate E-mail"
          />
        </div>
        <div className="form-box">
          <input
            type="text"
            className="field"
            name="comment"
            placeholder="Leave Your Comments"
          />
        </div>
        <div className="form__footer">
          <button className="button button--big">Get a Consultation</button>
        </div>
      </div>
    </form>
  )
}
export default CalculateResultForm
