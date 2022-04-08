import eye from "../../images/icon-view.svg"
import eqb from "../../images/image-equilibrium.jpg"
import eth  from "../../images/icon-ethereum.svg"
import clock from "../../images/icon-clock.svg"
import avatar from "../../images/image-avatar.png"

const NftCard = () => {
    return (<section className="bg-rope p-5 mx-5 rounded-xl max-w-xs shadow-2xl bg-accent" >
    <a href="#" className="group block relative rounded-md overflow-hidden">
      <div className="invisible group-hover:visible absolute inset-0 bg-cyan/50">
        <img
          src={eye}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="eye icon"
        />
      </div>
      <img src={eqb} alt="equilibrium" />
    </a>

    <h1>
      <a href="#" className="block text-white my-4 font-semibold text-lg hover:text-cyan"
        >Equilibrium #3429</a
      >
    </h1>

    <p className="text-soft-blue font-light">
      Our Equilibrium collection promotes balance and calm.
    </p>

    <div className="flex justify-between items-center mt-4">
      <div className="flex text-cyan space-x-2">
        <img src={eth} alt="ethereum icon" />
        <p>0.041 ETH</p>
      </div>
      <div className="flex items-center text-soft-blue space-x-2 whitespace-nowrap">
        <img src={clock} alt="clock icon" />
        <p>3 days left</p>
      </div>
    </div>

    <hr className="border-dark-blue-line mt-6" />

    <div className="flex items-center space-x-2 mt-4">
      <img src={avatar} alt="avatar" className="w-8 h-8" />
      <p className="text-white">
        <span className="text-secondary">Creation of </span>
        <a href="#" className="hover:text-cyan">Jules Wyvern</a>
      </p>
    </div>
    <span className="btn btn-secondary btn-wide mt-6 font-bold text-md">PLACE BID</span>
  </section>)
}

export default NftCard