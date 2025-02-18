import { useRef, useState } from "react";
import "./Video_section.css"; 
// import seo_vdo from '../../assets/seo_vdo.MP4';


const Video_Section = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.muted = false;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="section_vdo" id="products">
      <div className="content">
        <h2>Hello Business Owners !!!</h2>
        <h3>We specialize in Generating <span>High Quality Inbound leads</span> for our clients that are Engaging and Warm.</h3>
        <p>Last Financial year one of our client Onboarded a customer worth 1.2 Million US Dollar through our Inbound lead generation stratergy.</p>
      </div>

      <div className="video-container">
        <div className="video-wrapper">
        <video
  ref={videoRef}
  className="video"
  src="/videos/seo_vdo.MP4" 
  muted
  playsInline
  onClick={handleVideoClick}
/>
        </div>
      </div>
    </section>
  );
};

export default Video_Section;
