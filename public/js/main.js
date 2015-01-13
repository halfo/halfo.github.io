(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);


$(function(){
    $('input[type="text"]').keyup(function(e){
      if (e.keyCode == 27) $(this).val("");
      var searchText = $(this).val();

      $('ul > li > a').each(function(){
        var currentText = $(this).text(),
            searchTextLength = searchText.length,
            j = 0;

        for (var i in currentText) {
          if (searchTextLength == j) break;
          if (currentText [i].toLowerCase() == searchText [j] ||
              currentText [i] == searchText [j])
            ++j;
        }

        $(this).parent().toggle(searchTextLength == j);
      });
    });
});