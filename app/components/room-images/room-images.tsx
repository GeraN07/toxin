import Image from 'next/image';

type RoomImagesProps = {
  imgArr: string[];
};

const RoomImages = ({ imgArr }: RoomImagesProps) => (
  <section className="room-details__room-image revealator-once">
    <Image
      className="room-details__room-image-main"
      width={981}
      height={517}
      src={imgArr[0]}
      sizes="(max-width: 768px) 100vw, 50vw"
      style={{ width: '100%', height: 'auto' }}
      alt=""
    />
    <div className="room-details__room-image-small-block">
      <Image
        className="room-details__image-small1"
        width={459}
        height={243}
        src={imgArr[1]}
        alt=""
      />
      <Image
        className="room-details__image-small2"
        width={459}
        height={242}
        src={imgArr[2]}
        alt=""
      />
    </div>
  </section>
);

export default RoomImages;
