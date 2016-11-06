(function($) {
  $.fn.SocialCounter = function(options) {
    var settings = $.extend({
      // These are the defaults.
      twitter_user:'',
      facebook_user:'',
      facebook_token:'',
      instagram_user:'',
      instagram_token:'',
      google_plus_id:'',
      google_plus_key:'',
      youtube_user:'',
      youtube_key:'',
      pinterest_user:''
    }, options);

    function pinterest(){
      //Pinterst API V3
      $.ajax({
        url: 'https://api.pinterest.com/v3/pidgets/users/'+settings.pinterest_user+'/pins',
        dataType: 'jsonp',
        type: 'GET',
        success: function(data) {   
          var followers = parseInt(data.data.user.follower_count);
          var k = kFormatter(followers);
          $('#bungkus_social .item.pinterest .count').append(k); 
          $('#bungkus_social .item.pinterest').attr('href','https://pinterest.com/'+settings.pinterest_user);
          getTotal(followers); 
        } 
      }); 
    }
    function facebook(){
      //Facebook API
      //60 Day Access Token - Regenerate a new one after two months
      //https://neosmart-stream.de/facebook/how-to-create-a-facebook-access-token/
      //https://smashballoon.com/custom-facebook-feed/access-token/
      $.ajax({
        url: 'https://graph.facebook.com/v2.8/'+settings.facebook_user,
        dataType: 'json',
        type: 'GET',
        data: {
          access_token:settings.facebook_token,
          fields:'fan_count'
        },
        success: function(data) {   
          var followers = parseInt(data.fan_count);
          var k = kFormatter(followers);
          $('#bungkus_social .item.facebook .count').append(k); 
          $('#bungkus_social .item.facebook').attr('href','https://facebook.com/'+settings.facebook_user);
          getTotal(followers); 
        } 
      }); 
    }
    function instagram(){
      //Create access tokens
      //https://www.youtube.com/watch?v=LkuJtIcXR68
      //http://instagram.pixelunion.net
      //http://dmolsen.com/2013/04/05/generating-access-tokens-for-instagram
      //http://ka.lpe.sh/2015/12/24/this-request-requires-scope-public_content-but-this-access-token-is-not-authorized-with-this-scope/
      $.ajax({
        url: 'https://api.instagram.com/v1/users/self/',
        dataType: 'jsonp',
        type: 'GET',
        data: {
          access_token: settings.instagram_token
        },
        success: function(data) {
          var followers = parseInt(data.data.counts.followed_by);
          var k = kFormatter(followers);
          $('#bungkus_social .item.instagram .count').append(k);
          $('#bungkus_social .item.instagram').attr('href','https://instagram.com/'+settings.instagram_user);
          getTotal(followers); 
        }
      });
    }
    function google(){
      //Google+ API
      $.ajax({
        url: 'https://www.googleapis.com/plus/v1/people/' + settings.google_plus_id,
        type: "GET",
        dataType: "json",
        data:{
          key:settings.google_plus_key
        },
        success: function (data) {
          var followers = parseInt(data.circledByCount);
          var k = kFormatter(followers);
          $("#bungkus_social .item.google .count").append(k);
          $('#bungkus_social .item.google').attr('href','https://plus.google.com/'+settings.google_plus_id);
          getTotal(followers); 
        }
      });
    }
    function youtube(){
      //YouTube API V3
      $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels',
        dataType: 'jsonp',
        type: 'GET',
        data:{
          part:'statistics',
          forUsername:settings.youtube_user,
          key: settings.youtube_key
        },
        success: function(data) {   
          var subscribers = parseInt(data.items[0].statistics.subscriberCount);
          var k = kFormatter(subscribers);
          $('#bungkus_social .item.youtube .count').append(k); 
          $('#bungkus_social .item.youtube').attr('href','https://youtube.com/'+settings.youtube_user);
          getTotal(subscribers); 
        } 
      }); 
    }
    function twitter(){
      //Twitter API - Requires PHP.
      //References
      //http://stackoverflow.com/questions/17409227/follower-count-number-in-twitter
      //https://github.com/J7mbo/twitter-api-php
      $.ajax({
        url: 'https://juanvargas.net/SocialCounters/twitter/index.php',
        dataType: 'json',
        type: 'GET',
        data:{
          user:settings.twitter_user
        },
        success: function(data) {   
          var followers = parseInt(data.followers);
          $('#bungkus_social .item.twitter .count').append(followers).digits(); 
          $('#bungkus_social .item.twitter').attr('href','https://twitter.com/'+settings.twitter_user);
          getTotal(followers); 
        } 
      }); 
    }
    
    //Function to add commas to the thousandths
    $.fn.digits = function(){ 
      return this.each(function(){ 
        $(this).text( $(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") ); 
      })
    }
    //Function to add K to thousands
    function kFormatter(num) {
      return num > 999 ? (num/1000).toFixed(1) + 'k' : num;
    }
    //Total Counter
    var total = 0;
    //Get an integer paramenter from each ajax call
    function getTotal(data) {
      total = total + data;
      $("#total").html(total).digits();
      $("#total_k").html(kFormatter(total));
    }

    function linkClick(){
      $('#bungkus_social .item').attr('target','_blank');
    }
    linkClick();

    //Call Functions
    if(settings.twitter_user!=''){ 
      twitter(); 
    } if(settings.facebook_user!='' && settings.facebook_token!=''){ 
      facebook(); 
    } if(settings.instagram_user!='' && settings.instagram_token!=''){ 
      instagram();
    } if(settings.google_plus_id!='' && settings.google_plus_key!=''){ 
      google();
    } if(settings.youtube_user!='' && settings.youtube_key!=''){ 
      youtube(); 
    } if(settings.pinterest_user!=''){ 
      pinterest(); 
    }
  };
}(jQuery));

