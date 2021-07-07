<?php
/**
 * @package snow-monkey
 * @author inc2734
 * @license GPL-2.0+
 * @version 14.0.0
 */

namespace Framework\Model\Page_Header;

use Framework\Helper\Page_Header\WooCommerce_Single_Page_Header as Page_Header_Helper;
use Framework\Contract\Model\Page_Header as Base;

class WooCommerce_Single_Page_Header extends Base {

	/**
	 * Return page header image url.
	 *
	 * @return string|false
	 */
	protected static function _get_image_url() {
		$_post             = get_post();
		$eyecatch_position = get_theme_mod( 'woocommerce-single-eyecatch' );

		return in_array( $eyecatch_position, static::$image_mods, true )
			? Page_Header_Helper::get_image_url( $_post )
			: false;
	}

	/**
	 * Return page header title.
	 *
	 * @return string|false
	 */
	protected static function _get_title() {
		$_post             = get_post();
		$eyecatch_position = get_theme_mod( 'woocommerce-single-eyecatch' );

		return in_array( $eyecatch_position, static::$title_mods, true )
			? Page_Header_Helper::get_title( $_post )
			: false;
	}

	/**
	 * Return page header alignment.
	 *
	 * @return string|false
	 */
	protected static function _get_align() {
		$_post             = get_post();
		$eyecatch_position = get_theme_mod( 'woocommerce-single-eyecatch' );

		return in_array( $eyecatch_position, static::$title_mods, true )
			? Page_Header_Helper::get_align( $_post )
			: false;
	}
}
