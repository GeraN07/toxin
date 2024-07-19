
type RoomImpressionsProps = {
  totalRationg: number;
  votes: number;
};
const RoomImpressions = ({ totalRationg, votes }: RoomImpressionsProps) => (
  <div className="room-details__room-impressions revealator-once revealator-delay3">
    <h1 className="room-details__impressions-title">Впечатления от номера</h1>
    <div className="room-details__impressions-block">
      <figure className="chart" data-percent={totalRationg}>
        <svg width="120" height="121">
          <g transform="scale(-1, 1), rotate(-90)">
            <circle className="outer2" cx="-60" cy="-60" r="58" />
            <circle className="outer1" cx="-60" cy="-60" r="58" />
            <circle className="outer" cx="-60" cy="-60" r="58" />
          </g>
        </svg>
        <p className="vote-count">
          <span className="vote-count__number" id="nbr">
            {votes}
          </span>{' '}
          <span className="vote-count__text">голосов</span>
        </p>
      </figure>
      <div className="room-details__impressions-text-block">
        <ul className="room-details__impressions-list">
          <li className="room-details__impression-item1">
            <p className="room-details__impression-list-text">Великолепно</p>
          </li>
          <li className="room-details__impression-item2">
            <p className="room-details__impression-list-text">Хорошо</p>
          </li>
          <li className="room-details__impression-item3">
            <p className="room-details__impression-list-text">
              Удовлетворительно
            </p>
          </li>
          <li className="room-details__impression-item4">
            <p className="room-details__impression-list-text">Разочарован</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default RoomImpressions;
