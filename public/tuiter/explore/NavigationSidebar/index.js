const NavigationSidebar = () => {
  return (`<div class="list-group">
        <i class="fab fa-twitter fa-1x list-group-item list-group-item-action disabled"></i>
        <a href="../../home.html" class="list-group-item list-group-item-action">
          <i class="fas fa-home fa-1x"></i>
          <div class="d-none d-xl-inline">
            Home
          </div>
        </a>
        <a href="index.html" class="list-group-item list-group-item-action active">
          <i class="fas fa-hashtag fa-1x"></i>
          <div class="d-none d-xl-inline">
            Explore
          </div>
        </a>
        <a href="../notifications.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-bell fa-1x"></i>
          <div class="d-none d-xl-inline">
            Notifications
          </div>
        </a>
        <a href="../messages.html" class="list-group-item list-group-item-action">
          <i class="fas fa-mail-bulk fa-1x"></i>
          <div class="d-none d-xl-inline">
            Messages
          </div>
        </a>
        <a href="../../bookmarks/index.html"
           class="list-group-item list-group-item-action">
          <i class="fas fa-bookmark fa-1x"></i>
          <div class="d-none d-xl-inline">
            Bookmarks
          </div>
        </a>
        <a href="../lists.html" class="list-group-item list-group-item-action">
          <i class="fas fa-list fa-1x"></i>
          <div class="d-none d-xl-inline">
            Lists
          </div>
        </a>
        <a href="../../profile.html" class="list-group-item list-group-item-action">
          <i class="fas fa-user fa-1x"></i>
          <div class="d-none d-xl-inline">
            Profile
          </div>
        </a>
        <a href="../more.html" class="list-group-item list-group-item-action">
          <i class="fas fa-ellipsis-h fa-1x"></i>
          <div class="d-none d-xl-inline">
            More
          </div>
        </a>
      </div>
      <button class="btn btn-primary rounded-pill w-100 mt-2">
        Tuit
      </button>
 `);
}
export default NavigationSidebar;