import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import NewsItem from "../NewsItem"

const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <div className="row">
        <section id="home-banner">
          <div className="section-content">
            <h3 className="margin-top--none">Main Content</h3>
            <p>Hide at bottom of staircase to trip human. Tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad get scared by doggo also cucumerro or eats owners hair then claws head for fight own tail. Need to check on human, have not seen in an hour might be dead oh look, human is alive, hiss at human, feed me rub against owner because nose is wet. </p>
          </div>
        </section>
      </div>
      <div className="row">
        <section className="column--left">
          <div className="section-content">
            <h3 className="margin-top--none">About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              egestas nisl at efficitur vulputate. Aenean ullamcorper, nunc sed
              ultrices molestie, ipsum quam mattis diam, quis fermentum felis
              massa non leo. Vestibulum non arcu vitae urna volutpat
              ullamcorper. Quisque tincidunt lacus nec lectus consectetur
              iaculis. Suspendisse ac magna a nulla feugiat luctus vel nec
              neque.
            </p>
            <p>
              <Link to="/">Sign Up Here</Link>
            </p>
          </div>
        </section>
        <section className="column--right">
          <div className="section-content">
            <h3 className="margin-top--none">Space News</h3>
            <NewsItem
              externalLink
              linkText="How NASA's Next Mars Rover Will Hunt for Alien Life"
              description="The strategy involves matching geochemistry with structure."
              link="https://www.space.com/mars-2020-rover-alien-life-hunt.html"
            />
            <NewsItem
              externalLink
              linkText="THIS DECADE IN ELON"
              description="SpaceX, Tesla, Neuralink, the Boring Company... and, of course, that Twitter account"
              link="https://www.theverge.com/2019/12/12/21011317/elon-musk-tesla-spacex-solarcity-neuralink-boring-company-twitter-decade"
            />
            <NewsItem
              externalLink
              linkText="Jeff Bezos' Blue Origin has launched and landed a single rocket for the sixth time"
              description="Amazon's CEO, Elon Musk and Richard Branson all want to send the public to space. Bezos took another step toward that goal Wednesday."
              link="https://www.cnet.com/how-to/how-to-watch-jeff-bezos-next-blue-origin-launch-amp-up-the-tycoon-space-race/"
            />
            <NewsItem
              externalLink
              linkText="NASA Awards Launch Services Contract for Environmental Satellite Mission"
              description="For more information about NASA programs and missions, visit nasa.gov"
              link="https://www.nasa.gov/press-release/nasa-awards-launch-services-contract-for-environmental-satellite-mission"
            />
            <NewsItem
              linkText="Apply for space travel!"
              description="This form helps you gain access to the final frontier."
              link="/"
            />
            <NewsItem
              externalLink
              linkText="Senate sends massive defense bill for Trump to sign, creating Space Force"
              description=""
              link="https://www.reuters.com/article/us-usa-defense-congress/senate-sends-massive-defense-bill-for-trump-to-sign-creating-space-force-idUSKBN1YL24C"
            />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
