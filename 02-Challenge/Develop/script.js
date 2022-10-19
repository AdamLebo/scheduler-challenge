var today = moment().format('MMMM Do YYYY');

$('#currentDay').text(today);

$(".saveBtn").on("click", function(){
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
