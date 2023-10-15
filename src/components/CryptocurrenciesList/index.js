// Write your JS code here
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const CryptocurrenciesList = props => {
  const {cryptocurrenciesData} = props

  return (
    <ul className="cryptocurrencies-list">
      <div className="bg-cont">
        <h2>Coin Type</h2>
        <div className="small-cont">
          <h2>USD</h2>
          <h2>EURO</h2>
        </div>
      </div>
      {cryptocurrenciesData.map(crypto => (
        <CryptocurrencyItem key={crypto.id} cryptoData={crypto} />
      ))}
    </ul>
  )
}

export default CryptocurrenciesList
