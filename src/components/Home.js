import React from 'react';
import '../Style.css';
const Home = () => {
  return (
    <div>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center ">HOME</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2 mt-4">Look's like you're here</h3>

                  <p>the page you are looking for is the next one!</p>

                  <button className="link_404" style={{ border: 'none' }}>
                    you can't click here now!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
