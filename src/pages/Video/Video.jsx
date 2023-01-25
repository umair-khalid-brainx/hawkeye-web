import "./Video.scss";
import "../../shared/Responsive.scss";
import "../../shared/Styles.scss";
function Video() {
	return (
		<section className='Video'>
			<header>
				<div className='overlay'>
					<div className='overlay-left d-inline'>
						<img
							src='/assets/logo-large.png'
							alt=''
							className='header-image'
						/>
					</div>
					<div className='overlay-right d-inline'>
						<a className='header-text fw-bold mx-4' href=''>
							hawkeye
						</a>
						<a className='header-text mx-4' href=''>
							How It Works
						</a>
						<a className='header-text mx-4' href=''>
							FAQs
						</a>
						<button className='btn btn-text mx-5'>Pre-Order</button>
					</div>
					{/* <div className="overlay-right-alt d-inline">
              <a className="header-text fw-bold mx-4" href="">hawkeye</a>
              <a className="header-text mx-4" href="">How It Works</a>
              <a className="header-text mx-4" href="">FAQs</a>
              <button className="btn btn-text mx-5">Pre-Order</button>
            </div> */}
				</div>

				<video
					className='m-0 p-0 elementor-background-video-hosted elementor-html5-video'
					autoPlay='autoplay'
					muted='muted'
					loop='loop'
					src='https://hawkeye.bike/wp-content/uploads/2022/12/Hawkeye_2_hero_video_2.mp4'></video>

				<div className='container'>
					<div className='d-flex text-center align-items-end'>
						<div className='mx-auto text-white'>
							<img src='/assets/logo.png' alt='' />
							<div className='logo-text'>
								- Your Sixth Sense While Riding -
							</div>
							<h1 className='large-heading'>hawkeye</h1>
							<div className='text'>
								Even when riding at night, you can observe the
								road situation in real-time.
								<br />A rear camera sees everything, even when
								you're not looking around.
							</div>
						</div>
					</div>
				</div>
			</header>
		</section>
	);
}
export default Video;
