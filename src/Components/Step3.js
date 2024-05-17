import React from 'react'
import PhotoAlbum from 'react-photo-album'
import { useNavigate } from 'react-router-dom'

const Step3 = () => {
    const navigate = useNavigate()
    const [photos,setPhotos] = React.useState([])
    React.useEffect(() => {
        let photosArray = []
        for (let i=1;i<=91;i++) {
            const img = new Image()
            img.src = '/assets/img'+i+'.jpg'
            photosArray.push({
                src:'/assets/img'+i+'.jpg',
                width:900,
                height:img.height,

            })
        }
        setPhotos(photosArray)
        const delay = 5000; // 2 seconds delay before scrolling starts
        const scrollSpeed = 0.5; // Adjust scroll speed as needed
        window.scrollTo(0, window.innerHeight);
        const scrollToBottom = () => {
        const startTime = performance.now();
        const startY = window.scrollY;
        const endY = document.documentElement.scrollHeight - window.innerHeight;
        const duration = (endY - startY) / scrollSpeed;

        const animateScroll = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const newY = startY + (endY - startY) * progress;
            window.scrollTo(0, newY);

            if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
            }else{
                setTimeout(navigate('/step4'), 3000); 
            }
        };

        window.requestAnimationFrame(animateScroll);
        };

        setTimeout(scrollToBottom, delay);

        },[])
  return (
    <div className='min-h-screen'>
        <PhotoAlbum photos={photos} layout = 'masonry' spacing={1} columns={4}  ></PhotoAlbum>
        <div className='w-full text-4xl text-center py-5 border-2'>
            Hi kanna! Photos baaunnaya? Inka Chaala unnayi padha veldhaam!!
        </div>
    </div>
  )
}

export default Step3