const LinksBox = ({ title, links }) => {
  return (
    <div className="links-box">
      {title ? <h4 className="links-box-title">{title}</h4> : null}
      <ul className="links-box-items">
        {links.map((item, index) => (
          <li className="links-box-item" key={`links-box-item-${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LinksBox
