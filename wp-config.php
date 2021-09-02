<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '6U55z8+nQMStgtfdddDvgONqMnMQNIYbxXAPh7rkhhHDHIhbH/Sn3Iq6Wismat1T68ECWZ29P07XvUXcCciC/A==');
define('SECURE_AUTH_KEY',  '+CeoXtFSp4hp6zg3AU+w8ZbmyAXL/34MWbfIWryUbFc9icUclZusGTUtRVtTUvbxmIDYuv60gpYaDDLJYHZ2gA==');
define('LOGGED_IN_KEY',    'NbeK32A3R7F17vvQaJLi657OTOrrw9ktDSshFxM2oiMjqcqpbOZ0jQPyBdB5FTujEwrOcKbFyRmk20zFnkxnDA==');
define('NONCE_KEY',        'BcsDmHVxE47kww/lo6wLrVy4W0QSQhRCjhEhQXDnacpHFwBG50BiKTupuNYd20v4oWv+eXdxqGLQ0EDcVlRabA==');
define('AUTH_SALT',        '1JR3u3ItGvqTt6x1ysI+DGyLdasr//qvE+WjVoCHHdq8BU6HFlLntEKD45YzGIX9WRGrGfgo2XcViyLs12F8Ig==');
define('SECURE_AUTH_SALT', 'DEeHGNzOAPAp2O76XmviTuH+ubu4Z95AspSZn37HGOYw81psu+XCT6F7P2wVEjmHwTKdEU4Y1OOrY/xELTq4LQ==');
define('LOGGED_IN_SALT',   'v6XdyCRRz18wVXrXdSXJ18ws0WtAOG8XIyUvNZTrYyHgbTIbjIvumBIXOBh/9kmBR7GJz9fCXL3k1UFJ4ElmRw==');
define('NONCE_SALT',       'NvDopS/GB3drk24zneB3y8+gaALu8VMkx/G4W759xYufSTKesbpz7xVMXpN/msDPSI22yo5w2t+gSw/E6ADIhQ==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
