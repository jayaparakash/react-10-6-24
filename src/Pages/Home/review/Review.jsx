import './Review.css'
export default function Review() {
  return (
    <div>

        {/* <!-- From Uiverse.io by ashif_6672 -->  */}
<svg  aria-hidden="true">
  <filter id="noise">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.9"
      numOctaves="2"
      seed="1"
      stitchTiles="stitch"
      result="turbulence"
    ></feTurbulence>
    <feDisplacementMap
      in="SourceGraphic"
      in2="turbulence"
      scale="30"
      xChannelSelector="R"
      yChannelSelector="G"
    ></feDisplacementMap>
  </filter>
</svg>

<div className="wrapper">
  <div className="card-review"></div>
  <div className="title-r">
    Less
    <br />
    but better
  </div>
  <div className="desc-r">
    Everything you need,
    <br />
    nothing more.
  </div>
</div>

      
    </div>
  )
}
