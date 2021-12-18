import './App.css';
import cat from './cat.png';
import catFood from './catFood.png';
import kitty from './cat1.png';

function App() {
  return (
    <div class="d-flex row">
      <nav class="navbar navbar-light bg-light col-12">
        <h2>PUBLIC GOODS</h2>
        <p>Cart 0</p>
      </nav>
      <img src={cat} alt="cat"></img>
      <div>
          <h3>Treat your pet(and you).<br/> It's on us!</h3>
          <p>Treat your pet to a healthy treat for free to kick off your Public Goods trial membership.</p><br/>
          <strong>See what it's like to be a Public Goods member.</strong><br/>
          <ul className="intro">
            <li>Included in your bundle is a free 2-week membership that gives you unlimited access to our entire collection of sustainable essentials.</li>
            <li>Take a load off. We make it easy for you to make better choices. Always included: eco-friendly products that you can trust.</li>
          </ul>
        </div>
        <img src={catFood} alt="catFood" className="mt-5"></img>
        <img src={kitty} alt="kitty"></img>
        <div>
          <h5>PET-APPROVED</h5>
          <strong>It feels good to be a member.</strong><br/>
          <p>After your free trail, become a full-time member with benefits for $59 per year.</p>
          <ul className="ul-trial">
            <li>Cancel anytime during your free trial.</li>
            <li>Free shipping on orders over $45.</li>
            <li>Direct-to-consumer prices on hundreds of premium products.</li>
          </ul>
        </div>
    </div>

    
  );
}

export default App;
