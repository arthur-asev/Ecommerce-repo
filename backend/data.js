import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            name: 'Arthur',
            email: 'arthurginho02@gmail.com',
            password: bcrypt.hashSync('arthur506'),
            isAdmin: true,
        },
        {
            name: 'zezin',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },
    ],
    products: [
        {

            name: 'Camisa Social Roxa Listrada',
            slug: 'camisa-social-roxa-listrada',
            category: 'Camisa',
            image: '/images/p1.jpg', // 679px × 829px
            price: 120,
            countInStock: 10,
            brand: 'Social',
            rating: 4.5,
            numReviews: 10,
            description: 'Produto 100% algodão',
        },
        {

            name: 'Camisa Social Rosa Listrada',
            slug: 'camisa-social-rosa-listrada',
            category: 'Camisa',
            image: '/images/p2.jpg',
            price: 250,
            countInStock: 20,
            brand: 'Social',
            rating: 4.0,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },

        {

            name: 'Camisa Adidas Branca',
            slug: 'adidas-branca',
            category: 'Camisa',
            image: '/images/adidas-branca.jpg',
            price: 100,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },

        {

            name: 'Camisa Gucci Preta',
            slug: 'gucci-preta',
            category: 'Camisa',
            image: '/images/gucci-preta.jpg',
            price: 1000,
            countInStock: 20,
            brand: 'Gucci',
            rating: 5.0,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },

        {

            name: 'Camisa Hugo Boss Azul',
            slug: 'hugo-boss-azul',
            category: 'Camisa',
            image: '/images/hugo-boss-azul.jpg',
            price: 400,
            countInStock: 20,
            brand: 'Hugo boss',
            rating: 5.0,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },

        {

            name: 'Camisa Hugo Boss Preta',
            slug: 'hugo-boss-preta',
            category: 'Camisa',
            image: '/images/hugo-boss-preta.jpg',
            price: 400,
            countInStock: 20,
            brand: 'Hugo boss',
            rating: 5.0,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },

        {

            name: 'Camisa Versace Branca',
            slug: 'versace-branca',
            category: 'Camisa',
            image: '/images/versace-branca.jpg',
            price: 1000,
            countInStock: 20,
            brand: 'Versace',
            rating: 5.0,
            numReviews: 10,
            description: 'Produto de alta qualidade',
        },




        {

            name: 'Camisa Social Azul Quadriculada',
            slug: 'camisa-social-azul-quadriculada',
            category: 'Camisa',
            image: '/images/p3.jpg',
            price: 25,
            countInStock: 15,
            brand: 'Social',
            rating: 4.5,
            numReviews: 14,
            description: 'Produto 100% algodão',
        },
        {

            name: 'Calça Social Berge ',
            slug: 'calca-social-berge',
            category: 'Calça',
            image: '/images/p4.jpg',
            price: 65,
            countInStock: 0,
            brand: 'Social',
            rating: 4.5,
            numReviews: 10,
            description: 'Produto de Otima qualidade',
        },
    ],
};
export default data;