import Product from "../product/Product";
import "./ProductList.css"
import { products } from "../../data";

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">
                    Aute sit laboris irure qui sunt exercitation eiusmod labore labore esse deserunt.
                </h1>
                <p className="pl-desc">
                    Magna anim nostrud in commodo deserunt ullamco. Ad quis non ullamco cillum ea Lorem reprehenderit non do nisi adipisicing aliquip enim. Anim velit irure voluptate eu aliqua id laborum id cupidatat esse cupidatat consequat. Voluptate ipsum ea id sint quis quis veniam est exercitation cupidatat aute in deserunt.

Elit veniam sint in excepteur ex cupidatat duis veniam excepteur laborum qui. Irure excepteur adipisicing consectetur laborum esse elit proident adipisicing qui laboris quis ullamco cupidatat. Non reprehenderit ipsum minim cillum nostrud et qui pariatur Lorem incididunt.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))} 
            </div>
        </div>
    )
}

export default ProductList;