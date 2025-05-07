import './index.css'

const BrowserHistoryItem = props => {
  const { historyDetails, deleteHistory } = props
  const { id, timeAccessed, logoUrl, title, domainUrl } = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }
  return (
    <li className="history-item">
      <div className="history-time-site-details">
        <p className="time">{timeAccessed}</p>
        <div className="site-details">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="title">{title}</p>
          <p className="domain-name">{domainUrl}</p>
        </div>
      </div>

      <button
        type="button"
        className="delete-button"
        data-testid="delete"
        onClick={onDeleteHistory}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default BrowserHistoryItem