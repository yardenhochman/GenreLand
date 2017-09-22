import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

class About {

  render (){
    return(
      <div>
        <Header/>

        <div class="about">
          <h2>The SoundLand Team</h2>

            <div class="team">
              <h3>Gary Chin</h3>
              <img src=""/>
              <Link to={"https://github.com/Gnyc1001"}>Gary's GitHub Page</Link>
              <p>Born and raised in central NJ.  Graduated from Pace University with a BBA in Finance.</p>
            </div>

            <div class="team">
              <h3>Stephanie Fung</h3>
              <img src=""/>
              <Link to={"https://github.com/stephdfung"}>Stephanie's GitHub Page</Link>
              <p></p>
            </div>

            </div>
            <div class="team">
              <h3>Issac Grunwald</h3>
              <img src=""/>
              <Link to={"https://github.com/issacg1"}>Issac's GitHub Page</Link>
              <p></p>
            </div>

            <div class="team">
              <h3>Yarden Hochman</h3>
              <img src=""/>
              <Link to={"https://github.com/yardenhochman"}>Yarden's GitHub Page </Link>
              <p></p>
            </div>
        <Footer />
      </div>
    );
   }
}

export default About;