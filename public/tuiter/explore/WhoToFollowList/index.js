import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
  return (`
           <div class="list-group border border-solid border-dark rounded-0">
        <div class="border-bottom border-solid border-dark">
          <h6 class="fw-bold m-2">Who to follow</h6>
        </div>
  ${
      who.map(who => {
        return (WhoToFollowListItem(who));
      }).join('')
  }
           </div>
`);
}
export default WhoToFollowList;