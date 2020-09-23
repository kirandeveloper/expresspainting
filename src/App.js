import React from 'react';
import './App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css';   */

class App extends React.Component {
  constructor(props) {
     super(props);
   
     this.state = {
        headersafer: "SAFER",
        headerfaster: "FASTER",
        headercleaner: "CLEANER",
        zerocontact: "Zero contact service. Painter trained and certified on Safety &amp; Hygiene",
        paintercont:"Painter use Health & Safety Kit (mask,gloves,cap and sanitisers)",
        dailydisinf:"Daily disinfection of the tools & regular touch surface",
        dailytemp:"Daily temperature & symptoms check on Express Painting App",
        sightdeliv:"On-site delivery of sanitised products"

     }

     const { Component } = React;
     // const { render } = ReactDOM;

      const carouselContainer = document.querySelector(".carousel-container");

      // Data for carousel
      const carouselSlidesData = [
        {
          content:
            "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
          author: "Bane",
          source: "facebook"
        }, {
          content:
            "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
          author: "Ra's Al Ghul",
          source: "Snapchat"
        }, {
          content:
            "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
          author: "Joker",
          source: "facebook"
        }, {
          content:
            "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
          author: "Bruce Wayne",
          source: "facebook"
        }, {
          content:
            "But it's not who you are underneath... it's what you do that defines you.",
          author: "Rachel Dawes",
          source: "twitter"
        }, {
          content:
            "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
          author: "John Blake",
          source: "Google+"
        }, {
          content:
            "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
          author: "Alfred Pennyworth",
          source: "twitter"
        }
      ];


  }


  

