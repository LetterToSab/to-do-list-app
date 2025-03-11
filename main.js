$(document).ready(function(){
  var count = 0; 
  
  $('#todo-form').submit(function(event){
    event.preventDefault(); 
    
    var toAdd = $('#text').val(); 
    
    if (toAdd) {
      count++;
      $('.todo-list').append(
        '<li>' +
          '<div class="left-col">' +
            '<input type="checkbox" id="checked' + count + '">' +
            '<label for="checked' + count + '"></label>' +
            '<span>' + toAdd + '</span>' +
          '</div>' +
          '<span class="remove"><i class="bx bxs-trash-alt"></i></span>' +
        '</li>'
      );
      
      $('#text').val('');
    }
  });

  $(document).on('click', 'input[type="checkbox"]', function() {
    $(this).closest('li').find('span').toggleClass('strike');
  });
  

  $(document).on('click', '.remove', function() {
    $(this).closest('li').fadeOut(500); 
  });

  $("#sortable").sortable();   
});
