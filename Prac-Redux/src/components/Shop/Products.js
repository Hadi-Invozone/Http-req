import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy = [
  {
    id: 'p1',
    price: 6,
    title: 'my first book',
    description: 'this is the first book'
  },
  {
    id: 'p2',
    price: 5,
    title: 'my second book',
    description: 'this is the second book'
  }
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy.map((products) => 
          
         
        <ProductItem
         key={products.id}
          title={products.title}
          price={products.price}
          description={products.description}
        /> )}
      </ul>
    </section>
  );
};

export default Products;
