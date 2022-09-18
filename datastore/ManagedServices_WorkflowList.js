import ManagementIcon from 'components/Icons/Management'
import SoftwareDevelopmentIcon from 'components/Icons/SoftwareDevelopment'
import TechnologiesIcon from 'components/Icons/Technologies'
import ProductAdaptationIcon from 'components/Icons/ProductAdaptation'
import QualityControlIcon from 'components/Icons/QualityControl'

export default [
  {
    title: 'Start Working',
    isDisabled: true,
  },
  {
    Icon: SoftwareDevelopmentIcon,
    title: 'Software Development',
  },
  {
    Icon: QualityControlIcon,
    title: 'Quality Control',
  },
  {
    Icon: ManagementIcon,
    title: 'Management',
  },
  {
    Icon: TechnologiesIcon,
    title: 'Delivery &\n' + 'Deployment',
  },
  {
    Icon: ProductAdaptationIcon,
    title: 'Payment &\n' + 'Warranty',
  },
]
