import Css from "../titel/Titel.css";
import Img from "../titel/imeg1.webp";
const Titel = () => {
  return (
    <div className="contener-body">
      <div className="contener">
        <div className="box">
          <div className="titel">
            <h4>Organic Products and Food</h4>
            <h3>Quick Delivery to Your Home</h3>
            <p>
              There are many products you will find our shop, Choose your daily
              necessary product from our <br /> KachaBazar shop and get some
              special offer. See Our latest discounted products from here and
              get a special discount.
            </p>
            <button className="btn">Download App</button>
          </div>
          <img src={Img} alt="" className="imeg" />
        </div>
      </div>
      <div className="titels">
        <h3>Latest Discounted Products</h3>
        <p>
          See Our latest discounted products below. Choose your daily needs from <br />
          here and get a special discount with free shipping.
        </p>
      </div>
    </div>
  );
};

export default Titel;
