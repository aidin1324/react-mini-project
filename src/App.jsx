import { ProductCard } from './components/ProductCard';

const defaultProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: 9.99,
    img: 'https://iledi.ru/wp-content/uploads/2023/12/modnye-veshchi-2-1.webp',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 19.99,
    img: 'https://static.alltime.ru/obj/article/image-blog/Povsednevnyy_muzhskoy_stil/Povsednevnyy_muzhskoy_stil_1.jpg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 29.99,
    img: 'https://cdn.vogue.ua/i/image_720x/uploads/article-inline/f62/2ea/43e/00011_holzweiler_copenhagen_spring_22_credit_calle_hut_61d443e2eaf62.jpeg.webp',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 39.99,
    img: 'https://static.insales-cdn.com/files/1/6636/31373804/original/mceu_77621301821693403382302-1693403382318.jpg',
  },
]

function App() {
  const [products, setProducts] = useState([defaultProducts]);
  return (
    <div>
      <h1>My first Almir!</h1>
      {
        products.map(product => (
          <ProductCard
            data={product}
          />
        ))
      }
    </div>
  );
}

export default App;
