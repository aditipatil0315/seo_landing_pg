import { useRef, useState } from "react";
import "./Video_section.css";

const Video_Section = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="section_vdo" id="products">
      <div className="content">
        <h2>Hello Business Owners !!!</h2>
        <h3>We specialize in Generating <span>High Quality Inbound leads</span> for our clients that are Engaging and Warm.</h3>
        <p>Last Financial year one of our client Onboarded a customer worth 1.2 Million US Dollar through our Inbound lead generation strategy.</p>
      </div>

      <div className="video-container">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            className="video"
            src="/videos/seo_vdo.MP4"
            muted={isMuted}
            playsInline
            autoPlay
            onClick={handleVideoClick}
          />
           <div className="sound-indicator">
            {isMuted ? "🔇 Muted" : "🔊 Sound On"}
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Video_Section;
