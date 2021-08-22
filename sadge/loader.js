window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

function openTab(th)
{
    window.open(th.name,'_blank');
}



