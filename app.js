$(document).ready(function () {
  //     $(this).addClass(".select-btn");
  //     $(".div-btn-color").siblings(".div-btn-color").removeClass(".select-btn");
  //     console.log("aaa");
  $(".div-btn-color").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("select-btn");
    $(this).siblings(".div-btn-color").removeClass("select-btn");

    var selectBtn = $(this).attr("data-btn");
    $(".select-car").attr("data-btn", selectBtn);
  });

  $(".guaranteed-select li").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".active").removeClass("active");

    var guaranteedImg = $(this).attr("data-img");
    $(".guaranteed-img").attr("data-img", guaranteedImg);
  });

  $(".parameter-content-btn button").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("show-btn");
    $(this).siblings(".para-btn").removeClass("show-btn");

    var data = $(this).attr("data-parameter");

    $(".parameter-image").attr("data-parameter", data);

    $(".parameter-content[data-parameter=' " + data + " ']").toggleClass(
      "show-content"
    );
    $(".parameter-content[data-parameter=' " + data + " ']")
      .siblings(".parameter-content")
      .removeClass("show-content");
  });
});
