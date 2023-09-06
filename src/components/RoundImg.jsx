/* eslint-disable react/prop-types */
import '../style/roundImg.css'

function RoundImg({ src, onClick, style }) {

  return (
    <div className='roundImgLayout' style={style}>
      <div className='roundImg' onClick={onClick} style={{backgroundImage: `url(${src})`}}></div>
    </div>
  )
}

export default RoundImg
