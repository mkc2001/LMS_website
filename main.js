$(document).ready(function (ev) {

    $('[data-toggle="popover"]').popover({
        delay: { show: 500 }
    });


    let $deleteModal = $("#deleteModal");

    $deleteModal.on("show.bs.modal", function (ev) {

        var button = ev.relatedTarget
        var teamId = $(button).attr("data-id");
        var teamName = button.getAttribute('data-name')

        var $modalTitle = $('.modal-title')
        var $modalBody = $('.modal-body')

        $modalTitle.text(`Delete ${teamName}?`);
        $modalBody.text(`Are you sure you want to delete ${teamName}? This action is unreversable.`)
        $deleteModal.attr("data-name", teamName);
    });

    $("#yesButton").click(function (ev) {
        addAlert($deleteModal.attr("data-name"))
    })

    function addAlert(teamName) {
        let alertHtml = `<div id="deleteAlert" class="alert alert-warning alert-dismissible fade show w-50" role="alert"><span>
                       <strong">You deleted Team: ${teamName}</span>
                       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                   </div>`;
        $("#alertContainer").html(alertHtml);

    }

})