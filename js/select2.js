(function($) {
    Drupal.behaviors.select2 = {
        attach: function(context) {
            var select2_settings = Drupal.settings.select2;
            $.each(select2_settings, function(key, value) {
                // console.log(key, value);
                // Get the select to be customized with select2
                var $select_to_be_customized = $('#' + key);
                // Get the classes of the current select
                var classes = $select_to_be_customized.attr('id');
                // console.log ( $select_to_be_customized, ' | classes: ', classes );
                var select2_default_options = {
                    dropdownCssClass : classes, // add some classes to the dropdown
                    minimumResultsForSearch : 20 // a negative number to disable the search field
                }
                // Get options from form settings
                var options = (value.options ? value.options : {});
                $.extend(select2_default_options, options);
                $select_to_be_customized.once().select2(select2_default_options);
                // Add a class to the original select (useful to be able to get the module processed select elements)
                $select_to_be_customized.addClass('select2-processed');
            });
        }
    };
})(jQuery);


