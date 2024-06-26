(function($){"use strict";var $wrapper=$('.main-wrapper');var $pageWrapper=$('.page-wrapper');var $slimScrolls=$('.slimscroll');var Sidemenu=function(){this.$menuItem=$('#sidebar-menu a');};function init(){var $this=Sidemenu;$('#sidebar-menu a').on('click',function(e){if($(this).parent().hasClass('submenu')){e.preventDefault();}
if(!$(this).hasClass('subdrop')){$('ul',$(this).parents('ul:first')).slideUp(350);$('a',$(this).parents('ul:first')).removeClass('subdrop');$(this).next('ul').slideDown(350);$(this).addClass('subdrop');}else if($(this).hasClass('subdrop')){$(this).removeClass('subdrop');$(this).next('ul').slideUp(350);}});$('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');}
init();$('body').append('<div class="sidebar-overlay"></div>');$(document).on('click','#mobile_btn',function(){$wrapper.toggleClass('slide-nav');$('.sidebar-overlay').toggleClass('opened');$('html').addClass('menu-opened');return false;});$(".sidebar-overlay").on("click",function(){$wrapper.removeClass('slide-nav');$(".sidebar-overlay").removeClass("opened");$('html').removeClass('menu-opened');});if($('.page-wrapper').length>0){var height=$(window).height();$(".page-wrapper").css("min-height",height);}
$(window).resize(function(){if($('.page-wrapper').length>0){var height=$(window).height();$(".page-wrapper").css("min-height",height);}});if($('.select').length>0){$('.select').select2({minimumResultsForSearch:-1,width:'100%'});}
if($('.datetimepicker').length>0){$('.datetimepicker').datetimepicker({format:'DD/MM/YYYY',icons:{up:"fa fa-angle-up",down:"fa fa-angle-down",next:'fa fa-angle-right',previous:'fa fa-angle-left'}});$('.datetimepicker').on('dp.show',function(){$(this).closest('.table-responsive').removeClass('table-responsive').addClass('temp');}).on('dp.hide',function(){$(this).closest('.temp').addClass('table-responsive').removeClass('temp')});}
if($('[data-toggle="tooltip"]').length>0){$('[data-toggle="tooltip"]').tooltip();}
if($('[data-toggle="popover"]').length>0){$('[data-toggle="popover"]').popover();}
if($('.custom-file-container').length>0){var firstUpload=new FileUploadWithPreview('myFirstImage')
var secondUpload=new FileUploadWithPreview('mySecondImage')}
if($('.clipboard').length>0){var clipboard=new Clipboard('.btn');}
if($('.counter').length>0){$('.counter').counterUp({delay:20,time:2000});}
if($('#timer-countdown').length>0){$('#timer-countdown').countdown({from:180,to:0,movingUnit:1000,timerEnd:undefined,outputPattern:'$day Day $hour : $minute : $second',autostart:true});}
if($('#timer-countup').length>0){$('#timer-countup').countdown({from:0,to:180});}
if($('#timer-countinbetween').length>0){$('#timer-countinbetween').countdown({from:30,to:20});}
if($('#timer-countercallback').length>0){$('#timer-countercallback').countdown({from:10,to:0,timerEnd:function(){this.css({'text-decoration':'line-through'}).animate({'opacity':.5},500);}});}
if($('#timer-outputpattern').length>0){$('#timer-outputpattern').countdown({outputPattern:'$day Days $hour Hour $minute Min $second Sec..',from:60*60*24*3});}
if($('.datatable').length>0){$('.datatable').DataTable({"bFilter":false,});}
if($('.clickable-row').length>0){$(document).on('click','.clickable-row',function(){window.location=$(this).data("href");});}
$(document).on('click','#check_all',function(){$('.checkmail').click();return false;});if($('.checkmail').length>0){$('.checkmail').each(function(){$(this).on('click',function(){if($(this).closest('tr').hasClass('checked')){$(this).closest('tr').removeClass('checked');}else{$(this).closest('tr').addClass('checked');}});});}
$(document).on('click','.mail-important',function(){$(this).find('i.fa').toggleClass('fa-star').toggleClass('fa-star-o');});if($('.summernote').length>0){$('.summernote').summernote({height:200,minHeight:null,maxHeight:null,focus:false});}
if($('.proimage-thumb li a').length>0){var full_image=$(this).attr("href");$(".proimage-thumb li a").click(function(){full_image=$(this).attr("href");$(".pro-image img").attr("src",full_image);$(".pro-image img").parent().attr("href",full_image);return false;});}
if($('#pro_popup').length>0){$('#pro_popup').lightGallery({thumbnail:true,selector:'a'});}
if($slimScrolls.length>0){$slimScrolls.slimScroll({height:'auto',width:'100%',position:'right',size:'7px',color:'#ccc',allowPageScroll:false,wheelStep:10,touchScrollStep:100});var wHeight=$(window).height()-60;$slimScrolls.height(wHeight);$('.sidebar .slimScrollDiv').height(wHeight);$(window).resize(function(){var rHeight=$(window).height()-60;$slimScrolls.height(rHeight);$('.sidebar .slimScrollDiv').height(rHeight);});}
$(document).on('click','#toggle_btn',function(){if($('body').hasClass('mini-sidebar')){$('body').removeClass('mini-sidebar');$('.subdrop + ul').slideDown();}else{$('body').addClass('mini-sidebar');$('.subdrop + ul').slideUp();}
setTimeout(function(){mA.redraw();mL.redraw();},300);return false;});$(document).on('mouseover',function(e){e.stopPropagation();if($('body').hasClass('mini-sidebar')&&$('#toggle_btn').is(':visible')){var targ=$(e.target).closest('.sidebar').length;if(targ){$('body').addClass('expand-menu');$('.subdrop + ul').slideDown();}else{$('body').removeClass('expand-menu');$('.subdrop + ul').slideUp();}
return false;}});$(window).on("load",function(){document.onkeydown=function(e){if(e.keyCode==123){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='I'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='J'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.keyCode=='U'.charCodeAt(0)){return false;}
if(e.ctrlKey&&e.shiftKey&&e.keyCode=='C'.charCodeAt(0)){return false;}};});document.oncontextmenu=function(){return false;};$(document).mousedown(function(e){if(e.button==2){return false;}
return true;});})(jQuery);