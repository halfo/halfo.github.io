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


// Wiki Page's Search Bar (Fuzzy String Searching)

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


// Category Page's Coloring

var tag_color = { programming : "rgb(188, 0, 5)",
                  data_structure : "rgb(100, 69, 57)",
                  string : "rgb(56, 123, 148)",
                  graph : "rgb(125, 188, 178)",
                  math : "rgb(153, 0, 76)",
                  misc : "rgb(158, 149, 153)"};

$(function(){
  $('.archive.tag > a').each(function(){
    var tag = $(this).attr('href').substring (1),
        color = tag_color [tag];


    $(this).css ('background-color', color);
    $('.archive.category.' + tag).css('border-left-color', color);
  });
});
