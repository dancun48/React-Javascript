import './index.css'

const Welcome = () => {
  return <h2>Hello, welcome to my website</h2>
}
const Input = () => {
  return (<>
            <div><input placeholder="Email" /></div>
            <div><input placeholder="Password" /></div>
        </>);
}
const ProductDetails = ({ title, price, discountPrice, imageSrc }) => {

  if (discountPrice !== '0') {
    return (<div className='product'>
              <div><div><img src={imageSrc} width="80px" /></div></div>
              <div>Item: {title}</div>
              <del><div>Price: $ {price}</div></del>
              <div>Discounted price: $ {discountPrice}</div>
              <div><button>Add to Cart</button></div>
            </div>)
  }
  return (
    <div className='container'>
        <div className='product'>
            <div><img src={imageSrc} width="80px" alt="product-image" /></div>
            <div>Item: {title}</div>
            <div>Price: $ {price}</div>
            <div>Discounted price: $ {discountPrice}</div>
            <div><button>Add to Cart</button></div>
        </div>
      </div>
        );
}
const Button = (props) => {
  const { message } = props;
  return (<button>{message}</button>);
}
function App() {

  return (
    <>
      <Welcome />
      <Input />
      <Button message='Login' />
      <Button message='Sign Up' />
      <div className='container'>
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
        <ProductDetails imageSrc="./src/assets/images/ssocks.jpg" title="Cotton socks" price="10.99" discountPrice="0" />
        <ProductDetails imageSrc="./src/assets/images/tennis.jpg" title="Tennis balls" price="54.99" discountPrice="20.33" />
        <ProductDetails imageSrc="./src/assets/images/tshirt.png" title="Plain T-shirt" price="3.99" discountPrice="1.00" />
      </div>
    </>
  )
}

export default App
