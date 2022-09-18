import classnames from 'classnames'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const BineralsAccordion = ({ className, items }) => {
  return (
    <div className={classnames(className, 'binerals-accordion')}>
      {items.map(({ title, content }, index) => (
        <Accordion key={`faq-${index}`}>
          <AccordionSummary
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography>{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}
export default BineralsAccordion
