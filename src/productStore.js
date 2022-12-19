// Coffee: price_1M955OIeyZFmSfZDU0OfBsEW
// Biscuit: price_1M957AIeyZFmSfZDGOO9M8fK
// Sunglasses: price_1M958TIeyZFmSfZDU7peQBvh
import Hoodie from "../src/Assets/images/Zip Up Drop Shoulder Drawstring Thermal Lined Hoodie.jpg";
import cap from "../src/Assets/images/Smile Cap - Yellow.png"
import Sunglasses from "../src/Assets/images/Vintage Rectangle Women Men Sunglasses Small Sun Glasses.jpg"


const productsArray = [
    {
        id: "price_1M955OIeyZFmSfZDU0OfBsEW",
        title: "Cap",
        image: cap,
        price: 4.99
    },
    {
        id: "price_1M957AIeyZFmSfZDGOO9M8fK",
        title: "Hoodie",
        image: Hoodie,
        price: 30.5
    },
    {
        id: "price_1M958TIeyZFmSfZDU7peQBvh",
        title: "Sunglasses",
        image: Sunglasses,
        price: 40
    }
]

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID:" + id);
        return undefined
    }

    return productData
}

export {productsArray, getProductData};