const CheckboxSwitch = ({ className, id, no_label, yes_label }) => {
  return (
    <div className={className}>
      <span className={className + '-label-no'}>{no_label}</span>
      <input id={id} className="cmn-toggle cmn-toggle-round" type="checkbox" />
      <label htmlFor={id}></label>
      <span className={className + '-label-yes'}>{yes_label}</span>
    </div>
  )
}

export default CheckboxSwitch
