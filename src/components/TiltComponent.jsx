import Tilt from "react-parallax-tilt";

const TiltComponent = () => {
  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      glareColor={"#ffff"}
    >
      <div className="card ">
        <img className="w-[50%] h-[50%]" src="/public/port-item1.jpg" alt="" />
      </div>
    </Tilt>
  );
};

export default TiltComponent;
