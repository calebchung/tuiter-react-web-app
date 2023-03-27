import React, {useState} from "react";
const TuitStats = (
    {
      tuit = {"_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "spacex.png",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"}
    }
) => {
  const [tuitState, setTuitState] = useState(tuit);

  const likeTuitClickHandler = (tuit) => {
    let increment = 1
    if (tuit.liked) {
      increment = -1
    }
    const updatedTuit = {
      "_id": tuit._id,
      "topic": tuit.topic,
      "userName": tuit.userName,
      "time": tuit.time,
      "title": tuit.title,
      "image": tuit.image,
      "liked": !tuit.liked,
      "replies": tuit.replies,
      "retuits": tuit.retuits,
      "likes": tuit.likes + increment,
      "handle": tuit.handle,
      "tuit": tuit.tuit
    }
    setTuitState(updatedTuit)
  }
  return(
      <div className="row">
        <i className="bi bi-chat col-auto"></i>
        <div className="col-auto ps-0">
          {tuitState.replies}
        </div>
        <i className="bi bi-arrow-repeat col-auto ps-5"></i>
        <div className="col-auto ps-0">
          {tuitState.retuits}
        </div>
        {!tuitState.liked && <i className="bi bi-heart col-auto ps-5" onClick={() =>
            likeTuitClickHandler(tuitState)}></i>}
        {tuitState.liked && <i className="bi bi-heart-fill col-auto ps-5" style={{"color": "red"}} onClick={() =>
            likeTuitClickHandler(tuitState)}></i>}

        <div className="col-auto ps-0">
          {tuitState.likes}
        </div>
        <i className="bi bi-share col-auto ps-5"></i>
      </div>
  );
};
export default TuitStats;