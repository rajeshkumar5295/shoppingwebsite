import axios from "axios";

export async function productsData(){
    const products=await axios.get(
        "https://fakestoreapi.com/products"
        

        // " https://api.escuelajs.co/api/v1/products"

        

        // "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"

    );
    return products;
}