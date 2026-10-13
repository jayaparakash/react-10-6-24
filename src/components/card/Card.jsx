export const Card = ({id,img,desc,title,price})=>{
    return(
        <>
       <div className="col-4">
        <div className="card" style={{width: '18rem'}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <mark>Price{price}</mark>
    <a href="#" className="btn btn-primary">AddProduct</a>
  </div>
</div>
       </div>
        </>
    )
}