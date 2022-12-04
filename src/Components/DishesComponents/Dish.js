const Dish = ({dish}) =>{
    return (<div>
        <img src={`./${dish.img}.jpg`} alt="food"/>
        <h2>{dish.name}</h2>
        <p>$ {dish.price}</p>
        {/* TO FIX LATER*/}
        <button>HOW MANY PORTIONS??????</button>
        <button>Add to cart</button>
    </div>)
}
export default Dish;
