// import data from '../data';
import axios from 'axios';
import { useEffect, useReducer } from 'react';
import Col from 'react-bootstrap/Col';
import logger from 'use-reducer-logger';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import Carousel from 'react-bootstrap/Carousel'

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, carrousels: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};
function CarrouselImg() {


    const [{ loading, error, carrousels,}, dispatch] = useReducer(logger(reducer), {
        carrousels:[],
        loading: true,
        error: '',
    });

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/carrousels');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }

        };
        fetchData();
    }, []);



    return (
        <div>
            {loading ? (
                <LoadingBox />
            ) : error ? (
                <MessageBox variant="danger">{error}</MessageBox>
            ) : (
                <Carousel className='shadow p-1 mb-5 bg-white rounded'>
                    {carrousels.map((carrousel) => (
                        <Carousel.Item key={carrousel._id} >
                            <Col>
                                <img src={carrousel.image}  height={800} className="d-block w-100 " alt="imagem não disponível" />
                            </Col>
                            <Carousel.Caption>
                                <h3>Veja abaixo os Produtos em Destaque</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>

            )} 
        </div >
    );
}
export default CarrouselImg;