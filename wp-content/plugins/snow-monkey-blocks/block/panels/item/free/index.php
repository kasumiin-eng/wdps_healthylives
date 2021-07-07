<?php
/**
 * @package snow-monkey-blocks
 * @author inc2734
 * @license GPL-2.0+
 */

/**
 * editor_script
 */
$asset = include( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/panels/item/free/editor.asset.php' );
wp_register_script(
	'snow-monkey-blocks/panels/item/free/editor',
	SNOW_MONKEY_BLOCKS_DIR_URL . '/dist/block/panels/item/free/editor.js',
	array_merge( $asset['dependencies'], [ 'snow-monkey-blocks-editor' ] ),
	filemtime( SNOW_MONKEY_BLOCKS_DIR_PATH . '/dist/block/panels/item/free/editor.js' ),
	true
);

register_block_type_from_metadata(
	__DIR__,
	[
		'editor_script' => 'snow-monkey-blocks/panels/item/free/editor',
	]
);
