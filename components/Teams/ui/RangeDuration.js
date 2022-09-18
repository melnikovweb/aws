import Slider from '@material-ui/core/Slider'

const RangeDuration = ({ className }) => {
  const marks = [
    {
      value: 1,
      label: '1 mounth',
    },
    {
      value: 6,
      label: '6 mounths',
    },
    {
      value: 12,
      label: '1 year',
    },
    {
      value: 18,
      label: '1.5 years',
    },
    {
      value: 24,
      label: '2 years',
    },
  ]

  const valuetext = value => {
    return `Duration: ${value} months`
  }

  return (
    <Slider
      className={className}
      defaultValue={3}
      valueLabelFormat={valuetext}
      min={1}
      max={24}
      aria-labelledby="discrete-slider-always"
      marks={marks}
      valueLabelDisplay="on"
    />
  )
}
export default RangeDuration
