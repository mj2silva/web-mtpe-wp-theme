<form role="search" method="get" id="searchform" class="searchform " action="<?php echo esc_url( home_url( '/' ) ); ?>">
  <div class="input-group input-group-lg md-3">
    <span class="input-group-text searchbar__icon" id="basic-addon1">
      <img src="<?php echo get_template_directory_uri() ?>/assets/img/icons/search_black_24dp.svg">
    </span>
    <label for="search" class="visually-hidden">Buscar</label>
    <input class="form-control searchbar__input" name="s" id="s" value="<?php echo get_search_query(); ?>" placeholder="Buscar en DSSML" />
  </div>
</form>