  render() {
  
  return (
    <div className="App">
        <header className="App-header">
          <img src="banner1.png" className="banner" alt="banner" />        
        </header>
        <section id="letconnect">
            <section id="letconnectinner">
                <h3>
                  Lets Connect
                </h3>
                <div>
                    <input type = "text" className="textinput" placeholder="Your Name"  />                    
                </div>
                <div>
                    <input type = "text" className="textinput"  placeholder="Mobile Number"  />                    
                </div>
                <div>
                    <input type = "text" className="textinput"  placeholder="Email Address"  />                    
                </div>
                <div>
                    <input type = "text"  className="textinput" placeholder="City"  />                    
                </div>
                <div>
                    <input type = "text" className="textinput"  placeholder="Choose Your Language"  />                    
                </div>
                <div>
                    <input type = "text"  className="textinput" placeholder="Message"  />                    
                </div>
                <div className="terms">
                  <input type="checkbox" /> I agree to the terms and conditions
                </div>
                <div>
                  <center><button>SUBMIT</button></center>
                </div>
            </section>
        </section>
        <h3 className="header1">
            What makes Express Painting the best-in-class painting services
        </h3>
        <section id="secvideo" className="container6">
            <article className="col5">
              <p>During these times of caution, <a href="#">Berger Express Painting</a> assures you of zero contact, safe &amp; seamless <a href="#">home wall painting</a> experience.</p>
              <p>Berger Paints XP Customer Executives and Service Partners are equipped with ‘XP Health &amp; Safety Kit’ comprising of masks, gloves, caps, digital thermometer, hand sanitizer &amp; disinfectant which will be used during the painting process to ensure safety and hygiene.</p>
              <p>Express Painting pioneered home painting services by being the first painting service in India to introduce consumers to an all-round service experience consisting of at-home consultancy, site recce and estimation, trained painters using automatic tools, supervision and a dust-free, faster and better painting job.</p>
              <p>With the introduction of the Express Painting App, we have digitised our services, making it zero contact, paperless and cashless for added safety.</p>
              <p>Also you can choose paint color and wall designs with Berger Paint Catalogue on Express Painting App. It has myriad of shades and color combinations to
              transform both your home interior &amp; exterior into your desired home. You can always count on us to serve you happily!</p>
            </article>
            <article className="col5" id="video1">
              <video src="" controls="controls" />
            </article>
        </section>
        <section className="sectionbg">
          <h3 className="header7">
              What makes Express Painting the best-in-class painting services
          </h3>
          <section className="container7">
             <section className="boxmain">
                <article className="boxpink">
                      <h3>{this.state.headersafer}</h3>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-hand.png" className="banner" alt="hand" /> 
                        </div>
                        <div className="col60">
                            <p  className="mt20">{this.state.zerocontact}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-paint.png" className="banner" alt="paint" /> 
                        </div>
                        <div className="col60">
                            <p className="mt20">{this.state.paintercont}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-daily.png" className="banner" alt="daily" /> 
                        </div>
                        <div className="col60">
                            <p className="mt20">{this.state.dailydisinf}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-dailytemp.png" className="banner" alt="dailytemp" /> 
                        </div>
                        <div className="col60">
                          <p className="mt30">{this.state.dailytemp}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-onsite.png" className="banner" alt="onsite" /> 
                        </div>
                        <div className="col60">
                            <p  className="mt30">{this.state.sightdeliv}</p>
                        </div>
                      </div>
                      
                </article>
                <div className="row">
                   <img src="boxpinkbtm.png" className="btmimg1" />
                 </div>
             </section>
             <section className="boxmain">
                <article className="boxyellow">
                  <h3>{this.state.headerfaster}</h3>
                  <div className="row">
                        <div className="col25">
                            <img src="icon-trainedpaint.png" className="banner" alt="hand" /> 
                        </div>
                        <div className="col60">
                            <p  className="mt20">{this.state.zerocontact}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-mecht.png" className="banner" alt="paint" /> 
                        </div>
                        <div className="col60">
                            <p className="mt20">{this.state.paintercont}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-mobxp.png" className="banner" alt="daily" /> 
                        </div>
                        <div className="col60">
                            <p className="mt20">{this.state.dailydisinf}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-sitesup.png" className="banner" alt="dailytemp" /> 
                        </div>
                        <div className="col60">
                          <p className="mt30">{this.state.dailytemp}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-fastrep.png" className="banner" alt="onsite" /> 
                        </div>
                        <div className="col60">
                            <p  className="mt30">{this.state.sightdeliv}</p>
                        </div>
                      </div>
                  
                </article>
               <div>
                 <img src="boxyellowbtm.png" className="btmimg2" />
               </div>
             </section>
             <section className="boxmain">
                <article className="boxpurple">
                  <h3>{this.state.headercleaner}</h3>
                  <div className="row">
                        <div className="col25">
                            <img src="icon-furn.png" className="banner" alt="hand" /> 
                        </div>
                        <div className="col60">
                            <p  className="mt20">{this.state.zerocontact}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-dustf.png" className="banner" alt="paint" /> 
                        </div>
                        <div className="col60">
                            <p className="mt20">{this.state.paintercont}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-disinf.png" className="banner" alt="daily" /> 
                        </div>
                        <div className="col60">
                            <p className="mt20">{this.state.dailydisinf}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-floor.png" className="banner" alt="dailytemp" /> 
                        </div>
                        <div className="col60">
                          <p className="mt30">{this.state.dailytemp}</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col25">
                            <img src="icon-postpa.png" className="banner" alt="onsite" /> 
                        </div>
                        <div className="col60">
                            <p  className="mt30">{this.state.sightdeliv}</p>
                        </div>
                      </div>
                  
                </article>
                 <div>
                    <img src="boxpurplebtm.png" className="btmimg2" />
                  </div>
             </section>
          </section>
        </section>

        <section id="sectionpurple">
          <h2>Express Painting App</h2>
          <p>
            With the introduction of the Express Painting App, you can enjoy zero contact services!
          </p>
          <h3>The power lies in yours hands.</h3>
          <section className="row">
              <article className="col40">
                   <p><img src="mobile1.png" /></p> 
                   <p><button>Download Now</button></p>
              </article>
              <article className="col60">
                 <article className="col40 epinner mt30">
                        <ul>
                          <li>
                            <aside className="epinnerhead">Monitor Painter's Health</aside>
                            <aside className="epinnercont">Track health status painter/executive</aside>
                          </li>
                        </ul>
                 </article>
                 <article className="col40 epinner mt30">
                        <ul>
                          <li>
                            <aside className="epinnerhead">On-Site Delivery</aside>
                            <aside className="epinnercont">Sanitised products delivered safely to your doorstep</aside>
                          </li>
                        </ul>
                 </article>
                 <article className="col40 epinner mt30">
                        <ul>
                          <li>
                            <aside className="epinnerhead">Digital Color Scheme</aside>
                            <aside className="epinnercont">Get remote Colour Consultancy and color previews.</aside>
                          </li>
                        </ul>
                 </article>
                 <article className="col40 epinner mt30">
                        <ul>
                          <li>
                            <aside className="epinnerhead">Paperless Services</aside>
                            <aside className="epinnercont">Get estimates and invoices digitally to reduce contact</aside>
                          </li>
                        </ul>
                 </article>
                 <article className="col40 epinner mt30">
                        <ul>
                          <li>
                            <aside className="epinnerhead">Cashless Services</aside>
                            <aside className="epinnercont">Pay digitally to minimise <br/>contact</aside>
                          </li>
                        </ul>
                 </article>
                 <article className="col40 epinner mt30">
                        <ul>
                          <li>
                            <aside className="epinnerhead">Real-Time Project Tracking</aside>
                            <aside className="epinnercont">Track current project progress remotely.</aside>
                          </li>
                        </ul>
                 </article>
                 <article className="col40 epinner mt30">
                        <ul className="noborderbm">
                          <li>
                            <aside className="epinnerhead">Digital Reports</aside>
                            <aside className="epinnercont">View digital records of all projects and transactions</aside>
                          </li>
                        </ul>
                 </article>
                 <article className="col40 epinner mt30">
                        <ul className="noborderbm">
                          <li>
                            <aside className="epinnerhead">Digital Helpdesk</aside>
                            <aside className="epinnercont">Address your concerns<br/> digitally</aside>
                          </li>
                        </ul>
                 </article>
              </article>
          </section>
        </section>


        <section id="xpadv">
            <h2>XP Advantage</h2>
            <div id="xpadvcontainer">
              <article className="xpadvbox">
                  <h3>Express Painting App</h3>
                  <p className="xpadvimg">
                    <img src="epaint01.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Zero Contact paperless &amp; cashless to ensure social distancing</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Safety Certified Painters</h3>
                  <p className="xpadvimg">
                    <img src="epaint02.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Painters with certified green status on Aarogya Setu App assigned to customer</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Mandatory Health &amp; <br/> Safety Protocols</h3>
                  <p className="xpadvimg1">
                    <img src="epaint03.png" alt="Express Painting App" className="img100" />
                  </p>
                  <p>
                    <center>Certified Painters follows rigorous hygiene protocols</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Mechanised &amp; Disinfected Tools</h3>
                  <p className="xpadvimg">
                    <img src="epaint04.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Time saving disinfected tool for faster painting</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Health-Friendly Products</h3>
                  <p className="xpadvimg">
                    <img src="epaint05.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Silk Breathe Easy &amp; Easy Clean Fresh for healthy interiors</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Accurate Quotation</h3>
                  <p className="xpadvimg">
                    <img src="epaint06.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Customised painting solution with accurate measurement</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Furniture Covering</h3>
                  <p className="xpadvimg">
                    <img src="epaint07.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Furniture &amp; Floor covers to protect from dust &amp; paint drops</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Waterproofing Solutions</h3>
                  <p className="xpadvimg">
                    <img src="epaint08.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Home Sheid expert provide accurate diagnosis &amp; apporopriate treatment</center>
                  </p>
              </article>

              <article className="xpadvbox">
                  <h3>Information at your Fingertips</h3>
                  <p className="xpadvimg">
                    <img src="epaint09.png" alt="Express Painting App" />
                  </p>
                  <p>
                    <center>Create enquire ,browse products &amp; explore color scheme</center>
                  </p>
              </article>

            </div>
            
            
        </section>
        <section className="row" id="eptools">
            <h2>Express Painting tools</h2>
        </section>
        <section id="testimonial">
          <h3>Testimonials</h3>
        </section>
        <footer>
          @ 2020 Beger Points India - All Rights Reserved | <a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Disclamer</a>
        </footer>
    </div>
    
  );
}
}
export default App;
