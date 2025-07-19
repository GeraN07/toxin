import BulletList from '../bullet-list/bullet-list';

type RoomInformationProps = {
  pet: boolean;
};

const RoomInformation = ({ pet }: RoomInformationProps) => (
  <>
    <div className="room-details__room-rules revealator-fade revealator-once revealator-delay1">
      <h1 className="room-details__rules-title">Правила</h1>
      <BulletList pet={pet} />
    </div>
    <div className="room-details__book-cancel revealator-fade revealator-once revealator-delay1">
      <h1 className="room-details__book-cancel-title">Отмена</h1>
      <p className="room-details__book-cancel-text">
          Бесплатная отмена в течение 48 ч. После этого при отмене не позднее
          чем за 5 дн. до прибытия вы получите полный возврат за вычетом сбора
          за услуги.
      </p>
    </div>
  </>
);

export default RoomInformation;
