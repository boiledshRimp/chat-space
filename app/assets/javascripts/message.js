/////重要/////

$(function(){
  function buildHTML(message){
    console.log(message);
//////////三項演算子//////////
   var img = message.image.url? `<img src=${message.image.url} >` : '';
   
//////////三項演算子//////////  
      
      var html =
       `<div class="message" data-message-id=${message.id}>
          <div class="message__upper-info">
            <div class="message__upper-info__talker">
              ${message.user_name}
            </div>
            <div class="message__upper-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
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
  })
  
  var reloadMessages = function() {

    var nowurl = location.pathname ;
    
    var group_id = $(".main-header").data('group-id');

    if(nowurl == `/groups/${group_id}/messages`){

      //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
      last_message_id = $(".message:last").data('message-id');
      $.ajax({
        //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
        url: 'api/messages',
        //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'get',
        dataType: 'json',
        //dataオプションでリクエストに値を含める
        data: {id: last_message_id}
      })

      .done(function(messages) {

      if(messages !=  ''){

        console.log('success');
        
        //追加するHTMLの入れ物を作る
        var insertHTML = '';

        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        for(var i =0; i<messages.length; i++){   
          insertHTML;
          }

        //メッセージが入ったHTMLを取得

        //foreache

        
          //insertHTML = buildHTML(messages);
        
        $.each(messages, function(index, message) {
 
          insertHTML = buildHTML(message);
          $('.messages').append(insertHTML); 
         
        })
           
        //スクロール
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});

      }

      })

      .fail(function() {
        console.log('error');
      });

    }else{
  
    }

  };

  setInterval(reloadMessages, 5000);

})