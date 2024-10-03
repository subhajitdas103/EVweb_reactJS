import './Background.css';
import video1 from '../../Assets/video1.mp4';
import image1 from '../../Assets/image1.png';
import image2 from '../../Assets/image2.jfif';
import image3 from '../../Assets/image3.png';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={image3} className="background" alt="" />;
  }

  // Return null or a default fallback if none of the conditions are met
  return null;
};

// Default export
export default Background;
