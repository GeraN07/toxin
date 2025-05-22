import Image from 'next/image';

type RoomImagesProps = {
  imgArr: string[];
};

const RoomImages = ({ imgArr }: RoomImagesProps) => (
  <section className="room-details__room-image revealator-once">
    <Image className="room-details__room-image-main" src={imgArr[0]} alt="" />
    <div className="room-details__room-image-small-block">
      <Image className="room-details__image-small1" src={imgArr[1]} alt="" />
      <Image className="room-details__image-small2" src={imgArr[2]} alt="" />
    </div>
  </section>
);

export default RoomImages;
