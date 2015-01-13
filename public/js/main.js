// Sidebar Functionality

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


if (typeof jQuery !== 'undefined') {
// Wiki Page's Search Bar (Fuzzy String Searching)

  $(function(){
    $('input[type="text"]').keyup(function(e){
      if (e.keyCode == 27) $(this).val("");
      var searchText = $(this).val();

      $('ul > li').each(function(){
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


  // Category Page's Coloring

  var tag_color = ["#644539", "#BC0005", "#d35400", "#16a085", "#99004C",
                   "#f1c40f", "#3498db", "#8e44ad", "#c0392b", "#2c3e50"];

  $(function(){
    var tagLength = tag_color.length,
        counter = 0;
    $('.archive.tag > a').each(function(){
      if (counter >= tagLength) counter = 0;

      var tag = $(this).attr('href').substring (1),
          color = tag_color [counter];

      $(this).css ('background-color', color);
      $('.archive.category.' + tag).css('border-left-color', color);

      ++counter;
    });
  });

}