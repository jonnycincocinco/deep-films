<footer class="site-footer anim-in-out anim-slide-below-fade below-hero" data-anim-speed="2000">

	<div class="container">

		<div class="grid">
			<div class="grid__item grid__item--logo">
				<span class="site-footer-brand__ident">Earthly</span>
			</div>
			<div class="grid__item">
				<ul class="site-footer-list">
						<!--li><span class="site-footer-list__title">Features</span></li-->
						<li><a class="site-footer-list__link" ui-sref="about" ng-class="{active: $state.current.activetab == 'services'}">About</a></li>
						<li><a class="site-footer-list__link" ui-sref="work" ng-class="{active: $state.current.activetab == 'earthly-dna'}">The Goods</a></li>
						<li><a class="site-footer-list__link" ui-sref="what-we-do" ng-class="{active: $state.current.activetab == 'what-we-do'}">What we do</a></li>
				</ul>
			</div>
			<div class="grid__item">
				<ul class="site-footer-list">
					<li><a class="site-footer-list__link" ui-sref="deepness" ng-class="{active: $state.current.activetab == 'deepness'}">Deepness</a></li>
					<li><a class="site-footer-list__link" ui-sref="contact" ng-class="{active: $state.current.activetab == 'faqs'}">Contact</a></li>
				</ul>
			</div>
			<div class="grid__item grid__item--address">
				<ul class="site-footer-list">
						<li><span class="site-footer-list__link">213B Second St,</span></li>
						<li><span class="site-footer-list__link">Sausalito, CA</span></li>
						<li><span class="site-footer-list__link">94965</span></li>
				</ul>
			</div>
			<div class="grid__item">
				<ul class="site-footer-list site-footer-list--social">
				<li><a class="site-footer-list__icon site-footer-list__icon--instagram" href="https://www.instagram.com/deepfilmsrob/" target="_blank">Instagram</a></li>
				<li><a class="site-footer-list__icon site-footer-list__icon--twitter" href="https://twitter.com/deepfilmsRob" target="_blank">Twitter</a></li>
				<li><a class="site-footer-list__icon site-footer-list__icon--facebook" href="https://www.facebook.com/DeepFilms/" target="_blank">Facebook</a></li>
			</ul>
			</div>

		</div>
	</div>


	<div class="container">
		<div class="grid">
			<div class="grid__item copyright text-align-center">
				<p class="white">&copy;2017 Deep Films</p>
			</div>
</footer>
</body>
</html>
