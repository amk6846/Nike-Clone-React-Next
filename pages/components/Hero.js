import Image from "next/image";

const Hero = () => {
  return (
    <div className="Hero container">
      <div className="Hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="secondry-btn">
          <button className="btn1">Shop Now</button>
          <button className="btn2">Category</button>
        </div>
        <p className="shop-p">Also Available On</p>
        <div className="images">
          <Image src="/flipKart.png" height={32} width={32} alt="img-1" />
          <Image src="/amazon.png" height={32} width={32} alt="img-2" />
        </div>
      </div>
      <div className="Hero-Image">
        <Image
          src="/shoe_image.png"
          height={487}
          width={530}
          alt="Shoe image"
        />
      </div>
    </div>
  );
};
export default Hero;
