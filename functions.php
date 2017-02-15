<?php

//require 'inc/custom-routes.php';
require 'inc/custom-routes.php';

require 'inc/angular-enqueue.php';


class angularjs_wp_theme {

	function init() {

		add_action( 'init', array( $this, 'register_my_menus' ) );
		add_action( 'init', array( $this, 'register_my_sidebar' ) );
		add_action( 'init', array( $this, 'createWorkItem' ) );
		add_action( 'init', array( $this, 'createDeep' ) );
	//	add_action( 'init', array( $this, 'createDeepness' ) );
		add_action( 'after_setup_theme', array( $this, 'add_awesome_theme_support' ) );
		add_action( 'admin_init', array( $this, 'apiCheck' ) );

		$angularScripts = new angular_enqueue();
		$angularScripts->init();

		$ang_routes = new angular_theme_routes();
		$ang_routes->__init();

	}

	function apiCheck(){

		if ( !class_exists( 'WP_REST_Response' ) ) {
		  add_action( 'admin_notices', array( $this, 'apiError' ) );
		}

	}
	function apiError(){

		echo '<div class="error"><p><strong>JSON REST API</strong> must be installed and activated for this theme to work properly</p></div>';

	}

	/* THEME SUPPORT */
	function add_awesome_theme_support(){

		add_theme_support( 'post-thumbnails' );
		add_post_type_support( 'page', 'excerpt' );

	}

	// REGISTER MENUS
	function register_my_menus() {

	  register_nav_menus(
	    array(
	      'header-menu' => __( 'Header Menu' ),
	      'footer-menu' => __( 'Footer Menu' )
	    )
	  );

	}

	//REGISTER SIDEBAR
	function register_my_sidebar() {

		register_sidebar(array(
			'name' 			=> 'Right Side',
			'id' 			=> 'right-sidebar',
			'before_widget' => '<section>',
			'after_widget' 	=> '</section>',
			'before_title' 	=> '<h4>',
			'after_title' 	=> '</h4>'
		));

	}

