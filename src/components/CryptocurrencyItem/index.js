// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, imageSrc} = cryptoData

  return (
    <li className="cryptocurrency-item">
      <div className="crypto-image-container">
        <img src={imageSrc} alt={currencyName} className="crypto-image" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="crypto-info">
        <p className="usd-value">{usdValue}</p>
        <p className="euro-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
