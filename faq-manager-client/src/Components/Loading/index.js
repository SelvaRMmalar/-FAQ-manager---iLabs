import Lottie from 'lottie-react';
import animation from '../../assets/animations/loader.json';

function Loading() {
  return (
    <div className='flex justify-center	justify-items-center 	'>
      <Lottie className='w-1/12 h-1/12' animationData={animation} />
    </div>
  );
}

export default Loading;
