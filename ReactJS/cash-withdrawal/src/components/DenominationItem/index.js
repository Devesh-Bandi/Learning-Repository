// Denomination item jsx
import './index.css'

const DenominationItem = props => {
  const { denominationDetails, updateBalance } = props
  const { value } = denominationDetails
  const onClickDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className='denomination-item'>
      <button className='denomination-button' type='button' onClick={onClickDenomination}>{value}</button>
    </li>
  )
}

export default DenominationItem