import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Product(props) {
    const { product } = props;

    // const { state, dispatch: ctxDispatch } = useContext(Store);

    // const { cart: { cartItems }, } = state;

    // const addToCartHandler = async (item) => {
    //     const existItem = cartItems.find((x) => x._id === product._id);
    //     const quantity = existItem ? existItem.quantity + 1 : 1;
    //     const { data } = await axios.get(`/api/products/${item._id}`);
    //     if (data.countInStock < quantity) {
    //         window.alert('Desculpe , Produto fora de estoque');
    //         return;
    //     }
    //     ctxDispatch({
    //         type: 'CART_ADD_ITEM',
    //         payload: { ...item, quantity },
    //     });
    // };

    return (
        <Card>
            <Link to={`/product/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name} />
            </Link>
            <Card.Body className='card-botton-space'>
                <Link className='font-quatrocentos' to={`/product/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>

                <Rating rating={product.rating} numReviews={product.numReviews} />

                <Card.Text>R$: {product.price}</Card.Text>

                {/* {product.countInStock === 0 ? (
                    <Button variant="light" disabled>
                        Fora de estoque.
                    </Button>
                ) : (
                    <Button className='btn-card' onClick={() => addToCartHandler(product)}>Adicionar ao carrinho</Button>
                )} */}
            </Card.Body>
        </Card>
    );
}
export default Product;