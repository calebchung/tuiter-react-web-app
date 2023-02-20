import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
       <div class="row">
        <div class="col-8 wd-search-field pe-0">
          <i class="fas fa-search wd-search-icon"></i>
          <input type="text"
                 class="form-control rounded-pill wd-input-field"
                 id="search"
                 value="Search Tuiter">
        </div>
        <i class="col-1 fas fa-cog fa-lg pt-2" style="color: dodgerblue"></i>
      </div>

      <ul class="nav nav-tabs pb-2">
        <li class="nav-item">
          <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="nav-item d-none d-md-block">
          <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
      </ul>

      <div class="container p-0 position-relative">
        <img class="w-100" src="../../images/starship.jpg" alt="starship"/>
        <h2 class="position-absolute bottom-0 start-0 text-white p-2 m-0">SpaceX's Starship</h2>
      </div>
      ${PostSummaryList()}
    `);
}
export default ExploreComponent;
