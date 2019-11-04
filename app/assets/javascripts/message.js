$(function(){
  function buildHTML(message){
   img = message.image ? `<img src=${message.image} >` : '';
    
      
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="upper-message">
            <div class="upper-message__user-name">
              ${message.user_name}
            </div>
            <div class="upper-message__date">
              ${message.date}
            </div>
          </div>
          <div class="lower-message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
          ${img}
        </div>`
      return html;

    
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,//同期通信でいう『パス』
      type: "POST",//同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);      
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $('.new_message')[0].reset();
      $('.submit-btn').attr('disabled', false);
    })
    .fail(function(){
      alert('error');
    })
  })
})

