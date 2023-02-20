import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
  return (`
           <div class="list-group border rounded-0 border-solid border">
  ${
      posts.map(post => {
        return (PostSummaryItem(post));
      }).join('')
  }
           </div>
`);
}
export default PostSummaryList;