import Image from 'next/image';
import Diagonal from './layouts/Diagonal';
import KeypointItem from './items/KeypointItem';
import CupIcon from './icons/CupIcon';
import ThumbIcon from './icons/ThumbIcon';
import LeafHeartIcon from './icons/LeafHeartIcon';
import AchieveIcon from './icons/AchieveIcon';

export default function Keypoints() {
  return (
    <div className="relative">
      <Diagonal
        className="h-10 sm:h-20 lg:h-auto"
        flipX
        flipY
        bgClass="fill-gray-dark"
        bgCorner="fill-orange"
      />
      <Image className="-z-10" src="/images/yohann-tilotti_bloody-sky.jpeg" layout="fill" alt="Yohann Tilotti - Bloody Sky" />
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-y-4 py-4">
        <KeypointItem icon={<CupIcon className="h-3 md:h-5" />} value="2356" label="tasses à café" />
        <KeypointItem icon={<ThumbIcon className="h-3 md:h-5" />} value="352" label="projets" />
        <KeypointItem icon={<AchieveIcon className="h-3 md:h-5" />} value="15 années" label="d'expérience" />
        <KeypointItem icon={<LeafHeartIcon className="h-3 md:h-5" />} value="150+" label="idées à développer" />
      </div>
      <Diagonal
        className="h-10 sm:h-20 lg:h-auto"
        bgClass="fill-gray-darker"
        bgCorner="fill-orange"
      />
    </div>
  );
}