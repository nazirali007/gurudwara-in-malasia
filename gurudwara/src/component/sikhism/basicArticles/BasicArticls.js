import React from "react";
import Banners from "../../reusableComponents/Banners";
import Buttons from "../../reusableComponents/buttons/Buttons";

const BasicArticls = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row p-2 p-md-5 text-start d-flex justify-content-between">
          <div className="col-md-9">
            <h4 className="text-color-orange ">Basic Articles</h4>
            <p>
              <span className="fw-bolder">Unity of God: </span> There is but One
              God. He is Unborn, Omni-potent, Infinite, Formless, All-knowing
              and All-pervading.
            </p>

            <p>
              <span className="fw-bolder">Equality: </span>
              All men are equal. God is our Mother & Father and we are His
              children. There is none high or low on account of birth, sex,
              position or riches.
            </p>

            <p>
              <span className="fw-bolder">Faith: </span> One must have perfect
              faith in the Guru. The word Sikhism literally means the way of the
              disciple. The disciple must follow the Guru’s word.
            </p>

            <p>
              <span className="fw-bolder">Love of God: </span> We can love God
              only when we cease to love ourselves. We must first destroy the
              ego haumai.
            </p>

            <p>
              <span className="fw-bolder">Character-building: </span>
              If the mind is impure, it cannot deserve union with Divinity. Guru
              Nanak Sahib says : “Truth is no doubt great, but greater is
              truthful living.” The development of character is the only
              foundation on which the edifice of disciple-ship can be raised.
              Conquer the five deadly sins-lust, anger, greed, attachment and
              pride, Morality is an important step in the path of discipleship.
            </p>

            <p>
              <span className="fw-bolder">Nam Simran: </span>
              The practice of the Name is an-essential duty of a Sikh. The Guru
              seeks the dust of the feet of those who remember the Name and make
              others remember it. Simaran is the practice of the presence of
              God. It is God-vision. As we think, so we become. It is by
              meditation that we attain to the glory and greatness of the
              Almighty.
            </p>
          </div>
          <div className="col-md-3">
            <Buttons pos={0}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicArticls;
