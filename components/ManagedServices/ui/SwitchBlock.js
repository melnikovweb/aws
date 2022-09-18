import CheckboxSwitch from 'components/CheckboxSwitch'

const SwitchBlock = ({ id, title, no_label, yes_label }) => {
  return (
    <div className="switch-block">
      <CheckboxSwitch
        className="switch"
        id={id}
        no_label={no_label}
        yes_label={yes_label}
      />
      <div className="switch-title">{title}</div>
    </div>
  )
}

export default SwitchBlock
