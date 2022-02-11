import {CLEAR_FILTERS,
    FILTER_PRODUCTS,
    LOAD_PRODUCTS,
    SET_GRIDVIEW,
    SET_LISTVIEW,
    SORT_PRODUCTS,
    UPDATE_FILTERS,
UPDATE_SORT}
 from '../../actions'

 const FilterReducer=(state,action)=>{
    if (action.type === UPDATE_FILTERS) {
        const { name, value } = action.payload
        return { ...state, filters: { ...state.filters, [name]: value } }
      }
    if(action.type===LOAD_PRODUCTS){
        let maxPrice = action.payload.map((p) => p.price)
             maxPrice = Math.max(...maxPrice)
        return {...state,
            filtered_products:[...action.payload],
            all_products:[...action.payload],
            filters:
            { ...state.filters, max_price: maxPrice,
                price: maxPrice },
        }
    }
    if(action.type===UPDATE_SORT){
        return {...state,sort:action.payload}
    }
    if(action.type === SORT_PRODUCTS){
        const { sort, filtered_products } = state
        let tempProducts=filtered_products
        if(sort === 'price-lowest'){
            tempProducts=tempProducts.sort((a,b)=>{
                return a.price - b.price
            })
        }if(sort==='price-highest'){
            tempProducts=tempProducts.sort((a,b)=>{
                return b.price - a.price
            })
        }
            if (sort === 'name-a') {
                tempProducts = tempProducts.sort((a, b) => {
                  return a.name.localeCompare(b.name)
                })
            }
            if (sort === 'name-z') {
                tempProducts = tempProducts.sort((a, b) => {
                  return b.name.localeCompare(a.name)
                })
            }

        return { ...state, filtered_products: tempProducts }
    }
    if(action.type ===SET_GRIDVIEW){
        return {...state,grid_view:true}
    }
    if(action.type===SET_LISTVIEW){
        return {...state,grid_view:false}
    }
    if(action.type === FILTER_PRODUCTS){
        const {all_products}=state;
        const { text, category, company, color, price, shipping } = state.filters;
        let tempProducts = [...all_products]
         // filtering
            // text
            if(text){
                tempProducts=tempProducts.filter((product)=>{
                    return product.name.toLowerCase().startsWith(text)
                })
            }

            if(category !== 'all'){
                tempProducts=tempProducts.filter((product)=>{
                    return product.category ===category
                })
            }
            if(company !== 'all'){
                tempProducts=tempProducts.filter((product)=> product.company === company)
            }
            
            if(color !=='all'){
                tempProducts=tempProducts.filter((product)=> product.colors.find((c)=> c === color))
            }
            
                tempProducts=tempProducts.filter((product)=> product.price<=price)

                if(shipping){
                    tempProducts=tempProducts.filter((product)=> product.shipping)
                }
            

            return { ...state, filtered_products: tempProducts }
    }
    if(action.type===CLEAR_FILTERS){
        return { ...state,
            filters: {
              ...state.filters,
              text: '',
              company: 'all',
              category: 'all',
              color: 'all',
              price: state.filters.max_price,
              shipping: false,
            },}
    }
 }

 export default FilterReducer