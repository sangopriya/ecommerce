import Vegetables from '../../assets/vegetables.jpg';
import Fruits from '../../assets/fruits.jpg';
import Food from '../../assets/Food.jpg';
import Onion from '../../assets/onion.jpg';
import Tomato from '../../assets/tomato.jpg';
import Brinjal from '../../assets/brinjal.jpg';
import Mango from '../../assets/mango.jpg'
import Apple from '../../assets/apple.jpg'
import Orange from '../../assets/orange.jpg'
import Friedrice from '../../assets/friedrice.jpg'
import Chappathi from '../../assets/chappathi.jpg'
import Dhal from '../../assets/dhal.jpg'
export const categories = [
    {
        id: 1,
        img: Vegetables,
        category: 'Vegetables',
    },
    {
        id: 2,
        img: Fruits,
        category: 'Fruits',
    },
    {
        id: 3,
        img: Food,
        category: 'Food',
    },
];

export const items = [
    {
        categoryId: 2,
        items: [
            {
                id:21,
                name: 'Mango',
                img: Mango,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id:22,
                name: 'Apple',
                img: Apple,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id:23,
                name: 'Orange',
                img: Orange,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        ],
    },
    {
        categoryId: 1,
        items: [
            {
                id:11,
                name: 'Onion',
                img: Onion,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id:12,
                name: 'Tomato',
                img: Tomato,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id:13,
                name: 'Brinjal',
                img: Brinjal,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        ],
    },
    {
        categoryId: 3,
        items: [
            {
                id:31,
                name: 'Fried Rice',
                img: Friedrice,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id:32,
                name: 'Chappathi',
                img: Chappathi,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
            {
                id:33,
                name: 'Dhal',
                img: Dhal,
                quantity: '20',
                price: '40',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            },
        ],
    },
];
