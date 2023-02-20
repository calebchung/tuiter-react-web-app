function WhoToFollowListItem(who) {
  return (`<div class="border-bottom border-solid border-dark">
          <div class="row p-2">
            <div class="col-2 pe-0">
              <img src=${who.avatarIcon} class="img-fluid"/>
            </div>
            <div class="col-6">
              <p class="wd-tuit-bold text-white">
                ${who.userName}
                <i class="fas fa-check-circle"></i>
              </p>
              <p class="wd-tuit-normal">
                @${who.handle}
              </p>
            </div>
            <div class="col-4 ps-0 pe-4 pt-2">
              <button class="btn btn-primary rounded-pill w-100">
                Follow
              </button>
            </div>
          </div>
        </div>
   `);
}
export default WhoToFollowListItem;