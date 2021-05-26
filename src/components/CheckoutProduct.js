import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
}) {
    const dispatch = useDispatch();

    const addItmeToBasket = () => {
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };

        //push itme to basket
        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {

        // remove items from basket
        dispatch(removeFromBasket({id}))
    }

    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit="contain"/>

            {/* Middle */}
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <StarIcon key ={i} className="h-5 text-yellow-500" />
                        ))
                    }
                </div>
                <p className="text-xs mt-2 mb-2 line-clamp-3">{description}</p>
                <Currency quantity={price*60} currency="INR" />

                {hasPrime && (
                    <dir>
                        <img 
                            loading="lazy" 
                            className="w-12" 
                            src="https://links.papareact.com/fdw" 
                            alt="" 
                        />
                        <p className="">Free Next-Day Delivery</p>
                    </dir>
                )} 
            </div>

            {/* right add and remove */}
            <div className="flex flex-col space-y-2 my auto justify-self-end">
                <button className="button" onClick={addItmeToBasket}>Add to Basket</button>
                <button className="button" onClick={removeItemFromBasket} >Remove from Basket</button>
            </div>
        
        </div>
    )
}

export default CheckoutProduct;
