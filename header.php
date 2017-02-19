<?php
  $current_time = time();
  $json_opts = JSON_HEX_QUOT | JSON_NUMERIC_CHECK | JSON_PRETTY_PRINT | JSON_HEX_TAG;
?>

<!doctype html>
<!--[if lt IE 7]>      <html <?php language_attributes(); ?> ng-app="Deepfilms" class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html <?php language_attributes(); ?> ng-app="Deepfilms" class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html <?php language_attributes(); ?> ng-app="Deepfilms" class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html <?php language_attributes(); ?> ng-app="Deepfilms" class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html <?php language_attributes(); ?> ng-app="Deepfilms" class="no-js gte-ie10"> <!--<![endif]-->
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
  <meta name="description" content="">
  <meta name="author" content="">
  <meta property="og:url" content=""/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Deepfilms"/>
  <meta property="og:image" content="/wp-content/themes/earthly-2016/build/images/global/earthly.png"/>
  <meta property="og:description" content="Deepfilms Web site"/>
  <link rel="shortcut icon" href="wp-content/themes/deep-2017/build/images/icons/favicon.ico">
  <link rel="apple-touch-icon" sizes="76x76" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="120x120" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="152x152" href="wp-content/themes/earthly-2016/build/images/icons/apple-touch-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="wp-content/themes/earthly-2016/build/images/icons/Eapple-touch-icon-180x180.png">

  <title><?php wp_title('&laquo;', true, 'right'); ?> <?php bloginfo('name'); ?></title>
  <script type="text/javascript" src="https://easy.myfonts.net/v2/js?sid=155585(font-family=Mrs+Eaves+Roman)&sid=155586(font-family=Mrs+Eaves+Italic)&sid=155587(font-family=Mrs+Eaves+Bold)&key=kyHM6e5vNd"></script>
  <script src="//easy.myfonts.net/v2/js?sid=10140(font-family=Univers+65+Bold)&sid=218049(font-family=Univers+Pro+59+UltraCondensed)&sid=218105(font-family=Univers+Pro+45+Light)&sid=218106(font-family=Univers+Pro+55+Roman)&key=gc6tWYGw8A"></script>
  <style>
  #mfPreviewBar {
    opacity: 0;
    height: 0 !important;
    padding: 0 !important;
    text-align: -3000px;
  }
  </style>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAQVmHR83Txf1C6921cH5UlNb9YhnuPz9o&libraries=places"></script>
  <?php wp_head();?>
  <script src="https://cdn.jsdelivr.net/jquery.slick/latest/slick.min.js"></script>

  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', '', 'auto');
//    ga('send', 'pageview');

  </script>

</head>
<body class="{{bodylayout}}" ng-cloak>

<header>
  <nav class="desktop-nav">
    <div class="container">
      <div class="grid">
        <div class="grid__item">
          <a class="desktop-nav--mobile-toggle" title="Toggle Menu" href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <a ui-sref="home-inner" class="desktop-nav--logo" title="<?php echo bloginfo('name'); ?>"><?php echo bloginfo('name'); ?></a>
          <ul class="desktop-nav--main">
            <li class=""><a ui-sref="work" ng-class="{active: $state.current.activetab == 'work' || $state.current.activetab == 'demos' || $state.current.activetab == 'branded-content' || $state.current.activetab == 'corporate'}">Work</a></li>
            <li><a ui-sref="about" ng-class="{active: $state.current.activetab == 'about'}">About</a></li>
            <li><a ui-sref="deepness" ng-class="{active: $state.current.activetab == 'deepness'}">Deepness</a></li>
            <li><a ui-sref="contact" ng-class="{active: $state.current.activetab == 'contact'}">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <div class="categorybar">
    <div class="container">
      <!--div class="all-work"><a ui-sref="work">All Work</a></div-->
      <div class="categorybar-dropdown">
        <div class="dropdown-toggle">
          <button class="toggle" ng-click="toggleHiddenNav()">
            <span class="toggle-text">{{categoryName}}</span>
          </button>
          <div class="dropdown-inner" ng-class="navOpen">
            <ul class="filter-list">
              <li class="">
                <a ui-sref="work" ng-class="{active: $state.current.activetab == 'work'}" ng-click="toggleHiddenNav()">Featured</a>
              </li>
              <li class="">
                <a ui-sref="branded-content" ng-click="toggleHiddenNav()" ng-class="{active: $state.current.activetab == 'branded-content'}">Branded Content</a>
              </li>
              <li class="">
                <a ui-sref="demos" ng-click="toggleHiddenNav()" ng-class="{active: $state.current.activetab == 'demos'}">Demos</a>
              </li>
              <li class="">
                <a ui-sref="corporate" ng-click="toggleHiddenNav()" ng-class="{active: $state.current.activetab == 'corporate'}">Corporate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<nav class="mobile-nav">
    <ul class="mobile-nav--main">
      <li><a ui-sref="services" ng-class="{active: $state.current.activetab == 'services'}">Services</a>
        <ul class="mobile-nav--main__sub">
          <li><a ui-sref="earthly-dna" ng-class="{active: $state.current.activetab == 'earthly-dna'}">earthly(DNA)</a></li>
          <li><a ui-sref="portfolio" ng-class="{active: $state.current.activetab == 'portfolio'}">Portfolio</a></li>
          <li><a ui-sref="security" ng-class="{active: $state.current.activetab == 'security'}">Security</a></li>
        </ul>
      </li>
      <li><a ui-sref="fees" ng-class="{active: $state.current.activetab == 'fees'}">Fees</a></li>
      <li><a ui-sref="faqs" ng-class="{active: $state.current.activetab == 'faqs'}">FAQs</a></li>
      <li><a ui-sref="library" ng-class="{active: $state.current.activetab == 'library'}">Library</a></li>
      <li><a ui-sref="about-us" ng-class="{active: $state.current.activetab == 'about-us'}">About</a></li>
      <li>
        <button class="cta">Sign up</button>
      </li>
    </ul>
</nav>
