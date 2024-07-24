import { createContext, useState, ReactElement, useEffect } from 'react'

export type ProductType = {
    sku: string,
    name: string,
    price: number
}

const initState: ProductType[] = []


//may want to look at reactquery as an alternative to useEffect with more functionality. 

// const initState: ProductType[] = [
//     {
//         "sku": "item0001",
//         "name": "Widget",
//         "price": 9.99
//     },
//     {
//         "sku": "item0002",
//         "name": "Premium Widget",
//         "price": 19.99
//     },
//     {
//         "sku": "item0003",
//         "name": "Deluxe Widget",
//         "price": 29.99
//     }
// ]

// if you were to deploy this online then probably you would want to use this static array and not the json / fetch

export type UseProductsContextType = { products: ProductType[]}

const initContextState: UseProductsContextType = { products: [] }

const ProductsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<ProductType[]>(initState)

    useEffect(() => {
        const fetchProducts = async (): Promise<ProductType[]> => {
            const data = await fetch('http://localhost:3500/products').then(res => {
                return res.json()
            }).catch(err => {
                if (err instanceof Error) console.log(err.message)
            }) // you could do more with the error message (eg display the error like on other projects)
                return data
        }

        fetchProducts().then(products => setProducts(products))
    }, [])
    // empty dependency so the products are only loaded on the first loading 
    // function called on load and initial state is set

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsContext

// initState is passed in to useState using the lexical scope (they are in the same file). No need to pull it in as a parameter and explicitly define it. 

