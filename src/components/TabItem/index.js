import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabId, isActive} = props
  const {displayText, tabId} = tabDetails
  const onTab = () => {
    onClickTabId(tabId)
  }
  console.log(isActive)
  const className = isActive ? 'active-tab-btn' : null

  return (
    <li className="tab-item-container">
      <button type="button" className={`tab-btn ${className}`} onClick={onTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
