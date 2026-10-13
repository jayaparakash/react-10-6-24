import axios from "axios"
import { useEffect, useState } from "react"
// import Loader from "../../components/Loader/Loader"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

const ProductsData = () => {

  let [products, setProducts] = useState([])

  let [search, setSearch] = useState('')

  let [categoryList, setCategoryList] = useState([])

  let [category, setCategory] = useState('')

  let [page, setPage] = useState(1)

  let [btn, setBtn] = useState(0)

  let perPage = 10;


  useEffect(() => {

    async function cateApi() {
      let { data } = await axios.get('https://dummyjson.com/products/category-list')
      console.log(data);
      setCategoryList(data)

    }
    cateApi()
  }, [])


  useEffect(() => {

    async function apisData(params) {
      let api;

      if (category) {
        api = `https://dummyjson.com/products/category/${category}`
      } else if (search) {
        api = `https://dummyjson.com/products/search?q=${search}`
      } else {
        api = `https://dummyjson.com/products?limit=100`
      }

      let { data } = await axios(api)
      console.log(data.products);

      let productsData = data.products || []

      // console.log(productsData.length);
      setBtn(productsData.length)

      let pagination = productsData.slice((page - 1) * perPage, page * perPage)
      console.log(pagination);
      setProducts(pagination)
    }
    apisData()
  }, [category, search, page])


  let viewbtns = Math.ceil(btn / perPage)
  console.log(viewbtns);


  let cardvarient = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }


  return (
    <>

      <div className="container my-5 ">
        <div className="row gy-5 justify-content-around">
          {/* seach products */}
          <div className="col-5">
            <input type="text"
              className="form-control"
              value={search}

              onChange={(e) => {
                setCategory('')
                setPage(1)
                setSearch(e.target.value)
              }}
            />
          </div>
          <div className="col-5">
            {/* dropdown list */}
            <select name="" id=""
              className="form-control 
            text-center"
              onChange={(e) => {
                setCategory(e.target.value)
                setPage(1)
                setSearch('')
              }}
            >
              <option value="">ALL CATEGORIES</option>

              {
                categoryList.map((value, i) =>

                  <option value={value} key={i}>{value}</option>
                )
              }
            </select>
          </div>
        </div>


        <div className="row gy-5 my-5 justify-content-evenly">
          <AnimatePresence>
            {
              products.map((pro, i) =>
                <motion.div
                  class="card"
                  style={{ width: '20rem', height: '300px' }}
                  key={pro.id}
                  variants={cardvarient}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 2, delay: i * 0.5 }}
                >
                 <Link className="nav-link" to={`/products/${pro.id}`}>
                  <img src={pro.thumbnail} height={'150px'} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{pro.title}</h5>
                    <p class="card-text">{pro.description.length > 50 ? pro.description.slice(0, 50) + '....' : pro.description}</p>
                  </div>
                 </Link>
                </motion.div>
              )
            }
          </AnimatePresence>
        </div>
        <div className="row my-5 justify-content-center">
          {
            viewbtns > 0 &&
            Array.from({ length: viewbtns }, (_, i) => i + 1).map(btn =>
              <div className="col-1">
                <button className="btn btn-primary" onClick={() => setPage(btn)}>{btn}</button>
              </div>
            )
          }
        </div>


      </div>

    </>
  )
}

export default ProductsData