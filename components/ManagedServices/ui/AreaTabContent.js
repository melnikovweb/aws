const AreaTabContent = ({ checkboxes, tabNumber }) => {
  return (
    <div className="areas-checkbox-lists">
      {checkboxes.map((column_list, i) => (
        <ul className="areas-checkbox-list" key={'areas-checkbox-list-' + i}>
          {column_list.map((checkbox_title, j) => (
            <li
              className="areas-checkbox-list-item"
              key={'areas-checkbox-' + j + '-' + i}
            >
              <input
                className="styled-checkbox"
                id={'styled-checkbox-' + tabNumber + '-' + i + '-' + j}
                type="checkbox"
              />
              <label
                htmlFor={'styled-checkbox-' + tabNumber + '-' + i + '-' + j}
              >
                {checkbox_title}
              </label>
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default AreaTabContent
