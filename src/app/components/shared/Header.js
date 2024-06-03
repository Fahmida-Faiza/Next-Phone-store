import Image from "next/image";

import card2 from "../../../assets/images/team/team2.jpg";

import card1 from "../../../assets/images/team/team1.jpg";
const Header = () => {

    return (
      <div >
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: "url(home.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Hello there Servies in Web & Seo
              </h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>

        {/*  */}

      <div className=" mx-auto my-20">
       
          <div className="carousel carousel-center rounded-box ">
            <div className="carousel-item mx-2">
              <Image
                className="max-w-sm rounded-xl shadow-2xl"
                src={card1}
                width={500}
                height={400}
                alt="Picture of the author"
              />
            </div>
           
           
           
           
            <div className="carousel-item mx-2">
              <Image
                className="max-w-sm rounded-xl shadow-2xl"
                src={card2}
                width={500}
                height={400}
                alt="Picture of the author"
              />
            </div>
            <div className="carousel-item mx-2">
              <Image
                className="max-w-sm rounded-xl shadow-2xl"
                src={card1}
                width={500}
                height={400}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;