import React from 'react'
import Hero from '../heroSection/Hero'
import ThreeCompoent from '../threecomp/ThreeCompoent'
import "./Home.css"

const Home = () => {
  return (
    <>
    <Hero />
    <ThreeCompoent />



    <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
    	<div className="container">
				<div className="row no-gutters">
					<div className="col-lg-4">
						<div className="gallery1 choose-wrap divider-one img p-5 d-flex align-items-end " >

    					<div className="text text-center text-white px-2">
								<span className="subheading">Men's Shoes</span>
    						<h2>Men's Collection</h2>
    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
    						<p><a href="#" className="btn btn-black px-5 py-5">Shop now</a></p>
    					</div>
    				</div>
					</div>
					<div className="col-lg-8 s-gallery">
    				<div className="row no-gutters choose-wrap divider-two align-items-stretch">
    					<div className="r-gallery col-md-12">
	    					<div className="gallery2 choose-wrap full-wrap img align-self-stretch d-flex align-item-center justify-content-end" >
	    						<div className="col-md-7 d-flex align-items-center">
	    							<div className="text text-white px-5">
	    								<span className="subheading">Women's Shoes</span>
			    						<h2>Women's Collection</h2>
			    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
			    						<p><a href="#" className="btn btn-black px-3 py-2">Shop now</a></p>
			    					</div>
	    						</div>
	    					</div>
	    				</div>
    					<div className=" b-Image col-md-12">
    						<div className="row no-gutters">
    							<div className="col-md-6">
		    						<div className="gallery3 choose-wrap wrap img align-self-stretch bg-light d-flex align-items-center">
		    							<div className="text text-center px-5">
		    								<span className="subheading">Summer Sale</span>
				    						<h2>Extra 50% Off</h2>
				    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				    						<p><a href="#" className="btn btn-black px-3 py-2">Shop now</a></p>
				    					</div>
		    						</div>
	    						</div>
	    						<div className="col-md-6">
		    						<div className="gallery4 choose-wrap wrap img align-self-stretch d-flex align-items-center" >
		    							<div className="text text-center text-white px-5">
		    								<span className="subheading">Shoes</span>
				    						<h2>Best Sellers</h2>
				    						<p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
				    						<p><a href="#" className="btn btn-black px-3 py-2">Shop now</a></p>
				    					</div>
		    						</div>
	    						</div>
	    					</div>
    					</div>
    				</div>
    			</div>
  			</div>
    	</div>
    </section>
    </>
  )
}

export default Home