var date = document.querySelectorAll(".dateselect");

date.forEach(element => {
  console.log(element)
  element.addEventListener("click", function () {
    let from = this.querySelector('[data-from]');
    let to = this.querySelector('[data-to]');
    $(function () {
      var dateFormat = "mm/dd/yy",
        from = $(from)
          .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 1
          })
          .on("change", function () {
            to.datepicker("option", "minDate", getDate(this));
          }),
        to = $(to).datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
          .on("change", function () {
            from.datepicker("option", "maxDate", getDate(this));
          });

      function getDate(element) {
        var date;
        try {
          date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
          date = null;
        }

        return date;
      }
    });
  })
});

var getDate = function (variable) {
  $(function () {
    $('.dateselect').each(function () {
      $(this).datepicker();
      var from = $(this).find('[data-from]');
      // $(form).datepicker("option", "minDate", getDate(this))
      to.datepicker("option", "minDate", getDate(this));
      from.datepicker("option", "maxDate", getDate(this));
    });
  });
};