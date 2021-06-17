import './App.css';
import stars from './images/icon-star.svg';
import image1 from './images/image-anne.jpg';
import image2 from './images/image-colton.jpg';
import image3 from './images/image-irene.jpg';

function App() {
  return (
    <>
      <section>
        <div className='heroDesc'>
          <h1>10.000+ of our users love our products.</h1>
          <p> 
            We only provide great products combined with excellent customer service.
            See what our satisfied customers are saying about our services.
          </p>
        </div>
        
        <div className='reviewContainer'>
            <div className='starsContainer'>
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
            </div>
            <p><strong> Rated 5 Stars in Reviews</strong></p>
        </div>

        <div className='reviewContainer'>
            <div className='starsContainer'>
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
            </div>
            <p><strong> Rated 5 Stars in Report Guru </strong></p>
        </div>

        <div className='reviewContainer'>
            <div className='starsContainer'>
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
              <img src={stars} alt='stars' />
            </div>
            <p><strong> Rated 5 Stars in BestTech</strong></p>
        </div>
        
        <div className='cardContainer'>
          <div className='card'>
            <div className='profile'>
              <img src={image2} alt='colton' />
              <div className='name'>
                <h2>Colton Smith</h2>
                <p>Verified Buyer</p>
              </div>
              </div>
              <h2 className='reviewsCust'>    
                "We needed the same printed design as the one we had ordered a week prior.
                Not only did they find the original order, but we also received it in time.
                Excellent!"
              </h2>

          </div>

          <div className='card'>
            <div className='profile'>
                <img src={image3} alt='irene' />
                <div className='name'>
                  <h2>Irene Roberts </h2>
                  <p>Verified Buyer</p>
                </div>
              </div>
              <h2 className='reviewsCust'>    
                "Customer service is always excellent and very quick turn around. Completely
                delighted with the simplicity of the purchase and the speed of delivery."
              </h2>
          </div>

          <div className='card'>
            <div className='profile'>
              <img src={image1} alt='anne' />
              <div className='name'>
                <h2>Anne Wallace </h2>
                <p>Verified Buyer</p>
              </div>
              </div>
              <h2 className='reviewsCust'>    
                "Put an order with this company and can only praise them for the very high
                standard. Will definitely use them again and recommend them to everyone!"
              </h2>
            </div>
        </div>

      </section>
      <div className="attribution">
      <p>Challenge by</p>
      <a rel='noreferrer' href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="https://www.frontendmentor.io/profile/azzykesuma">Azzy Kesuma</a>.
    </div>
    </>
  );
}

export default App;
