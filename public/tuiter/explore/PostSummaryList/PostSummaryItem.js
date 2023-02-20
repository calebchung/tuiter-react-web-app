function PostSummaryItem(post) {
  return (`<div class="container position-relative border-bottom border-solid border-dark p-0">
          <div class="row p-2">
            <div class="col-10">
              <p class="wd-tuit-normal">
                ${post.topic}
              </p>
              <p class="wd-tuit-bold">
                ${post.userName}
                <i class="fas fa-check-circle"></i>
                - ${post.time}
              </p>
              <p class="wd-tuit-bold">
                ${post.title}
              </p>
              <p class="wd-tuit-normal pb-2">
                ${post.tweets}
              </p>
            </div>
            <div class="col-2 p-1">
              <img src=${post.image} class="img-fluid">
            </div>
          </div>
        </div>
   `);
}
export default PostSummaryItem;