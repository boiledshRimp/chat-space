/////重要/////

$(function(){
  function buildHTML(message){

//////////三項演算子//////////
   img = message.image ? `<img src=${message.image} >` : '';
//////////三項演算子//////////  
      
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
//////////ルーティングより先にここを見る//////////
    $.ajax({
      url: url,//同期通信でいう『パス』
      type: "POST",//同期通信でいう『HTTPメソッド』
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
//////////ルーティングより先にここを見る//////////

////////////////////
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
////////////////////
  })
})

