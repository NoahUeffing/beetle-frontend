import Plant from './../images/plant.jpg'

const Home = () => {

    return(
        <>
        <div className="text-center">
          <h2 className="p-3 mb-3">Discover supplements licensed in Canada</h2>
          <img src={Plant} alt="Plants and pills" className="img-fluid" />
        </div>
        </>
    )
}

export default Home;