	function createNews() {
		$labels = array(
			'name'               => _x( 'News', 'post type general name' ),
			'singular_name'      => _x( 'News', 'post type singular name' ),
			'add_new'            => _x( 'Add New', 'News' ),
			'add_new_item'       => __( 'Add New News' ),
			'edit_item'          => __( 'Edit News' ),
			'new_item'           => __( 'New News' ),
			'all_items'          => __( 'All News' ),
			'view_item'          => __( 'View News' ),
			'search_items'       => __( 'Search News' ),
			'not_found'          => __( 'No News found' ),
			'not_found_in_trash' => __( 'No News found in the Trash' ),
			'parent_item_colon'  => '',
			'menu_name'          => 'News'
		);
		$args = array(
			'labels'        => $labels,
			'description'   => 'Holds our News and News specific data',
			'public'        => true,
			'menu_position' => -6, // set the menu position in the admin menu
			'show_ui' => true,
	  		'hierarchical' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'capability_type' => 'page',
			'taxonomies' => array('post_tag'),
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'tags', 'page-attributes', '' ),
			'has_archive'   => true,
			'taxonomies' => array('category', 'post_tag') // this is IMPORTANT

		);
		register_post_type( 'news', $args );
		register_taxonomy( 'format', 'news', $args );
	}

	function createLibraryHome() {
		$labels = array(
			'name'               => _x( 'Libary Home', 'post type general name' ),
			'singular_name'      => _x( 'Libary Home', 'post type singular name' ),
			'edit_item'          => __( 'Edit Libary Home' ),
			'search_items'       => __( 'Search What We Do' ),
			'not_found'          => __( 'No Libary Home found' ),
			'not_found_in_trash' => __( 'No Libary Home found in the Trash' ),
			'parent_item_colon'  => '',
			'menu_name'          => 'Libary Home'
		);
		$args = array(
			'labels'        => $labels,
			'description'   => 'Holds our Libary Home specific data',
			'public'        => true,
			'menu_position' => -2, // set the menu position in the admin menu
			'show_ui' => true,
	  		'hierarchical' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'capability_type' => 'page',
			'taxonomies' => array('post_tag'),
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'tags', 'page-attributes', '' ),
			'has_archive'   => true,
			'taxonomies' => array('category', 'post_tag') // this is IMPORTANT

		);
		register_post_type( 'what-we-do', $args );
		register_taxonomy( 'format', 'what-we-do', $args );
	}

	function createDeep() {
		$labels = array(
			'name'               => _x( 'Deepness', 'post type general name' ),
			'singular_name'      => _x( 'Deepness', 'post type singular name' ),
			'add_new'            => _x( 'Add New', 'Deepness' ),
			'add_new_item'       => __( 'Add New Deepness' ),
			'edit_item'          => __( 'Edit Deepness' ),
			'new_item'           => __( 'New Deepness' ),
			'all_items'          => __( 'All Deepness' ),
			'view_item'          => __( 'View Deepness' ),
			'search_items'       => __( 'Search Deepness' ),
			'not_found'          => __( 'No Deepness found' ),
			'not_found_in_trash' => __( 'No Deepness found in the Trash' ),
			'parent_item_colon'  => '',
			'menu_name'          => 'Deepness'
		);
		$args = array(
			'labels'        => $labels,
			'description'   => 'Holds our Deepness and Deepness specific data',
			'public'        => true,
			'menu_position' => -3, // set the menu position in the admin menu
			'show_ui' => true,
	  	'hierarchical' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'capability_type' => 'page',
			'taxonomies' => array('post_tag'),
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'tags', 'page-attributes', '' ),
			'has_archive'   => true,
			'taxonomies' => array('category', 'post_tag') // this is IMPORTANT

		);
		register_post_type( 'expertise', $args );
		register_taxonomy( 'format', 'expertise', $args );
	}

	function createWorkItem() {
		$labels = array(
			'name'               => _x( 'Work Items', 'post type general name' ),
			'singular_name'      => _x( 'Work Item', 'post type singular name' ),
			'add_new'            => _x( 'Add New', 'Work Item' ),
			'add_new_item'       => __( 'Add New Work Item' ),
			'edit_item'          => __( 'Edit Work Item' ),
			'new_item'           => __( 'New Work Item' ),
			'all_items'          => __( 'All Work Items' ),
			'view_item'          => __( 'View Work Item' ),
			'search_items'       => __( 'Search Work Item' ),
			'not_found'          => __( 'No Work Items found' ),
			'not_found_in_trash' => __( 'No Work Items found in the Trash' ),
			'parent_item_colon'  => '',
			'menu_name'          => 'Work Items'
		);
		$args = array(
			'labels'        => $labels,
			'description'   => 'Holds our Work Item specific data',
			'public'        => true,
			'menu_position' => -3, // set the menu position in the admin menu
			'show_ui' => true,
	  		'hierarchical' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'capability_type' => 'page',
			'taxonomies' => array('post_tag'),
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'tags', 'page-attributes', '' ),
			'has_archive'   => true,
			'taxonomies' => array('category', 'post_tag') // this is IMPORTANT

		);
		register_post_type( 'work', $args );
		register_taxonomy( 'format', 'work', $args );
	}




	function createContact() {
		$labels = array(
			'name'               => _x( 'Contact', 'post type general name' ),
			'singular_name'      => _x( 'Contact', 'post type singular name' ),
			'add_new'            => _x( 'Add New', 'Contact' ),
			'add_new_item'       => __( 'Add New Contact' ),
			'edit_item'          => __( 'Edit Contact' ),
			'new_item'           => __( 'New Contact' ),
			'all_items'          => __( 'All Contact' ),
			'view_item'          => __( 'View Contact' ),
			'search_items'       => __( 'Search Contact' ),
			'not_found'          => __( 'No Contact found' ),
			'not_found_in_trash' => __( 'No Contact found in the Trash' ),
			'parent_item_colon'  => '',
			'menu_name'          => 'Contact'
		);
		$args = array(
			'labels'        => $labels,
			'description'   => 'Holds our Contact and Contact specific data',
			'public'        => true,
			'menu_position' => -7, // set the menu position in the admin menu
			'show_ui' => true,
	  		'hierarchical' => true,
			'show_in_menu' => true,
			'query_var' => true,
			'capability_type' => 'page',
			'taxonomies' => array('post_tag'),
			'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'tags', 'page-attributes', '' ),
			'has_archive'   => true,
			'taxonomies' => array('category', 'post_tag') // this is IMPORTANT

		);
		register_post_type( 'contact', $args );
		register_taxonomy( 'format', 'contact', $args );
	}

}

$angularJStheme = new angularjs_wp_theme();
$angularJStheme->init();

?>
