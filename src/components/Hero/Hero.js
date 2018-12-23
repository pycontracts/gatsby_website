import React from "react";
import PropTypes from "prop-types";

import { FaArrowDown } from "react-icons/fa/";

const Hero = props => {
  const { scrollToContent, backgrounds, theme } = props;

  return (
    <React.Fragment>
      <section className="hero">
        <h1>
          Let's run smart-contracts<br/>on the <strong>Bitcoin</strong> blockchain
        </h1>
        <img src="screenshot.png" />
        <p className="whitelabels">
        going live soon | scroll down for more | <a href='/sneekpeek'>check out the sneek peek video</a>
        </p>
      </section>
      <section className="featured-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="single-feature">
                <div className="icon">
                  <span className="fab fa-btc"></span>
                </div>
                <div className="desc text-center">
                  <h6 className="title text-uppercase">Runs on the Bitcoin Blockchain</h6>
                  <p>There are roughtly 10000 blockchains out there, and most of them are either abandoned or their security has more holes in it than swiss cheese. We, therefore, did not reinvent the wheel. Why not make use of an already adopted, highly tested and byzantinely stable blockchain? That is what we did. We have build an entire contract ecosystem on top of the original Bitcoin blockchain. The blockchain is not managed by us and the likelyhood of attacks, that are typically targeted at new chains with low adoption such as the fifty-percent attack, is negligible. BitcoinPy is no hard- or softfork, and therefore 100% compatible with other non-BitcoinPy nodes.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <div className="icon">
                  <span className="fab fa-python"></span>
                </div>
                <div className="desc text-center">
                  <h6 className="title text-uppercase">Easy Contracts in Python</h6>
                  <p>PyContracts are written in Python and there is no need to master yet another contract-specific language first. This not only allows users to get started fast as they do not have to learn an entirely new programming language, but it also reduces the chance for errors and programming mistakes. Contract developers do not need to bother about complex toolchains, obscure NodeJS based deployment hassles, and other emotionally depressing sensations any longer. Just code your smart contract using your favourite editor and a Python shell. And if you are comfortable with the result, just upload it to the blockchain at the click of a button. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <div className="icon">
                  <span className="fas fa-gas-pump"></span>
                </div>
                <div className="desc text-center">
                  <h6 className="title text-uppercase">What Fuels the Contracts</h6>
                  <p>While traditional BTC, for obvious reasons, are required to pay for the transaction fees on the Bitcoin blockchain, GAS is used by those who call a contract to pay for the CPU time a contract needs to execute. You can see GAS as the fuel for the Python VM. As a rule of thumb: the more complex a contract is, the more resources it eats up at the nodes, the more GAS the execution costs. The reason why we decided to add GAS and not just rely on BTC is to prevent contracts from becoming economocally useless due to a too high Bitcoin price. Sending GAS and creating contracts, regardless of their size, does not cost anything except the BTC transaction fee.</p>
                </div>
              </div>
            </div>
             <div className="col-md-4">
              <div className="single-feature">
                <div className="icon">
                  <span className="far fa-grin-wink"></span>
                </div>
                <div className="desc text-center">
                  <h6 className="title text-uppercase">No ICO, No Premine, No Baloney</h6>
                  <p>We have seen numerous projects getting funded by quadrillions of dollars with either no product, a questionably mediocre product or a product that we could code during one day on a netbook in the trailer park. We reject this. However, since many actors are still looking for the ultimate killer application for Bitcoin and we know how to do it, we decided to create a whole contract-ecosystem on the original Bitcoin blockchain. No ICO, no premine, no bonuses, no signature campaigns, no baloney. BitcoinPy launches with no GAS in circulation at all. If you want it, you have to mine it yourself.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <div className="icon">
                  <span className="fas fa-shield-alt"></span>
                </div>
                <div className="desc text-center">
                  <h6 className="title text-uppercase">Secure Python VM</h6>
                  <p>All Bitcoin Core clients with the BitcoinPy extension have an integrated Python VM, which is highly modified in order to ensure integrity and correctness of the results. Furthermore, it not only limits the CPU instructions depending on how much GAS was supplied, but also provides a nice interface for developers to access the blockchain's metadata such as the current block, the sender and amount, and others directly from within contract. Also, the VM supports most of the typical contract abortion methods, such as reverting and suiciding, that we are already used-to from Ethereum.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="single-feature">
                <div className="icon">
                  <span className="fab fa-github-square"></span>
                </div>
                <div className="desc text-center">
                  <h6 className="title text-uppercase">Open Source on Github</h6>
                  <p>BitcoinPy is open source and hosted on Github. We are a non-profit group of developers, the kind you would find at your local CCC conference, trying to move Blockchain forward to the next level. We believe in free software, we dislike companies, and we think that most code, that paid developers crank out in the blockchain sphere, is hideous at best. But if you are one of those guys who loves Mate, trolls slashdot during the day and altruistically fixes bugs in kernel drivers at night, we would love to see you play around with BitcoinPy. Any pull request or bug report is hightly appreciated.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     

      {/* --- STYLES --- */}
      <style jsx>{`

        .gap {
          padding-top: 30px;
          width: 70%;
        }
.featured-area {
  background: #fff;
  padding: 30px 0 150px 0;
}
.gray-area {
  background: #e8e8e8;
  padding-top: 30px;
  padding-bottom: 30px;
  color: #696969 !important;
  text-align: center;

}
.container h1{
  padding-top: 30px;
  max-width: 100%;
  color: #dark-gray;
  text-align: center;
}

.gray-area h1{
  font-size: 2.5em;
  color: #696969;
  text-align: center;
}
.gray-area h2{
  font-size: 1.5em;
  color: #696969;
}
.massive img{
  height: 50%;
}

.whitelabels {
  padding-top: 40px;
  color: lightgray !important;
}
.whitelabels a {
  color: white !important;
}
.p1-gradient-bg, body:after, .primary-btn:after, .banner-area, .active-banner-slider .item:before, .single-feature .icon:after, .single-generic-feature .icon:after, .story-area, .story-area-2, .footer-widget-area, .single-widget .icon:after, .footer-social a:after {
  background-image: -moz-linear-gradient(135deg, #49e3ce 0%, #9920ed 100%);
  background-image: -webkit-linear-gradient(135deg, #49e3ce 0%, #9920ed 100%);
  background-image: -ms-linear-gradient(135deg, #49e3ce 0%, #9920ed 100%);
}

.p1-gradient-color, .single-feature .icon span, .single-generic-feature .icon span {
  background: -webkit-linear-gradient(0deg, #9920ed, #49e3ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.container {
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  width: 80%;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,
.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,
.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,
.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,
.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,
.col-xl-auto {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
  max-width: none;
}

.col-1 {
  flex: 0 0 8.33333%;
  max-width: 8.33333%;
}

.col-2 {
  flex: 0 0 16.66667%;
  max-width: 16.66667%;
}

.col-3 {
  flex: 0 0 25%;
  max-width: 25%;
}

.col-4 {
  flex: 0 0 33.33333%;
  max-width: 33.33333%;
}

.col-5 {
  flex: 0 0 41.66667%;
  max-width: 41.66667%;
}

.col-6 {
  flex: 0 0 50%;
  max-width: 50%;
}

.col-7 {
  flex: 0 0 58.33333%;
  max-width: 58.33333%;
}

.col-8 {
  flex: 0 0 66.66667%;
  max-width: 66.66667%;
}

.col-9 {
  flex: 0 0 75%;
  max-width: 75%;
}

.col-10 {
  flex: 0 0 83.33333%;
  max-width: 83.33333%;
}

.col-11 {
  flex: 0 0 91.66667%;
  max-width: 91.66667%;
}

.col-12 {
  flex: 0 0 100%;
  max-width: 100%;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

.order-4 {
  order: 4;
}

.order-5 {
  order: 5;
}

.order-6 {
  order: 6;
}

.order-7 {
  order: 7;
}

.order-8 {
  order: 8;
}

.order-9 {
  order: 9;
}

.order-10 {
  order: 10;
}

.order-11 {
  order: 11;
}

.order-12 {
  order: 12;
}

@media (min-width: 576px) {
  .col-sm {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-sm-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-sm-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-sm-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-sm-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-sm-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-sm-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-sm-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-sm-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-sm-1 {
    order: 1;
  }
  .order-sm-2 {
    order: 2;
  }
  .order-sm-3 {
    order: 3;
  }
  .order-sm-4 {
    order: 4;
  }
  .order-sm-5 {
    order: 5;
  }
  .order-sm-6 {
    order: 6;
  }
  .order-sm-7 {
    order: 7;
  }
  .order-sm-8 {
    order: 8;
  }
  .order-sm-9 {
    order: 9;
  }
  .order-sm-10 {
    order: 10;
  }
  .order-sm-11 {
    order: 11;
  }
  .order-sm-12 {
    order: 12;
  }
}

@media (min-width: 768px) {
  .col-md {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-md-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-md-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-md-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-md-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-md-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-md-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-md-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-md-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-md-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-md-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-md-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-md-1 {
    order: 1;
  }
  .order-md-2 {
    order: 2;
  }
  .order-md-3 {
    order: 3;
  }
  .order-md-4 {
    order: 4;
  }
  .order-md-5 {
    order: 5;
  }
  .order-md-6 {
    order: 6;
  }
  .order-md-7 {
    order: 7;
  }
  .order-md-8 {
    order: 8;
  }
  .order-md-9 {
    order: 9;
  }
  .order-md-10 {
    order: 10;
  }
  .order-md-11 {
    order: 11;
  }
  .order-md-12 {
    order: 12;
  }
}

@media (min-width: 992px) {
  .col-lg {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-lg-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-lg-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-lg-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-lg-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-lg-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-lg-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-lg-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-lg-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-lg-1 {
    order: 1;
  }
  .order-lg-2 {
    order: 2;
  }
  .order-lg-3 {
    order: 3;
  }
  .order-lg-4 {
    order: 4;
  }
  .order-lg-5 {
    order: 5;
  }
  .order-lg-6 {
    order: 6;
  }
  .order-lg-7 {
    order: 7;
  }
  .order-lg-8 {
    order: 8;
  }
  .order-lg-9 {
    order: 9;
  }
  .order-lg-10 {
    order: 10;
  }
  .order-lg-11 {
    order: 11;
  }
  .order-lg-12 {
    order: 12;
  }
}

@media (min-width: 1200px) {
  .col-xl {
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
    max-width: none;
  }
  .col-xl-1 {
    flex: 0 0 8.33333%;
    max-width: 8.33333%;
  }
  .col-xl-2 {
    flex: 0 0 16.66667%;
    max-width: 16.66667%;
  }
  .col-xl-3 {
    flex: 0 0 25%;
    max-width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 33.33333%;
    max-width: 33.33333%;
  }
  .col-xl-5 {
    flex: 0 0 41.66667%;
    max-width: 41.66667%;
  }
  .col-xl-6 {
    flex: 0 0 50%;
    max-width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 58.33333%;
    max-width: 58.33333%;
  }
  .col-xl-8 {
    flex: 0 0 66.66667%;
    max-width: 66.66667%;
  }
  .col-xl-9 {
    flex: 0 0 75%;
    max-width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 83.33333%;
    max-width: 83.33333%;
  }
  .col-xl-11 {
    flex: 0 0 91.66667%;
    max-width: 91.66667%;
  }
  .col-xl-12 {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .order-xl-1 {
    order: 1;
  }
  .order-xl-2 {
    order: 2;
  }
  .order-xl-3 {
    order: 3;
  }
  .order-xl-4 {
    order: 4;
  }
  .order-xl-5 {
    order: 5;
  }
  .order-xl-6 {
    order: 6;
  }
  .order-xl-7 {
    order: 7;
  }
  .order-xl-8 {
    order: 8;
  }
  .order-xl-9 {
    order: 9;
  }
  .order-xl-10 {
    order: 10;
  }
  .order-xl-11 {
    order: 11;
  }
  .order-xl-12 {
    order: 12;
  }
}

.single-feature {
  margin-top: 30px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 60px;
  text-align: center;
}

.single-feature .icon {
  text-align: center;
  height: 60px;
  width: 60px;
  text-align: center;
  display: inline-block;
  margin-bottom: 10px;
  position: relative;
}

.single-feature .icon span {
  position: relative;
  z-index: 2;
  font-size: 54px;
  font-weight: bold;
  line-height: 60px;
}

.single-feature .icon:after {
  position: absolute;
  z-index: 1;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  border-radius: 3px;
}

.single-feature .desc h6 {
  margin: 20px 0;
  font-size: 12pt;
}

.single-feature .desc p {
  font-size: 11pt;
}



.single-generic-feature .icon {
  text-align: center;
  height: 60px;
  width: 60px;
  border-radius: 3px;
  border: 1px solid #eeeeee;
  position: relative;
}

.single-generic-feature .icon span {
  position: relative;
  z-index: 2;
  font-size: 24px;
}

.single-generic-feature .icon:after {
  position: absolute;
  z-index: 1;
  content: "";
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-transition: all 0.3s ease 0s;
  -moz-transition: all 0.3s ease 0s;
  -o-transition: all 0.3s ease 0s;
  transition: all 0.3s ease 0s;
  border-radius: 3px;
}

.single-generic-feature .desc {
  width: 72%;
}

@media (max-width: 991px) {
  .single-generic-feature .desc {
    width: 100%;
  }
}

.single-generic-feature .desc h6 {
  margin: 20px 0;
}


        .hero {
          align-items: center;
          background: ${theme.hero.background};
          background-image: url(${backgrounds.mobile});
          background-size: cover;
          color: ${theme.text.color.primary.inverse};
          display: flex;
          flex-flow: column nowrap;
          justify-content: center;
          min-height: 100vh;
          height: 100px;
          padding: ${theme.space.inset.l};
          padding-top: ${theme.header.height.homepage};
        }
       
        h1 {
          text-align: center;
          font-size: ${theme.hero.h1.size};
          margin: ${theme.space.stack.l};
          color: ${theme.hero.h1.color};
          line-height: ${theme.hero.h1.lineHeight};
          text-remove-gap: both 0 "Open Sans";
          padding-bottom: 10px;

          :global(strong) {
            position: relative;

            &::after,
            &::before {
              content: "›";
              color: ${theme.text.color.attention};
              margin: 0 ${theme.space.xs} 0 0;
              text-shadow: 0 0 ${theme.space.s} ${theme.color.neutral.gray.k};
            }
            &::after {
              content: "‹";
              margin: 0 0 0 ${theme.space.xs};
            }
          }
        }

        @from-width tablet {
          .hero {
            background-image: url(${backgrounds.tablet});
          }

          h1 {
            max-width: 90%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.1)`};
          }

          button {
            font-size: ${theme.font.size.l};
          }
        }

        @from-width desktop {
          .hero {
            background-image: url(${backgrounds.desktop});
          }

          h1 {
            max-width: 80%;
            font-size: ${`calc(${theme.hero.h1.size} * 1.3)`};
          }

          button {
            font-size: ${theme.font.size.xl};
          }
        }
      `}</style>
    </React.Fragment>
  );
};

Hero.propTypes = {
  scrollToContent: PropTypes.func.isRequired,
  backgrounds: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default Hero;
