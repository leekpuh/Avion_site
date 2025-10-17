import "./styles.css";
import "../../../styles/FlexFonts.css";
import "../../../styles/media.css";
import { useMediaQuery } from "react-responsive";

const ImgImport = ({ imageName, imageClassName, imageType }) => {
    const image = require("./img/" + imageName + "." + imageType);
    return <img src={image} alt={imageName} className={imageClassName} />;
};

function Main() {
    const isDesktop = useMediaQuery({ minWidth: 1024 });

    return (
        <div className="container">
            <section className="banner-box flex-between">
                <div className="banner-text flex-between flex-column">
                    <div className="text-wrap">
                        <p className="text-big">
                            The furniture brand for the
                            <br />
                            future, with timeless designs
                        </p>
                        <a href="#!" className="btn .flex-items-centre text-small">
                            View collection
                        </a>
                    </div>
                    <p className="text-small"> 
                        A new era in eco friendly furniture with Avelon, the
                        French luxury retail brand
                        <br />
                        with nice fonts, tasteful colors and a beautiful way to
                        display things digitally
                        <br />
                        using modern web technologies.
                    </p>
                </div>
                {isDesktop && (
                    <ImgImport
                        imageName="RightImage"
                        imageClassName="BannerImg"
                        imageType="png"
                    />
                )}
            </section>
            <section className="benefit-box flex-column">
                <p className="text-middle semi-bold">
                    What makes our brand different
                </p>
                <div className="flex-between flex-wrap">
                    <div className="benefit-item">
                        <ImgImport imageName="car" imageType="svg" />
                        <p className="text-small">Next day as standard</p>
                        <p className="text-small">
                            Order before 3pm and get your order the next day as
                            standard
                        </p>
                    </div>
                    <div className="benefit-item">
                        <ImgImport imageName="ok" imageType="svg" />
                        <p className="text-small">Made by true artisans</p>
                        <p className="text-small">
                            Handmade crafted goods made with real passion and
                            craftmanship
                        </p>
                    </div>
                    <div className="benefit-item">
                        <ImgImport imageName="card" imageType="svg" />
                        <p className="text-small">Unbeatable prices</p>
                        <p className="text-small">
                            For our materials and quality you won't find better
                            prices anywhere
                        </p>
                    </div>
                    <div className="benefit-item">
                        <ImgImport imageName="plant" imageType="svg" />
                        <p className="text-small">Recycled packaging</p>
                        <p className="text-small">
                            We use 100% recycled to ensure our footprint is more
                            manageable
                        </p>
                    </div>
                </div>
            </section>
            <section className="new-ceramics-box">
                <p className="text-big semi-bold">New ceramics</p>
                <div className="flex-between flex-wrap">
                    <div className="creamics-item">
                        <ImgImport imageName="Photo" imageClassName="product-img" imageType="png" />
                        <p className="text-small">The Dandy chair</p>
                        <p className="text-small">£250</p>
                    </div>
                    <div className="creamics-item">
                        <ImgImport imageName="Photo1" imageClassName="product-img" imageType="png" />
                        <p className="text-small">Rustic Vase Set</p>
                        <p className="text-small">£155</p>
                    </div>
                    <div className="creamics-item">
                        <ImgImport imageName="Photo2" imageClassName="product-img" imageType="png" />
                        <p className="text-small">The Silky Vase</p>
                        <p className="text-small">£125</p>
                    </div>
                    <div className="creamics-item">
                        <ImgImport imageName="Photo3" imageClassName="product-img" imageType="png" />
                        <p className="text-small">The Lucy Lamp</p>
                        <p className="text-small">£399</p>
                    </div>
                </div>
                <a href="#!" className="btn .flex-items-centre flex-center text-small">
                    View collection
                </a>
            </section>
            <section className="popular-products-box">
                <p className="text-big semi-bold">Our popular products</p>
                <div className="flex-between flex-wrap">
                    <div className="creamics-item long-img">
                        <ImgImport imageName="Large" imageClassName="product-img" imageType="png" />
                        <p className="text-small">The Dandy chair</p>
                        <p className="text-small">£155</p>
                    </div>
                    <div className="creamics-item">
                        <ImgImport imageName="chair" imageClassName="product-img" imageType="png" />
                        <p className="text-small">Rustic Vase Set</p>
                        <p className="text-small">£250</p>
                    </div>

                    <div className="creamics-item">
                        <ImgImport imageName="Photo" imageClassName="product-img" imageType="png" />
                        <p className="text-small">The Silky Vase</p>
                        <p className="text-small">£125</p>
                    </div>
                </div>
                <a href="#!" className="btn .flex-items-centre flex-center text-small">
                    View collection
                </a>
            </section>
            <section className="join-club-box">
                <p className="text-big semi-solid">
                    Join the club and get the benefits
                </p>
                <p className="text-small">
                    Sign up for our newsletter and receive exclusive offers on
                    new
                    <br />
                    ranges, sales, pop up stores and more
                </p>
                <div className="jc-wrapper">
                    <input
                        type="email"
                        id="jc-email"
                        placeholder="your@email.com"
                    ></input>
                    <input
                        type="submit"
                        className="jc-submit"
                        value="Sign In"
                    ></input>
                </div>
            </section>
            <section className="info-box flex-between flex-wrap">
                <div className="info-wrapper flex-between flex-column">
                    <div>
                        <p className="text-middle ">
                            From a studio in London to a global brand with
                            <br />
                            over 400 outlets
                        </p>
                        <p className="text-small">
                            When we started Avion, the idea was simple. Make
                            high quality furniture
                            <br />
                            affordable and available for the mass market.
                        </p>
                        <p className="text-small">
                            Handmade, and lovingly crafted furniture and
                            homeware is what we live,
                            <br />
                            breathe and design so our Chelsea boutique become
                            the hotbed for the
                            <br />
                            London interior design community.
                        </p>
                    </div>
                    <a href="#!" className="btn text-small">
                        Get in touch
                    </a>
                </div>
                <ImgImport
                    imageName="Image"
                    imageClassName="img-auto"
                    imageType="png"
                />
            </section>
        </div>
    );
}

export default Main;
