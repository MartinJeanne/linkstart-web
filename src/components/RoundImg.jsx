/* eslint-disable react/prop-types */
import '../style/roundImg.css'

function RoundImg({ src }) {

  return (
    <div className='roundImgLayout'>
      <div></div>
      <div className='roundImg' style={{backgroundImage: `url(${src})`}}></div>
    </div>
  )
}

export default RoundImg
