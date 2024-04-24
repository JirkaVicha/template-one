
const LeftSide = ({ menuItems, handleMenuItem }) => {

  return (
    <div className="leftside-container">
        <div className="menu">
          {menuItems.map(item => (
            <div className="buttons" key={item}>
              <button onClick={() => handleMenuItem(item)}>{item}</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default LeftSide