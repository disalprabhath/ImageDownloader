(function (ls) {
  'use strict';
  // Global
  ls.animation_duration = '500';

  // Popup
  var defaults = {
    // Filters
    folder_name: '',
    new_file_name: '',
    filter_url: '',
    filter_url_mode: 'normal',
    filter_min_width: 0,
    filter_min_width_enabled: false,
    filter_max_width: 3000,
    filter_max_width_enabled: false,
    filter_min_height: 0,
    filter_min_height_enabled: false,
    filter_max_height: 3000,
    filter_max_height_enabled: false,
    only_images_from_links: false,
    sort_by_size: false,
    sort_order: false,
    // Options
    // General
    show_download_confirmation: true,
    show_download_notification: true,
    show_file_renaming: false,
    // Filters
    show_url_filter: true,
    show_image_width_filter: true,
    show_image_height_filter: true,
    show_only_images_from_links: true,
	  show_sort_images_by_width: true,
	  show_sort_order: true,
    // Images
    show_image_url: true,
    show_image_filename: true,
    show_open_image_button: true,
    show_download_image_button: true,
    columns: 3,
    image_min_width: 50,
    image_max_width: 200,
    image_border_width: 3,
    image_border_color: '#3498db',
    image_tile_color: '#f2f7ff'
  };

  for (var option in defaults) {
    if (ls[option] === undefined) ls[option] = defaults[option];
    ls[option + '_default'] = defaults[option];
  }

  ls.options = JSON.stringify(Object.keys(defaults));
}(localStorage));
