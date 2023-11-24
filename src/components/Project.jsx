import React from "react";
import movie from "../assets/images/movie.avif";
import stock from "../assets/images/stock.avif";
import weather from "../assets/images/weathers.png";
import watch from "../assets/images/watch.avif";
import cack from "../assets/images/cack.jpg";
import calculater from "../assets/images/calculater.avif";
import countries from "../assets/images/countries.jpg";
import images from "../assets/images/images.avif";
import ticTac from "../assets/images/tictac.jpg";
import shoping from "../assets/images/shoping.jpg";
import { Pages, HeadingCommon } from "../pages";
const Project = () => {
  return (
    <>
      <section id="projects" className="py-10 text-white ">
        <div className="text-center">
          <HeadingCommon texts={"My"} span={"Projects"} instruc={"My awesome works"} />
        </div>
        <br />
        <div className="flex px-5 mx-auto items-center justify-center  relative">
          <div className="lg:w-full w-full flex flex-wrap justify-center items-center gap-4">
            <Pages ancorPath={"https://"} github={"https://github.com/imd511248/upstox-app"} img={movie} name={"Movie App"} />
            <Pages ancorPath={"https://weatherappreactimd.netlify.app"} github={"https://github.com/imd511248/react_weather_app"} img={weather} name={"Weather App"} />
            <Pages ancorPath={"https://analogwatchcoad.netlify.app"} github={"https://github.com/imd511248/realWatch"} img={watch} name={"Analog Watch"} />
            <Pages ancorPath={"https://upstox-app.netlify.app"} github={"https://github.com/imd511248/upstox-app"} img={stock} name={"Upstox"} />
            <Pages ancorPath={"https://tic-tac-toe-gameimd.netlify.app"} github={"https://github.com/imd511248/tictactoe"} img={ticTac} name={"Tic Tac Toe"} />
            <Pages ancorPath={"https://"} github={"https://github.com/imd511248/upstox-app"} img={cack} name={"Cake App"} />
            <Pages ancorPath={"https://candid-puppy-b56208.netlify.app"} github={"https://github.com/imd511248/-media-Q1"} img={calculater} name={"Calculater"} />
            <Pages ancorPath={"https://sparkling-sopapillas-598908.netlify.app"} github={"https://github.com/imd511248/imageSearchEngine"} img={images} name={"ImageFinder"} />
            <Pages ancorPath={"https://"} img={countries} name={"countryAndtherecities"} />
            <Pages ancorPath={"http://shoping-app-imd.netlify.app"} github={"https://github.com/imd511248/fake-api-dilshad"} img={shoping} name={"fakeapiproduct"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
