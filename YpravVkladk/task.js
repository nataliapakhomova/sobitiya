window.onload =  function() {
    var tabsWrapper = document.getElementsByClassName("tabs");
    Array.from(tabsWrapper).forEach(function(element) {
        var tabs = element.getElementsByClassName("tab");
        var tabContents = element.getElementsByClassName("tab__content");
        Array.from(tabs).forEach(function(currentTab, index) {
            currentTab.addEventListener("click", function() {
                var activeTab = element.querySelector(".tab_active");
                var activeContent = element.querySelector(".tab__content_active");
                var currentContent = tabContents[index];
                activeTab.classList.remove("tab_active");
                currentTab.classList.add("tab_active");
                activeContent.classList.remove("tab__content_active");
                currentContent.classList.add("tab__content_active");
            });
        });
    });
}