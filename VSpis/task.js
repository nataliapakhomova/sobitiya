window.onload = function() {
    var dropdowns = document.getElementsByClassName("dropdown");
    Array.from(dropdowns).forEach(function(element) {
        var dropdownValue = element.querySelector(".dropdown__value");
        var dropdownList = element.querySelector(".dropdown__list");
        var dropdownItems = element.getElementsByClassName("dropdown__item");
        dropdownValue.addEventListener("click", function() {
            dropdownList.classList.add("dropdown__list_active");
        });
        Array.from(dropdownItems).forEach(function(element) {
            element.addEventListener("click", function(event) {
                event.preventDefault();
                dropdownValue.textContent = element.textContent;
                dropdownList.classList.remove("dropdown__list_active");
            });
        });
    });
}