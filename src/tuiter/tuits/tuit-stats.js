import React from "react";
import {updateTuitThunk}
  from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
      tuit = {
        "_id": 234,
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
        "dislikes": 1234,
        "disliked": false,
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  return (
      <div className="row">
        <i className="bi bi-chat col-auto"></i>
        <div className="col-auto ps-0">
          {tuit.replies}
        </div>
        <i className="bi bi-arrow-repeat col-auto ps-5"></i>
        <div className="col-auto ps-0">
          {tuit.retuits}
        </div>
        {!tuit.liked && <i className="bi bi-heart col-auto ps-5"
                           onClick={() => dispatch(updateTuitThunk({
                             ...tuit,
                             likes: tuit.likes + 1,
                             liked: !tuit.liked
                           }))}></i>}
        {tuit.liked && <i className="bi bi-heart-fill col-auto ps-5 text-danger"
                          onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            likes: tuit.likes - 1,
                            liked: !tuit.liked
                          }))}></i>}
        <div className="col-auto ps-0">
          {tuit.likes}
        </div>
        {!tuit.disliked && <i className="bi bi-hand-thumbs-down col-auto ps-5"
                           onClick={() => dispatch(updateTuitThunk({
                             ...tuit,
                             dislikes: tuit.dislikes + 1,
                             disliked: !tuit.disliked
                           }))}></i>}
        {tuit.disliked && <i className="bi bi-hand-thumbs-down-fill col-auto ps-5"
                          onClick={() => dispatch(updateTuitThunk({
                            ...tuit,
                            dislikes: tuit.dislikes - 1,
                            disliked: !tuit.disliked
                          }))}></i>}
        <div className="col-auto ps-0">
          {tuit.dislikes}
        </div>
        <i className="bi bi-share col-auto ps-5"></i>
      </div>
  );
};
export default TuitStats;