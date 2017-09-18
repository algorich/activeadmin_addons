$(function() {
  setupDateTimePicker(document);

  $(document).on('has_many_add:after', '.has_many_container', function(event, fieldset) {
    return setupDateTimePicker(fieldset);
  });

  function setupDateTimePicker(container) {
    var defaults = {
      formatDate: 'd/m/Y',
      format: 'd/m/Y H:i',
      allowBlank: true,
      defaultSelect: false,
      validateOnBlur: false,
    };

    var entries = $(container).find('input.date-time-picker-input');
    return entries.each(function(index, entry) {
      var options = $(entry).data('picker-options');
      var mixedOptions = $.extend(defaults, options);
      return $(entry).datetimepicker(mixedOptions);
    });
  }
});
