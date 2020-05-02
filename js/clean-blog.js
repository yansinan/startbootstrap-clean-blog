

(function($) {
  "use strict"; // Start of use strict

  // Floating label headings for the contact form
  $("body").on("input propertychange", ".floating-label-form-group", function(e) {
    $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
  }).on("focus", ".floating-label-form-group", function() {
    $(this).addClass("floating-label-form-group-with-focus");
  }).on("blur", ".floating-label-form-group", function() {
    $(this).removeClass("floating-label-form-group-with-focus");
  });

  // Show the navbar when the page is scrolled up
  var MQL = 992;

  //primary navigation slide-in effect
  if ($(window).width() > MQL) {
    var headerHeight = $('#mainNav').height();
    $(window).on('scroll', {
        previousTop: 0
      },
      function() {
        var currentTop = $(window).scrollTop();
        //check if user is scrolling up
        if (currentTop < this.previousTop) {
          //if scrolling up...
          if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
            $('#mainNav').addClass('is-visible');
          } else {
            $('#mainNav').removeClass('is-visible is-fixed');
          }
        } else if (currentTop > this.previousTop) {
          //if scrolling down...
          $('#mainNav').removeClass('is-visible');
          if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
        }
        this.previousTop = currentTop;
      });
  }
  // 读取html
  $('#preface').load('indexTop.html');
  $('#end').load('indexEnd.html');

  // 自动生成
  // 日期格式化
  //用法：new Date(c.udpateLatest).Format("yyyy/MM/dd");
  Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }
  let dateStart=new Date("2020/04/01");
  // 每日模块
  let domDay=$('#perDay');
  // 循环生成
  for(let i=0;i<40;i++){
    let strDate=dateStart.Format("M月d日");    
    // console.log(strDate);
    // 模板的字符串处理，替换XXXX为日期
    let strDay=domDay.html();
    strDay=strDay.replace(/XXXX/g,strDate);
    // console.log(strDay);
    // 字符转dom
    let domTmp = document.createElement("div");
    domTmp.innerHTML=strDay;
    // console.log(domTmp);
    // 每日模块id修改完成，添加到文档
    $('#accordion').append(domTmp);
    // 填充内容:
    let data=$.arrData[strDate]
    if(data){
      console.log(strDate);
      for(let k in data){
        console.log(k,data[k],"#collapse"+strDate+"["+k+"]",$("#collapse"+strDate+"["+k+"]"));
        $("#collapse"+strDate+" ["+k+"]").html(data[k]);
      }
    }
    // $("#collapse"+strDate).html(strDate+"具体内容")

    // 下一天
    dateStart.setDate(dateStart.getDate()+1);
    
  }
  

})(jQuery); // End of use strict
