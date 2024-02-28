import React, { useState } from 'react';
import tenofcups from "./assets/tenofcups.png";
import lovers from "./assets/thelovers.png";
import twoofcups from "./assets/twoofcups.png";
import back from "./assets/back.png";
import './styles/bruh.scss';

const TarotCard = ({ frontImg, backImg, poem, card, cardId }) => {
  const [isFlipped, setIsFlipped] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="tarotCard"  >
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <img className={`card${cardId}`} onClick={handleClick} src={isFlipped ? backImg : frontImg} alt="card" />
      </div>
      {
        showModal &&
        <div className="resultsModal">
          <div className='cardCard'>
            <h2> {card}</h2>
            <img onClick={toggleModal} className="front" src={frontImg} alt="card" />
          </div>
          <p className='poem'> {poem}</p>
          {/* <button onClick={toggleModal}>Close</button> */}
        </div>
      }
    </div>
  );
};

const Tarot = () => {
  const poemTwoOfCups = "This card shows an image of a man and a woman that are exchanging their cups in a ceremony. The ceremony you will be taking a part of is at Dunks during the prime time of 8. If you have the time, the pre game is at 7. ";
  const poemTheLovers = "In its purest form, The Lovers card represents conscious connections and meaningful relationships. The arrival of this card in a Tarot reading shows that you have a beautiful, soul-honoring connection with a loved one who is inviting you to Chi Gam formal. It also serves as a reminder that love is the most powerful force in the Universe and can conquer all."
  const poemTenOfCups = "The Ten of Cups embodies happiness, joy, and emotional contentment, particularly in your relationships and family. You have created an abundance of love and happiness in your life, and you now share this love with others, expanding your heart even more. This card often appears when you are surrounded by your loved ones with whom you share a powerful and deep connection.";
  return (
    <div className='tarotContainer' >
      <h1>  Your fortune for tomorrow!</h1>

      <img className="star1" src="https://media4.giphy.com/media/h1wJfQSyllj4oWUHh1/giphy.gif?cid=6c09b9522cjn75b78y47aa924if8ccqc3de8meb3didgphb6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="stars" />
      <img className="star2" src="https://media4.giphy.com/media/h1wJfQSyllj4oWUHh1/giphy.gif?cid=6c09b9522cjn75b78y47aa924if8ccqc3de8meb3didgphb6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="stars" />
      <img className="star3" src="https://media4.giphy.com/media/h1wJfQSyllj4oWUHh1/giphy.gif?cid=6c09b9522cjn75b78y47aa924if8ccqc3de8meb3didgphb6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="stars" />
      <img className="star4" src="https://media4.giphy.com/media/h1wJfQSyllj4oWUHh1/giphy.gif?cid=6c09b9522cjn75b78y47aa924if8ccqc3de8meb3didgphb6&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="stars" />
      <div className='tarotCards'>
        <TarotCard frontImg={tenofcups} backImg={back} poem={poemTenOfCups} card="The Ten of Cups" cardId={1} />
        <TarotCard frontImg={lovers} backImg={back} poem={poemTheLovers} card="The Lovers" cardId={2} />
        <TarotCard frontImg={twoofcups} backImg={back} poem={poemTwoOfCups} card="The Two of Cups" cardId={3} />
      </div>
    </div>
  );
};

export default Tarot;
